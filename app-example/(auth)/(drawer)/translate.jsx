import { View, Text, SafeAreaView, Button, FlatList } from 'react-native'
import React from 'react'
import MessageInput from '../../../components/MessageInput'
import VoiceInput from '../../../components/VoiceInput'
import ChatMessage from '../../../components/ChatMessage'

const dummyMessages = [
  {
    id: 1,
    role: "bot",
    content: "日本は美しい国です。",
    prompt: "GPT-3",
  },
  {
    id: 2,
    content: "Translation: Japan is a beautiful country.",
    role: "bot",
    prompt: "GPT-3",
  },
]

const translate = () => {
  return (
    <SafeAreaView className="h-full w-full" >
      <View className="h-full w-full">
      <FlatList 
            data={dummyMessages}
            renderItem={(item) => (
              <ChatMessage item={item.item} />
            )}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              paddingBottom: 50,
              marginTop: 0,
            }}
          />
        <VoiceInput />
      </View>
  </SafeAreaView>
  )
}

export default translate 