import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'

const TabIcon = ({ name, focused } : { name: any, focused: boolean}) => {
     return (
          <View className={`flex flex-row justify-center items-center rounded-full ${focused ? "bg-outline" : ""}`}>
               <View className={`rounded-full w-14 h-14 justify-center items-center ${focused ? "bg-outline" : ""}`}>
                    <Ionicons name={name} size={focused ? 30 : 20} color={focused ? "white" : "white"} />
               </View>
          </View>
     )
}
const _layout = () => {
  return (
    <Tabs initialRouteName='index' screenOptions={{
     tabBarActiveTintColor: "white",
     tabBarInactiveTintColor: "white",
     tabBarShowLabel: false,
     tabBarStyle: {
          backgroundColor: "#333333",
          borderRadius: 50,
          paddingBottom: 0,
          marginHorizontal: 20,
          marginBottom: 20,
     }
     
    }}>
     <Tabs.Screen 
          name="home" 
          options={{
               title: "Home",
               headerShown: false,
               tabBarIcon: ({focused}) => <TabIcon name="home-outline" focused={focused} />
          }}
     />
     <Tabs.Screen 
          name="orders" 
          options={{
               title: "Orders",
               headerShown: false,
               tabBarIcon: ({focused}) => <TabIcon name="cube-outline" focused={focused} />
          }}
     />
     <Tabs.Screen 
          name="chat" 
          options={{
               title: "Chat",
               headerShown: false,
               tabBarIcon: ({focused}) => <TabIcon name="chatbox-outline" focused={focused} />
          }}
     />
     <Tabs.Screen 
          name="profile" 
          options={{
               title: "Profile",
               headerShown: false,
               tabBarIcon: ({focused}) => <TabIcon name="person-outline" focused={focused} />
          }}
     />
    </Tabs> 
  )
}

export default _layout