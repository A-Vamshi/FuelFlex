import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import CustomButton from './CustomButton'
import { Ionicons } from '@expo/vector-icons'

const OAuth = () => {
  const handleGoogleSignIn = () => {
    
  }
  return (
    <View>
      <View className='flex flex-row justify-center items-center mt-4 gap-x-3'>
        <View className='flex-1 h-[1px] bg-outline' />
        <Text>Or</Text>
        <View className='flex-1 h-[1px] bg-outline' />
      </View>
      <CustomButton
        title="Log in with Google"
        className='mt-5 w-full shadow-none'
        IconLeft={() => (<Ionicons name="logo-google" size={20} style={{marginRight: 4}} />)}
        bgVariant='outline'
        textVariant='primary'
        onPress={handleGoogleSignIn}
      />
    </View>
  )
}

export default OAuth