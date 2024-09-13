import { useEffect } from "react";
import { useLocalSearchParams } from "expo-router";
import { View, Text, FlatList, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import useAppwrite from "../../lib/useAppwrite";

import EmptyState from "../../components/EmptyState";
import VideoCard from "../../components/VideoCard";
import SearchInput from "../../components/SearchInput";
import { searchPosts } from "../../lib/appwrite";
import { icons } from "../../constants";
import { useGlobalContext } from "../../context/GlobalProvider";

const Profile = () => {
  const { user, setUser, setIsLogged } = useGlobalContext();

  return (
    <SafeAreaView className="bg-primary h-full">
      <FlatList
        data={[]}
        keyExtractor={(item) => item.$id}
        renderItem={({ item }) => (
          <VideoCard
            title={item.title}
            thumbnail={item.thumbnail}
            video={item.video}
            creator={item.creator.username}
            avatar={item.creator.avatar}
          />
        )}
        ListHeaderComponent={() => (
          <>
            <View className="flex my-6 px-6 items-end flex-col ">
              <Image
                source={icons.logout}
                className="w-6 h-6"
                resizeMode="contain"
              />
            </View>
            <View className="flex justify-center flex-col items-center ">
              <Image
                source={{ uri: user?.avatar }}
                className="w-24 h-24 rounded-xl border border-3 border-secondary-100"
                resizeMode="contain"
              />
              <View className="mt-4 items-center">
                <Text className="text-white text-2xl font-psemibold">
                  {user?.username}
                </Text>
                <Text className="text-gray-100 text-sm font-pmedium">
                  {user?.email}
                </Text>
              </View>
              <View className="mt-6 flex flex-row gap-5">
                <View className="flex flex-col">
                  <Text className="text-white text-2xl font-psemibold">0</Text>
                  <Text className="text-gray-100 text-sm font-pmedium">
                    Videos
                  </Text>

                </View>
                

              </View>
            </View>
          </>
        )}
        ListEmptyComponent={() => (
          <EmptyState
            title="No Videos Found"
            subtitle="No videos found for this search query"
          />
        )}
      />
    </SafeAreaView>
  );
};

export default Profile;
