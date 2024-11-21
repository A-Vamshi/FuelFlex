import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useRef, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { router } from 'expo-router'
import Swiper from "react-native-swiper"
import { onBoarding } from '@/constants'
import CustomButton from '@/components/CustomButton'

const Welcome = () => {
  const swiperRef = useRef<Swiper>(null);
  const [activeIndex, setActiveIndex] = useState(0)
  const isLastSlide = activeIndex === onBoarding.length - 1;
  return (
    <SafeAreaView className='flex h-full items-center justify-between bg-white'>
      <TouchableOpacity onPress={() => {
        router.replace("/(auth)/sign-up");
      }} className='w-full flex justify-end items-end p-5'>
        <Text className='text-outline text-md font-bold'>Skip</Text>
      </TouchableOpacity>
      <Swiper 
        ref={swiperRef}
        loop={false}
        dot={<View className='w-[32px] bg-[#E2E8F0] h-[4px] m-1 rounded-full'></View>}
        activeDot={<View className='w-[32px] bg-outline m-1 h-[4px] rounded-full'></View>}
        onIndexChanged={(index) => setActiveIndex(index)}
      >
        {onBoarding.map((item) => (
          <View className='flex items-center justify-center p-5' key={item.id}>
            <Image 
              source={item.image}
              className='w-full h-[300px]'
              resizeMode='contain'
            />
            <View className='flex items-center justify-center p-5 gap-2'>
              <Text className='font-extrabold text-3xl text-center text-black'>{item.title}</Text>
            </View>
            <Text className='font-extrabold text-md text-center text-gray-400 mx-10 my-3'>{item.desription}</Text>
          </View>
        ))}
      </Swiper>
      <CustomButton
        title={isLastSlide ? "Get Started!" : "Next"}
        className="w-11/12 mt-10"
        onPress={() => isLastSlide ? router.replace("/(auth)/sign-up") : swiperRef.current?.scrollBy(1)}
      />
    </SafeAreaView>
  )
}

export default Welcome