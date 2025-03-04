import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import FuelCard from '@/components/FuelCard'
import CustomButton from '@/components/CustomButton'
import { Ionicons } from '@expo/vector-icons'
import ReactNativeModal from 'react-native-modal'
import { Redirect, router } from 'expo-router'

const home = () => {
  const [show, setShow] = useState(false);
  return (
    <View className='h-full w-full bg-slate-300'>
      <View className='justify-center items-center mt-20'>
        <Text className='text-4xl font-bold'>FuelFlex</Text>
      </View>
      <View className='flex items-center justify-center gap-y-4 mt-10'>
        <FuelCard
          fuel="Diesel"
          price={109}
        />
        <FuelCard
          fuel="Petrol"
          price={129}
        />
      </View>
      <View className='absolute self-center bottom-0 w-80'>
        <View className='flex-row justify-center items-center mb-2'>
          <TouchableOpacity 
            className='bg-outline rounded-full w-full p-3 items-center justify-center'
            onPress={() => setShow(true)}
          >
            <Text className='text-white font-bold'>Order</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name="cube-outline" size={35} />
          </TouchableOpacity>
        </View>
        <ReactNativeModal isVisible={show}>
          <View className='bg-white px-7 py-9 rounded-2xl min-h-[300px]'>
            <TouchableOpacity className='self-end' onPress={() => setShow(false)}>
              <Ionicons name="close-outline" size={30} />
            </TouchableOpacity>
            <Text className='text-center font-bold text-xl'>Order</Text>
            <CustomButton
                title="Petrol"
                onPress={() => {
                  router.push("/(root)/(tabs)/petrol")
                }}
                className='mt-5'
              />
            <CustomButton
              title="Diesel"
              onPress={() => {
                router.push("/(root)/(tabs)/diesel")
              }}
              className='mt-5'
            />
          </View>
        </ReactNativeModal>
        <View>
        </View>
      </View>
    </View>
  )
}

export default home