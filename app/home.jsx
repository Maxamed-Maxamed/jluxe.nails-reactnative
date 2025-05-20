import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View className="flex-1 bg-white items-center justify-center">
      <StatusBar style="dark" />
      <Text className="text-jluxe-dark text-3xl font-semibold">Home Screen</Text>
      <Text className="text-gray-500 mt-2">Your main content will go here</Text>
    </View>
  );
}