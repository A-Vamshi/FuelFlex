import { View, Text, Image, ScrollView } from 'react-native'
import React, { useCallback, useState } from 'react'
import { top } from '@/assets'
import InputField from '@/components/InputField'
import CustomButton from '@/components/CustomButton'
import OAuth from '@/components/OAuth'
import { Link, useRouter } from 'expo-router'
import { useSignIn } from '@clerk/clerk-expo'

const SignIn = () => {
  const { signIn, setActive, isLoaded } = useSignIn()
  const router = useRouter()
  const [form, setForm] = useState({
    email: "",
    password: ""
  })
  const onSignInPress = useCallback(async () => {
    if (!isLoaded) {
      return
    }

    try {
      const signInAttempt = await signIn.create({
        identifier: form.email,
        password: form.password,
      })

      if (signInAttempt.status === 'complete') {
        await setActive({ session: signInAttempt.createdSessionId })
        router.replace('/(root)/(tabs)/home')
      } else {
        console.error(JSON.stringify(signInAttempt, null, 2))
      }
    } catch (err: any) {
      console.error(JSON.stringify(err, null, 2))
    }
  }, [isLoaded, form.email, form.password])
  return (
    <ScrollView className='flex bg-white' showsVerticalScrollIndicator={false}>
      <View className='flex-1 bg-white'>
        <View className='relative w-full h-[250px]'>
          <Image 
            source={top} 
            className='z-0 w-full h-[250px]'
          />
          <Text className='text-xl font-semibold text-black absolute bottom-5 left-5'>Welcome back</Text>
        </View>
        <View className='p-5'>
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
            onPress={onSignInPress}
          />
          <OAuth />
          <Link href="/(auth)/sign-up" className='text-md text-center'>
            <Text>Don't have an account? </Text>
            <Text className='text-outline'>Sign Up</Text>
          </Link>
        </View>
      </View>
    </ScrollView>
  )
}
export default SignIn