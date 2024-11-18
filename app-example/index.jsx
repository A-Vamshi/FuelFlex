import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar"
import Intro from "../components/Intro";
import Signs from "../components/Signs";


// Add a 3D integrated chip desgin with three.js in the future here's an example link
//  https://www.youtube.com/live/5WNoynmnEAs?si=baO8MlWXEyOKm8zM

const Index = () => {
  return (
    <SafeAreaView>
      <ScrollView className="h-full bg-black"
        contentContainerStyle={{
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View className="mb-40">
          <Intro />
        </View>
        <Signs />
      </ScrollView>
      <StatusBar hidden animated hideTransitionAnimation="fade" />
    </SafeAreaView>
  );
}

export default Index;
