import { Redirect } from 'expo-router';

export default function Index() {
  // Redirect to the welcome screen in the tabs layout
  return <Redirect href="/welcome" />;
}