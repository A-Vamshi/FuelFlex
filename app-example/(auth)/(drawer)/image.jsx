import { View, Text, SafeAreaView, Button, FlatList } from 'react-native'
import React from 'react'
import ImageInput from '../../../components/ImageInput'
import ImageMessage from '../../../components/ImageMessage'

const dummyMessages = [
    {
      id: 1,
      role: "user",
      content: "Draw a picture of a pheonix bird rising from the flames",
      imageUrl: "https://i.pinimg.com/originals/c9/a3/df/c9a3df52577d1cee60fbc22c681d6f86.jpg",
      prompt: "GPT-3",
    },
    {
      id: 2,
      contentImgUrl: "https://i.pinimg.com/736x/2f/46/54/2f4654bfa5bef5b40e7e5ffa2cfa3545.jpg",
      role: "bot",
      prompt: "GPT-3",
    },
  ]

const Image = () => {
  return (
    <SafeAreaView className="h-full w-full" >
      <View className="h-full w-full">
      <FlatList 
            data={dummyMessages}
            renderItem={(item) => (
              <ImageMessage item={item.item} />
            )}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              paddingBottom: 50,
              marginTop: 0,
            }}
            keyboardDismissMode='on-drag'
          />
        <ImageInput />
      </View>
  </SafeAreaView>
  )
}

export default Image;