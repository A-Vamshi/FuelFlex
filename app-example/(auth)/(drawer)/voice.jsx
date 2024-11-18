import { View, Text, SafeAreaView, Button } from 'react-native'
import React from 'react'
import VoiceInput from '../../../components/VoiceInput'
import ChatMessage from '../../../components/ChatMessage'

const dummyMessages = [
  {
    id: 1,
    content: "Hello, how can I help you today?",
    role: "bot",
    prompt: "GPT-3",
  },
]

const voice = () => {
  return (
    <SafeAreaView className="h-full w-full" >
      <View className="h-full w-full">
        <ChatMessage item={dummyMessages[0]} />
        <VoiceInput />
      </View>
  </SafeAreaView>
  )
}

export default voice