import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Pressable, Text, View, SafeAreaView, Image, Platform } from 'react-native';

export default function WelcomeScreen() {
  const router = useRouter();
 
  const handleGetStarted = () => {
    router.push('/home');
  };
 
  return (
    <View className="flex-1">
      <StatusBar style="dark" />
      
      {/* Gradient Background */}
      <LinearGradient
        colors={['#F8D4E0', '#D4C2FC']}
        style={{
          position: 'absolute',
          left: 0, right: 0,
          top: 0, bottom: 0,
        }}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      />
     
      <SafeAreaView className="flex-1 ">
        {/* Brand Header */}
        <View className="p-10 m-10">
          <Text className="text-[#333333] text-4xl font-light italic text-center mb-10 mt-10">
            jluxe.nails
          </Text>
        </View>

        {/* Logo */}
        <Image
          source={require('@/assets/images/logo.png')}
          className="w-full h-1/3 mt-8"
          style={{ 
            resizeMode: 'contain',
            alignSelf: 'center',
            marginTop: 65,
          }}
        />
       
        {/* Content Container */}
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
         
          {/* Get Started Button */}
          <Pressable
            onPress={handleGetStarted}
            className="bg-purple-500 rounded-full py-4 w-full max-w-xs"
            style={Platform.OS === 'ios' 
              ? { shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, 
                  shadowOpacity: 0.25, shadowRadius: 3.84 }
              : { elevation: 5 }
            }
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