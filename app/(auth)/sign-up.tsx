import { View, Text, ScrollView, Image, Alert } from 'react-native'
import React, { useState } from 'react'
import { top } from '@/assets'
import InputField from '@/components/InputField'
import CustomButton from '@/components/CustomButton'
import { Link, router } from 'expo-router'
import OAuth from '@/components/OAuth'
import { useSignUp } from '@clerk/clerk-expo'
import { Ionicons } from '@expo/vector-icons'
import { ReactNativeModal } from "react-native-modal"
import { fetchAPI } from '@/lib/fetch'

const SignUp = () => {
  const { isLoaded, signUp, setActive } = useSignUp()
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  })
  const [verification, setVerification] = useState({
    state: "default",
    error: "",
    code: ""
  })
  const [showSuccessModal, setShowSuccessModal] = useState(false)

  const onSignUpPress = async () => {
    if (!isLoaded) {
      return
    }

    try {
      await signUp.create({
        emailAddress: form.email,
        password: form.password, 
      })

      await signUp.prepareEmailAddressVerification({ strategy: 'email_code' })

      setVerification({
        ...verification,
        state: "pending",
      })
    } catch (err: any) {
      Alert.alert("Error", err.errors[0].longMessage)
      console.log("sign-up ~ onSignUpPress ~ err:", err)
      console.error(JSON.stringify(err, null, 2))
    }
  }

  const onPressVerify = async () => {
    if (!isLoaded) {
      return
    }

    try {
      const completeSignUp = await signUp.attemptEmailAddressVerification({
        code: verification.code,
      })

      if (completeSignUp.status === 'complete') {
        await fetchAPI("/(api)/user", {
          method: "POST",
          body: JSON.stringify({
            name: form.name,
            email: form.email,
            clerkId: completeSignUp.createdUserId,
          })
        })
        await setActive({ session: completeSignUp.createdSessionId })
        setVerification({...verification, state: "success", })
        
      } else {
        setVerification({...verification, state: "fail", error: "Verification failed" })
        console.error(JSON.stringify(completeSignUp, null, 2))
      }
    } catch (err: any) {
      setVerification({...verification, state: "fail", error: err.errors[0].logMessage })
      console.error(JSON.stringify(err, null, 2))
    }
  }
  return (
    <ScrollView className='flex bg-white' showsVerticalScrollIndicator={false}>
      <View className='flex-1 bg-white'>
        <View className='relative w-full h-[250px]'>
          <Image 
            source={top} 
            className='z-0 w-full h-[250px]'
          />
          <Text className='text-xl font-semibold text-black absolute bottom-5 left-5'>Create Your Account</Text>
        </View>
        <View className='p-5'>
          <InputField
            label="Username"
            placeholder="Enter your name"
            value={form.name}
            onChangeText={(v:string) => setForm({...form, name: v})}
          />
          <InputField
            label="Email"
            placeholder="Enter your email"
            value={form.email}
            onChangeText={(v:string) => setForm({...form, email: v})}
          />
          <InputField
            label="Passwoord"
            placeholder="Enter your password"
            value={form.password}
            onChangeText={(v:string) => setForm({...form, password: v})}
            secureTextEntry={true}
          />
          <CustomButton 
            title="Sign Up"
            className='mt-6'
            onPress={onSignUpPress}
          />
          <OAuth />
          <Link href="/(auth)/sign-in" className='text-md text-center'>
            <Text>Already have an account? </Text>
            <Text className='text-outline'>Log In</Text>
          </Link>
        </View>
        <ReactNativeModal 
          isVisible={verification.state === "pending"}
          onModalHide={() => {
            if (verification.state == "success") {
              setShowSuccessModal(true)
            }
          }}
        >
          <View className='bg-white px-7 py-9 rounded-2xl min-h-[300px]'>
            <Text className='text-2xl font-bold  mb-2 '>Verification</Text>
            <Text className='mb-5'>
              We've sent a verification code to {form.email}
            </Text>
            <InputField 
              label="Code"
              placeholder='123456'
              value={verification.code}
              keyboardType='numeric'
              onChangeText={(v) => setVerification({...verification, code: v})}
            />
            {verification.error && (
              <Text className='text-red-500 text-sm mt-1'>
                {verification.error}
              </Text>
            )}
            <CustomButton
              title="Verify Email"
              onPress={onPressVerify}
              className='mt-5 bg-green-400'
            />
          </View>
        </ReactNativeModal>
        <ReactNativeModal isVisible={showSuccessModal}>
          <View className='bg-white px-7 py-9 rounded-2xl min-h-[300px]'>
            <View className='mx-auto my-5'>
              <Ionicons name="checkmark-circle-outline" size={50} />
            </View>
            <Text className='text-3xl font-bold text-center'>Verified</Text>
            <Text className='text-base text-gray-400 text-center mt-2'>You have successfully verified your account.</Text>
            <CustomButton title="Browse home" onPress={() => {
              setShowSuccessModal(false)
              router.replace("/(root)/(tabs)/home")
            }} className='mt-5' />
          </View>
        </ReactNativeModal>
      </View>
    </ScrollView>
  )
}

export default SignUp