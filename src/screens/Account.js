import React from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import LoginForm from '../components/auth/LoginForm';
import UserData from '../components/auth/UserData';
// import { SafeAreaView } from “react-native-safe-area-context”;

export default function Account() {
  const auth = null;
  return (
    <View>
      {auth ? <UserData /> : <LoginForm />}
    </View>
  )
}
