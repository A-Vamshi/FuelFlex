import { Drawer } from "expo-router/drawer";
import { Ionicons } from "@expo/vector-icons";
import { Image, SafeAreaView, Text, TouchableOpacity, useWindowDimensions, View } from "react-native";
import images from "../../../constants/images"
import { Link, useNavigation } from "expo-router";
import { ClerkProvider } from "@clerk/clerk-react";
import Header from "../../../components/Header";
import { DrawerActions } from "@react-navigation/native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";
import { StatusBar } from "expo-status-bar";
import { TextInput } from "react-native-gesture-handler";
import { BlurView } from "expo-blur";

export const CustomDrawer = (props: any) => {
  const { bottom, top } = useSafeAreaInsets();

  return (
    <View style={{flex: 1, marginTop: top}} className="bg-black" >
      <View className="pb-2">
        <BlurView className="flex-row bg-gray-500 justify-center items-center mx-3 rounded-md">
          <View className="p-1"><Ionicons name="search" color="gray" size={15} /></View>
            <TextInput placeholder="Search"  className="rounded-md justify-center items-center self-center flex-1 ">
            </TextInput> 
        </BlurView>
      </View>
      <DrawerContentScrollView {...props} contentContainerStyle={{paddingTop: 0}}>
        <DrawerItemList {...props}/>
      </DrawerContentScrollView>
      <View style={{padding: 16, marginBottom: bottom}} className="flex-row p-2">
        <Link href="/(auth)/(modal)/settings" asChild >
          <TouchableOpacity className="flex-row items-center">
            <Image
              source={{uri: "https://i.pinimg.com/originals/c9/a3/df/c9a3df52577d1cee60fbc22c681d6f86.jpg"}}
              resizeMode="contain"
              className="h-10 w-10 rounded-md m-2"
            /> 
            <Text className="text-white font-bold p-1 text-xl">Cale Henituse</Text>
          </TouchableOpacity>
        </Link>
      </View>
      <StatusBar backgroundColor="#000" />
    </View>
  )
}


const DrawerNavigator = () => {
  const dimentions = useWindowDimensions();
  const navigation = useNavigation();
  return (
    <Drawer
      drawerContent={CustomDrawer}
      screenOptions={{
        headerTitleAlign: "center",
        headerTintColor: "#000",
        drawerActiveBackgroundColor: "#2186FF",
        drawerActiveTintColor: "#fff",
        drawerInactiveTintColor: "#fff",
        overlayColor: "rgba(0, 0, 0, 0.5)",
        drawerStyle: {width: dimentions.width * 0.85},
        drawerItemStyle: {
          borderRadius: 13,
          borderColor: "#2186FF",
          borderWidth: 2,
        },
        drawerContentStyle: {
          backgroundColor: "#000",
        }
      }}
    >
      <Drawer.Screen 
        name="(chat)/new" 
        getId={() => Math.random().toString()}
        options={{
          title: "New Chat",
          header: () => (
            <View className="bg-black h-20 pt-10 w-full">
              <Header 
                title="New Chat"
              />
            </View>
          ),
          headerShown: true,
          drawerIcon: () => (
            <View>
              <Ionicons name="chatbox-ellipses-outline" size={20} color="#fff"></Ionicons>
            </View>
          ),
          headerRight: () => (
            <Link href="/(auth)/(drawer)/(chat)/new" push asChild>
              <TouchableOpacity>
                <Ionicons 
                  name="add-circle-outline" 
                  size={30} 
                  style={{marginRight: 15}}
                ></Ionicons>
              </TouchableOpacity>
            </Link>
          )
        }} 
      />
      <Drawer.Screen 
        name="image" 
        options={{
          title: "Image",
          header: () => (
            <View className="bg-black h-20 pt-10 w-full">
              <Header 
                title="Image"
              />
            </View>
          ),
          drawerIcon: () => (
            <Ionicons name="image-outline" size={20} color="#fff"></Ionicons>
          ),
          headerRight: () => (
            <Link href="/(auth)/(drawer)/(chat)/new" push asChild>
              <TouchableOpacity>
                <Ionicons 
                  name="add-circle-outline" 
                  size={30} 
                  style={{marginRight: 15}}
                ></Ionicons>
              </TouchableOpacity>
            </Link>
          )
        }} 
      />
      <Drawer.Screen 
        name="voice" 
        getId={() => Math.random().toString()}
        options={{
          title: "Voice Assistant",
          header: () => (
            <View className="bg-black h-20 pt-10 w-full">
              <Header 
                title="Voice Assistant"
              />
            </View>
          ),
          drawerIcon: () => (
            <Ionicons name="mic-circle-outline" size={20} color="#fff"></Ionicons>
          ),
          headerRight: () => (
            <Link href="/(auth)/(drawer)/(chat)/new" push asChild>
              <TouchableOpacity>
                <Ionicons 
                  name="add-circle-outline" 
                  size={30} 
                  style={{marginRight: 15}}
                ></Ionicons>
              </TouchableOpacity>
            </Link>
          )
        }} 
      />
      <Drawer.Screen 
        name="translate" 
        getId={() => Math.random().toString()}
        options={{
          title: "Translate",
          header: () => (
            <View className="bg-black h-20 pt-10 w-full">
              <Header 
                title="Translate"
              />
            </View>
          ),
          drawerIcon: () => (
            <Ionicons name="language" size={20} color="#fff"></Ionicons>
          ),
          headerRight: () => (
            <Link href="/(auth)/(drawer)/(chat)/new" push asChild>
              <TouchableOpacity>
                <Ionicons 
                  name="add-circle-outline" 
                  size={30} 
                  style={{marginRight: 15}}
                ></Ionicons>
              </TouchableOpacity>
            </Link>
          )
        }} 
      />
    </Drawer>
  )
}

export default DrawerNavigator;
