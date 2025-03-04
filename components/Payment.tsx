import { View, Text, Alert, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import CustomButton from './CustomButton'
import { useStripe } from '@stripe/stripe-react-native';
import { qr } from '@/assets';
import ReactNativeModal from 'react-native-modal';
import { router } from 'expo-router';

const Payment = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <CustomButton 
        title="Checkout"
        className='my-5'
        onPress={() => setShow(true)}
      />
      <ReactNativeModal isVisible={show}>
        <View className='bg-black px-7 py-9 rounded-2xl min-h-[300px]'>
          <View className='justify-center items-center gap-4'>
            <Image 
              source={qr} 
              resizeMode='contain'
              className='h-40 w-40'
            />
            <CustomButton
              title="Paid"
              onPress={() => setShow(false)}
            />
          </View>
        </View>
      </ReactNativeModal>
    </>
  )
}

export default Payment