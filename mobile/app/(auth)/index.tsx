import {
  ActivityIndicator,
  Image,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function Index() {
  const isLoading = false;
  return (
    <View className="flex-1  bg-white">
      <View className="flex-1 px-1 justify-between">
        <View className="flex-1 justify-center">
          <View className="items-center">
            <Image
              source={require("../../assets/images/auth2.png")}
              className="size-96"
              resizeMode="contain"
            />
          </View>

          <View className="flex-col gap-2">
            <TouchableOpacity
              className="flex-row justify-center items-center bg-white border border-gray-300 rounded-full py-3 px-6"
              onPress={() => {}}
              disabled={isLoading}
              style={{
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 1 },
                shadowOpacity: 0.1,
                shadowRadius: 2,
                elevation: 1,
              }}
            >
              {isLoading ? (
                <ActivityIndicator size="small" color="#000" />
              ) : (
                <View className="flex-row justify-center items-center">
                  <Image
                    source={require("../../assets/images/google.png")}
                    className="size-10 mr-3"
                    resizeMode="contain"
                  />
                  <Text className="text-black font-medium text-base">
                    Continue with Google
                  </Text>
                </View>
              )}
            </TouchableOpacity>

            <TouchableOpacity
              className="flex-row justify-center items-center bg-white border border-gray-300 rounded-full py-3 px-6"
              onPress={() => {}}
              disabled={isLoading}
              style={{
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 1 },
                shadowOpacity: 0.1,
                shadowRadius: 2,
                elevation: 1,
              }}
            >
              {isLoading ? (
                <ActivityIndicator size="small" color="#000" />
              ) : (
                <View className="flex-row justify-center items-center">
                  <Image
                    source={require("../../assets/images/apple.png")}
                    className="size-8 mr-3"
                    resizeMode="contain"
                  />
                  <Text className="text-black font-medium text-base">
                    Continue with Apple
                  </Text>
                </View>
              )}
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
