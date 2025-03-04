import { View, Text } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'

const FuelCard = ({ fuel, price }:{fuel: string, price: number}) => {
  return (
    <View className='bg-white w-80 rounded-full m-5'>
      <View className='flex-row items-center justify-between mx-3 p-2'>
        <View className='bg-yellow-300 rounded-full'>
            <Ionicons name="water-outline" size={25}/>
        </View>
        <View>
            <Text className='text-xl font-bold'>{fuel}</Text>
        </View>
        <View>
            <Text className='text-sm font-bold'>₹ {price}</Text>
        </View>
      </View>
    </View>
  )
}

export default FuelCard