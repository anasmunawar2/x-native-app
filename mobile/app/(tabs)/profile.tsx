import SignOutButton from "@/components/SignOutButton";
import { useCurrentUser } from "@/hooks/useCurrentUser";
import React from "react";
import {
  ActivityIndicator,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import {
  useSafeAreaInsets,
  SafeAreaView,
} from "react-native-safe-area-context";

const ProfileScreens = () => {
  const { currentUser, isLoading } = useCurrentUser();
  const insets = useSafeAreaInsets();

  if (isLoading) {
    return (
      <View className="flex-1 bg-white items-center justify-center">
        <ActivityIndicator size="large" color="#1DA1F2" />
      </View>
    );
  }
  return (
    <SafeAreaView className="flex-1">
      <View className="flex-row items-center justify-between px-4 py-3 border-b border-gray-100">
        <View>
          <Text className="text-xl font-bold text-gray-900">
            {currentUser.firstName} {currentUser.lastName}
          </Text>
          <Text className="text-gray-500 text-sm">3 Posts</Text>
        </View>
        <SignOutButton />
      </View>

      <ScrollView
        className="flex-1"
        contentContainerStyle={{ paddingBottom: 100 + insets.bottom }}
        showsVerticalScrollIndicator={false}
      >
        <Image
          source={{
            uri:
              currentUser.bannerImage ||
              "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=400&fit=crop",
          }}
          className="w-full h-48"
          resizeMode="cover"
        />

        <View className="px-4 pb-4 border-b border-gray-100">
          <View className="flex-row justify-between items-end -mt-16 mb-4">
            <Image
              source={{ uri: currentUser.profilePicture }}
              className="w-32 h-32 rounded-full border-4 border-white"
            />
            <TouchableOpacity className="border border-gray-300 px-6 py-2 rounded-full">
              <Text className="font-semibold text-gray-900">Edit profile</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreens;
