import "@/global.css";
import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-background">
      <Text className="text-xl font-bold text-success">
        Welcome to Nativewind!
      </Text>
      <Link
        href={"/onbording"}
        className="mt-4 p-4 bg-primary text-white rounded"
      >
        Go to onbording
      </Link>

      <Link
        href={"/(auth)/sign-in"}
        className="mt-4 p-4 bg-primary text-white rounded"
      >
        Sign Up
      </Link>

      <Link
        href={"/(auth)/sign-up"}
        className="mt-4 p-4 bg-primary text-white rounded"
      >
        Sign In
      </Link>

      <Link
        href={{
          pathname: "/subscription/[id]",
          params: { id: "claude" },
        }}
        className="mt-4 p-4 bg-primary text-white rounded"
      >
        Claude Max Subscription
      </Link>
    </View>
  );
}
