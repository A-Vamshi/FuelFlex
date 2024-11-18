import { ActivityIndicator, Image, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react';
import images from "../constants/images";
import { Ionicons } from "@expo/vector-icons";
import { router } from 'expo-router';
import { BlurView } from "expo-blur";
import { useSignIn, useSignUp } from '@clerk/clerk-expo';


const Login = () => {
  const [loading, setLoading] = useState(false); 
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [newUser, setNewUser] = useState(false);
  const { signUp, isLoaded, setActive } = useSignUp();
  const { signIn, isLoaded: signInIsLoaded, setActive: signInSetActive } = useSignIn();

  const onSignUpPress = async () => {
    if (!isLoaded) return;
    setLoading(true);
    try {
      const result = await signUp.create({emailAddress: form.email, password: form.password});
      setActive({
        session: result.createdSessionId,
      });
    } catch (error) {
      console.log("onSignUpPress: ", error.errors[0].message);
    } finally {
      setLoading(false);
    }
  }
  const onSignInPress = async () => {
    if (!signInIsLoaded) return;
    setLoading (true);
    try {
      const result = await signIn.create({identifier: form.email, password: form.password});
      signInSetActive({
        session: result.createdSessionId,
      });
    } catch (error) {
      console.log("onSignInPress: ", error.errors[0].message);
    } finally {
      setLoading(false);
    }
  }
  return (
    <BlurView intensity={90} tint="dark" className='h-full'>
      <KeyboardAvoidingView 
        behavior={Platform.OS == 'ios' ? "padding" : "height" }
        keyboardVerticalOffset={1}
        className="bg-black w-full h-full rounded-xl self-center"
        >
          <TouchableOpacity
            onPress={() => router.back()}
            className="m-2 self-start"
          >
            <Ionicons name="arrow-back" size={30} color={"#fff"} className="mx-0 absolute"></Ionicons>
          </TouchableOpacity>
          {loading && (
            <View className='bg-gray-400 w-full items-center justify-center rounded-b-xl h-full'>
              <ActivityIndicator size="large" color="#fff" />
            </View>
          )}
        {!loading && (
          <View className='justify-center items-center rounded-b-xl'>
            <Image 
              source={images.intro}
              resizeMode="contain"
              className='h-40'
            />
            <View>
              <Text className='text-3xl font-bold text-white'> Welcome </Text>
            </View>
            <View className='m-2'>
              {/* <Text className='font-bold ml-5 text-lg text-white'>Email: </Text> */}
              <TextInput 
                autoCapitalize='none'
                value={form.email}
                onChangeText={(e) => setForm({...form, email: e})}
                placeholder="Email"
                placeholderTextColor="#7B7B8B"
                className='text-white font-psemibold text-base border-2 border-outline rounded-md h-10 w-80 pl-3'
              />
            </View>
            <View className='m-2'>
              {/* <Text className='font-bold ml-5 text-lg text-white'>Password: </Text> */}
              <TextInput 
                autoCapitalize='none'
                value={form.password}
                placeholder="Password"
                placeholderTextColor="#7B7B8B"
                onChangeText={(e) => setForm({...form, password: e})}
                className="text-white font-psemibold text-base border-2 border-outline rounded-md h-10 w-80 pl-3"
                secureTextEntry={!showPassword}
              /> 
              <TouchableOpacity
                onPress={() => setShowPassword(!showPassword)}
              >
                <Text className='text-outline'>{showPassword ? "Hide Password" : "Show Password" }</Text>
              </TouchableOpacity>
            </View>
            <View className="w-80 p-2 justify-center items-center rounded-md">
              <TouchableOpacity
                  onPress={() => setNewUser(!newUser)}
                >
                  <Text className='text-outline'>{newUser? "Already have an account?" : "New here?"}</Text>
              </TouchableOpacity>
            </View>
            <View>
            <TouchableOpacity 
              className='h-10 w-80 bg-outline justify-center items-center rounded-xl p-1 m-5'
              onPress={newUser? onSignUpPress : onSignInPress }
            >
              <Text className='text-base text-white'>{newUser? "Sign Up" : "Log In"}</Text>
            </TouchableOpacity>
            </View>
          </View>
        )}
      </KeyboardAvoidingView>
    </BlurView>
  )
}

export default Login;