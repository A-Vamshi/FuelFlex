import { View, Text, TouchableOpacity, Button, ScrollView, KeyboardAvoidingView, Platform, FlatList } from 'react-native'
import React, { useMemo, useState } from 'react';
import { useAuth } from "@clerk/clerk-expo";
import { SafeAreaView } from 'react-native-safe-area-context';
import MessageInput from "../../../../components/MessageInput";
import MessageIdeas from "../../../../components/MessageIdeas";
import ChatMessage from '../../../../components/ChatMessage';
import OpenAI from 'openai';

const New = () => {
    const { signOut } = useAuth();
    const [messages, setMessages] = useState([]);
    const dummyMessages = [
    {
      id: 1,
      content: "Hello, how can I help you today?",
      role: "bot",
      prompt: "GPT-3",
    },
    {
      id: 2,
      content: "Hey, I'm trying to build a mobile app using React Native. Got any tips for getting started?",
      role: "user",
      imageUrl: "https://i.pinimg.com/originals/c9/a3/df/c9a3df52577d1cee60fbc22c681d6f86.jpg",
      prompt: "GPT-3",
    },
    {
      id: 3,
      content: "Sure! React Native is a great choice for building cross-platform apps. First things first, do you have Node.js installed? You'll need that for the environment setup.",
      role: "bot",
      prompt: "GPT-3",
    },
    {
      id: 4,
      content: "Yeah, got Node.js set up already. What next?",
      role: "user",
      imageUrl: "https://i.pinimg.com/originals/c9/a3/df/c9a3df52577d1cee60fbc22c681d6f86.jpg",
      prompt: "GPT-3",
    },
    {
      id: 5,
      content: "Awesome! Next, you should install the React Native CLI globally by running npm install -g react-native-cli. This will give you the tools you need to create and run your app.",
      role: "bot",
      prompt: "GPT-3",
    },
    {
      id: 6,
      content: "I've already done that. I just created a new project. How do I run it on my Android device?",
      role: "user",
      imageUrl: "https://i.pinimg.com/originals/c9/a3/df/c9a3df52577d1cee60fbc22c681d6f86.jpg",
      prompt: "GPT-3",
    },
    {
      id: 7,
      content: "Nice! To run it on Android, you can use react-native run-android, but make sure you have an Android emulator running or connect a physical Android device with USB debugging enabled.",
      role: "bot",
      prompt: "GPT-3",
    },
    {
      id: 8,
      content: "Okay, I'll use the emulator. How do I make changes to the app UI and see them live?",
      role: "user",
      imageUrl: "https://i.pinimg.com/originals/c9/a3/df/c9a3df52577d1cee60fbc22c681d6f86.jpg",
      prompt: "GPT-3",
    },
    {
      id: 9,
      content: "React Native supports live reloading. Just enable it by pressing Cmd + D on iOS or Cmd + M on Android, then choose 'Enable Live Reload.' Now, you'll see the changes as soon as you save your code!",
      role: "bot",
      prompt: "GPT-3",
    },
    {
      id: 10,
      content: "That's convenient! How about styling components? Can I use regular CSS?",
      role: "user",
      imageUrl: "https://i.pinimg.com/originals/c9/a3/df/c9a3df52577d1cee60fbc22c681d6f86.jpg",
      prompt: "GPT-3",
    },
    {
      id: 11,
      content: "React Native uses a similar approach to CSS, but you’ll be writing your styles in JavaScript objects. The syntax is slightly different—like using camelCase instead of kebab-case—but it’s pretty straightforward!",
      role: "bot",
      prompt: "GPT-3",
    },
    {
      id: 12,
      content: "Got it. Can I use third-party libraries like in a regular React app?",
      role: "user",
      imageUrl: "https://i.pinimg.com/originals/c9/a3/df/c9a3df52577d1cee60fbc22c681d6f86.jpg",
      prompt: "GPT-3",
    },
    {
      id: 13,
      content: "Definitely! You can install third-party libraries with npm or yarn. Just make sure the library supports React Native. For example, libraries like react-navigation are commonly used for navigation between screens.",
      role: "bot",
      prompt: "GPT-3",
    },
    {
      id: 14,
      content: "Cool, I'll try adding navigation. Thanks for the help!",
      role: "user",
      imageUrl: "https://i.pinimg.com/originals/c9/a3/df/c9a3df52577d1cee60fbc22c681d6f86.jpg",
      prompt: "GPT-3",
    },
    {
      id: 15,
      content: "You're welcome! If you run into any issues, feel free to ask. Happy coding! 😊",
      role: "bot",
      prompt: "GPT-3",
    },
    ]
  return (
    <SafeAreaView className="h-full w-full" >
      <View className="h-full w-full">
        {/* <Button title="Sign out" onPress={() => signOut()} /> */}
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
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} 
          style={{
            position: "absolute",
            bottom: 0,
            width: "100%",
          }}
        >
          {/* {messages.length === 0 && <MessageIdeas />} */}
          <MessageInput />
        </KeyboardAvoidingView>
      </View>
    </SafeAreaView>
  )
} 

export default New;
