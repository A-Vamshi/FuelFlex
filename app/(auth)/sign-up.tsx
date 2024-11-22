import { View, Text, ScrollView, Image } from 'react-native'
import React, { useState } from 'react'
import { top } from '@/assets'
import InputField from '@/components/InputField'
import CustomButton from '@/components/CustomButton'
import { Link } from 'expo-router'
import OAuth from '@/components/OAuth'

const SignUp = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  })
  const onSignUpPress = () => {

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
        {/* Verification */}
      </View>
    </ScrollView>
  )
}

export default SignUp