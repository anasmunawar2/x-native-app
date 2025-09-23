import { useCurrentUser } from "@/hooks/useCurrentUser";
import React from "react";
import { Text, View } from "react-native";

const PostsList = () => {
  const { currentUser } = useCurrentUser();
  return (
    <View>
      <Text>PostsList</Text>
    </View>
  );
};

export default PostsList;
