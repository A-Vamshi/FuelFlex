import { SignedIn, SignedOut, useUser } from '@clerk/clerk-expo'
import { SafeAreaView, Text, View } from 'react-native'


export default function Page() {
  const { user } = useUser()

  return (
    <SafeAreaView>
      <SignedIn>
        <View className='justify-center items-center w-full h-full'>
          <Text>Hello {user?.emailAddresses[0].emailAddress}</Text>
        </View>
      </SignedIn>
    </SafeAreaView>
  )
}
