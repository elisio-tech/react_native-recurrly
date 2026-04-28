import { Link } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

export default function signIn() {
  return (
    <View className="flex-1 justify-center items-center">
      <Text>Sign-in page</Text>
      <Link href={"/"}>Create Account</Link>
    </View>
  );
}
