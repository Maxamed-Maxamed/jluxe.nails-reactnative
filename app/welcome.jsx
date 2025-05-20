import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Pressable, Text, View, SafeAreaView } from 'react-native';

export default function WelcomeScreen() {
  const router = useRouter();
 
  const handleGetStarted = () => {
    console.log('Get Started pressed');
    router.push('/home');
  };
 
  return (
    <View className="flex-1">
      <StatusBar style="dark" />
     
      {/* Gradient Background with explicit positioning */}
      <LinearGradient
        colors={['#F8D4E0', '#D4C2FC']} // Explicit colors instead of Tailwind classes
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
        }}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      />
     
      <SafeAreaView className="flex-1 relative">
        {/* Logo/Brand - positioned at top */}
        <View className="p-6">
          <Text className="text-[#333333] text-4xl font-light italic text-center">
            jluxe.nails
          </Text>
        </View>
       
        {/* Content container - centered */}
        <View className="flex-1 justify-center items-center px-8">
          {/* Welcome Text */}
          <View className="mb-10">
            <Text className="text-[#333333] text-5xl font-semibold text-center">
              Welcome to
            </Text>
            <Text className="text-[#333333] text-5xl font-semibold text-center">
              jluxe.nails
            </Text>
          </View>
         
          {/* Get Started Button with platform-specific shadow */}
          <Pressable
            onPress={handleGetStarted}
            className="bg-purple-500 rounded-full py-4 w-full max-w-xs shadow-md"
            // style={[
            //   { backgroundColor: '#9370DB', borderRadius: 9999, paddingVertical: 16, width: '100%', maxWidth: 300 },
            //   Platform.OS === 'ios' 
            //     ? { shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.2, shadowRadius: 1 } 
            //     : { elevation: 5 }
            // ]}
          >
            <Text className="text-white text-xl text-center font-medium">
              Get Started
            </Text>
          </Pressable>
        </View>
      </SafeAreaView>
    </View>
  );
}
