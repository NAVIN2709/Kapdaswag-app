import React from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type ProfileStackParamList = {
    ProfileMain: undefined;
    EditProfile: undefined;
};

type ProfileScreenNavigationProp = NativeStackNavigationProp<ProfileStackParamList, 'ProfileMain'>;

export default function ProfileScreen() {
    const navigation = useNavigation<ProfileScreenNavigationProp>();

    const user = {
        username: "kapdaswag2025",
        bio: "hello",
        interests: ["fashion", "code", "Casuals"],
        instagram: "kapdaswag",
        snapchat: "kapdaswag123"
    };

    const handleEditProfile = () => alert('Edit Profile');
    const handleLogout = () => alert("Logged out");

    return (
        <SafeAreaView className="flex-1 bg-white">
            <StatusBar style="dark" />
            <View className="flex-row justify-between items-center px-5 py-4 border-b border-gray-200">
                <Text className="text-lg font-bold text-gray-800">My Profile</Text>
                <TouchableOpacity>
                    <FontAwesome name="cog" size={24} color="#333" />
                </TouchableOpacity>
            </View>

            <ScrollView contentContainerStyle={{ padding: 20 }}>
                {/* Profile Header */}
                <View className="items-center mb-8">
                    <Image
                        source={{
                            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUrnmr3CB1oDs0WqiWPzNxENXCnRE-1yKVKw&s'
                        }}
                        className="w-24 h-24 rounded-full mb-4"
                    />
                    <Text className="text-lg font-bold text-gray-800 mb-2">@{user.username}</Text>
                    <Text className="text-sm text-gray-700 text-center px-5 mb-4">{user.bio}</Text>
                    <TouchableOpacity
                        onPress={handleEditProfile}
                        className="bg-pink-600 px-5 py-2 rounded-full mt-2"
                    >
                        <Text className="text-white font-semibold">Edit Profile</Text>
                    </TouchableOpacity>
                </View>

                {/* Interests */}
                <View className="mb-8">
                    <Text className="text-lg font-bold text-gray-800 mb-4">Style Interests</Text>
                    <View className="flex-row flex-wrap">
                        {user.interests.length > 0 ? (
                            user.interests.map((interest, index) => (
                                <View key={index} className="bg-pink-600 px-4 py-2 rounded-full mr-2 mb-2">
                                    <Text className="text-white text-sm font-medium">{interest}</Text>
                                </View>
                            ))
                        ) : (
                            <Text className="text-gray-400 italic">No interests selected</Text>
                        )}
                    </View>
                </View>

                {/* Social Media */}
                <View className="mb-8">
                    <Text className="text-lg font-bold text-gray-800 mb-4">Social Media</Text>
                    <View className="space-y-4">
                        {user.instagram && (
                            <View className="flex-row items-center">
                                <FontAwesome name="instagram" size={24} color="#E1306C" />
                                <Text className="ml-3 text-base text-gray-800">{user.instagram}</Text>
                            </View>
                        )}
                        {user.snapchat && (
                            <View className="flex-row items-center">
                                <FontAwesome name="snapchat-ghost" size={24} color="#FFFC00" />
                                <Text className="ml-3 text-base text-gray-800">{user.snapchat}</Text>
                            </View>
                        )}
                        {!user.instagram && !user.snapchat && (
                            <Text className="text-gray-400 italic">No social accounts linked</Text>
                        )}
                    </View>
                </View>

                {/* Logout */}
                <TouchableOpacity
                    onPress={handleLogout}
                    className="mt-5 mb-10 py-4 items-center border border-pink-600 rounded-xl"
                >
                    <Text className="text-pink-600 font-semibold text-base">Log Out</Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    );
}
