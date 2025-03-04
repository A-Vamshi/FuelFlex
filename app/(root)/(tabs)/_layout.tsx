import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import Drawer from 'expo-router/drawer'
import { useUser } from '@clerk/clerk-expo'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { Ionicons } from '@expo/vector-icons'

const CustomDrawer = () => {
  const { user } = useUser();
  const { bottom, top } = useSafeAreaInsets();
  return (
    <View style={{flex: 1, marginTop: top}} className='bg-black h-full w-full'>
      <View className='pb-4'>
        <Text className='text-lg text-white'>{user?.emailAddresses[0].emailAddress}</Text>
      </View>
    </View>
  )
}

const _layout = () => {
  return (
    <Stack>
      <Stack.Screen name="home" options={{
        headerShown: false
      }} />
      <Stack.Screen name="petrol" options={{
        headerShown: false
      }} />
      <Stack.Screen name="diesel" options={{
        headerShown: false
      }} />
      <Stack.Screen name="orders" options={{
        headerShown: false
      }} />
    </Stack>
  )
}

export default _layout