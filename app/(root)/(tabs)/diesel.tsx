import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Ionicons } from '@expo/vector-icons'
import CustomButton from '@/components/CustomButton'
import Payment from '@/components/Payment'
import { router } from 'expo-router'

const diesel = () => {
    const [amount, setAmount] = useState(0)
    const [price, setPrice] = useState(109)
  return (
    <SafeAreaView className='h-full w-full'>
        <TouchableOpacity className='m-5' onPress={() => router.push("/(root)/(tabs)/home")}>
            <Ionicons name="arrow-back" size={30} />
        </TouchableOpacity>
        <View className='flex justify-center items-center mt-5'>
            <Text className='text-3xl font-extrabold m-5'>Diesel</Text>
            <View className='flex-row justify-center items-center gap-2'>
                <TouchableOpacity onPress={() => {
                        if (amount > 0) {
                            setAmount(amount - 1)
                        }
                    }}
                >
                    <Ionicons name="remove-outline" size={30} />
                </TouchableOpacity>
                <View className='bg-slate-300 min-w-[100px] p-2 items-center rounded-full'>
                    <Text className='font-bold text-xl'>{amount}</Text>
                </View>
                <TouchableOpacity onPress={() => {
                        if (amount < 10) {
                            setAmount(amount + 1)
                        }
                    }}
                >
                    <Ionicons name="add-outline" size={30} />
                </TouchableOpacity>
            </View>
            <View className='justify-center items-center flex gap-4 m-10'>
                <Text className='text-xl font-semibold'>Statement</Text>
                <Text className='font-bold text-3xl'>{amount} x {price} = {amount * price} ₹ </Text>
                <Text className='font-bold text-3xl'> G.S.T = 56 ₹ </Text>
                <Text className='font-bold text-3xl'> Delivery = 100 ₹ </Text>
                <Text className='font-bold text-3xl'> Total = {(amount * price) + 56 + 100} ₹ </Text>
            </View>
        </View>
        <View className='bottom-0 absolute self-center'>
          <Payment />
        </View>
    </SafeAreaView>
  )
}

export default diesel