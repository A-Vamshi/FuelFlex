import { View, Text, TextInput, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native'
import { useAuth } from '@clerk/clerk-expo'
import OpenAI from 'react-native-openai'



const settings = ({set}) => {
  const [form, setForm] = useState({
    key: "",
    org: "",
  })
  const handle = () => {
    
  }
  const { signOut } = useAuth();
  return (
    <SafeAreaView className="w-full h-full">
      <View className="h-full w-full mt-10">
        <View className="flex justify-center items-center gap-4">
        <Text className="font-bold text-xl">API key & Organisation: </Text>
          <TextInput 
            autoCapitalize='none'
            value={form.key}
            onChangeText={(e) => setForm({...form, key: e})}
            placeholder="API key"
            placeholderTextColor="#7B7B8B"
            className='text-black font-psemibold text-base border-2 border-outline rounded-md h-10 w-80 pl-3'
          />
          <TextInput 
            autoCapitalize='none'
            value={form.org}
            onChangeText={(e) => setForm({...form, org: e})}
            placeholder="Organisation"
            placeholderTextColor="#7B7B8B"
            className='text-black font-psemibold text-base border-2 border-outline rounded-md h-10 w-80 pl-3'
          />
          <TouchableOpacity onPress={handle} className='h-10 w-80 bg-outline justify-center items-center rounded-xl'>
            <Text className='text-white font-semibold'>Check</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={signOut} className='h-10 w-80 bg-outline justify-center items-center rounded-xl'>
            <Text className='text-white font-semibold'>Sign Out</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default settings