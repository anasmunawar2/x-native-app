import { useNotifications } from "@/hooks/useNotfications";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const NotificationsScreen = () => {
  const {
    notifications,
    isLoading,
    error,
    refetch,
    isRefetching,
    deleteNotification,
  } = useNotifications();

  const insets = useSafeAreaInsets();

  return (
    <View>
      <Text>NotificationsScreen</Text>
    </View>
  );
};

export default NotificationsScreen;
