import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesome } from '@expo/vector-icons';

// Static data (can be imported from a shared file if needed)
const MATCHED_USERS = [
    {
        id: '4',
        name: 'Liam',
        bio: "Coffee lover and music enthusiast.",
        image: "https://api.a0.dev/assets/image?text=Man with classic casual style&aspect=1:1&seed=21",
        interests: ['Casual', 'Vintage', 'Denim', 'Sneakers']
    },
    {
        id: '5',
        name: 'Emma',
        bio: "Designer at heart. Dog mom.",
        image: "https://api.a0.dev/assets/image?text=Woman with modern fashion style&aspect=1:1&seed=22",
        interests: ['Modern', 'Minimalist', 'Chic', 'Monochrome']
    },
    {
        id: '10',
        name: 'Oliver',
        bio: "Traveler. Bookworm. Introvert.",
        image: "https://api.a0.dev/assets/image?text=Man with vintage style&aspect=1:1&seed=23",
        interests: ['Vintage', 'Layered', 'Corduroy', 'Muted Tones']
    },
    {
        id: '11',
        name: 'Ava',
        bio: "Yoga and matcha addict 🌱",
        image: "https://api.a0.dev/assets/image?text=Woman with bohemian fashion&aspect=1:1&seed=24",
        interests: ['Bohemian', 'Floral', 'Earth Tones', 'Layered Jewelry']
    },
    {
        id: '12',
        name: 'Noah',
        bio: "Engineer. Meme lord. Cat person.",
        image: "https://api.a0.dev/assets/image?text=Man with smart casual style&aspect=1:1&seed=25",
        interests: ['Smart Casual', 'Button-ups', 'Chinos', 'Loafers']
    },
    {
        id: '14',
        name: 'Isabella',
        bio: "Love art, photography & deep talks.",
        image: "https://api.a0.dev/assets/image?text=Woman with artsy look&aspect=1:1&seed=26",
        interests: ['Artsy', 'Oversized', 'Graphic Tees', 'Chunky Accessories']
    }
];

const ViewProfile = () => {
    const router = useRouter();
    const { id } = useLocalSearchParams<{ id: string }>();
    const user = MATCHED_USERS.find(u => u.id === id);

    if (!user) {
        return (
            <SafeAreaView className="flex-1 items-center justify-center bg-white">
                <Text className="text-xl text-gray-600">User not found</Text>
            </SafeAreaView>
        );
    }

    return (
        <SafeAreaView className="flex-1 bg-white">
            <ScrollView contentContainerStyle={{ paddingBottom: 30 }}>
                <View className="flex-row items-center p-5">
                    <TouchableOpacity onPress={() => router.back()} className="mr-4">
                        <FontAwesome name="arrow-left" size={20} color="black" />
                    </TouchableOpacity>
                    <Text className="text-2xl font-bold text-gray-800">{user.name}</Text>
                </View>

                <View className="items-center mt-4">
                    <Image
                        source={{ uri: user.image }}
                        className="w-40 h-40 rounded-full"
                    />
                    <Text className="text-2xl font-bold mt-4 text-gray-800">{user.name}</Text>
                    <Text className="text-base text-gray-600 mt-2 px-6 text-center">{user.bio}</Text>
                </View>

                <View className="mt-6 px-6">
                    <Text className="text-lg font-semibold text-gray-800 mb-2">Interests</Text>
                    <View className="flex-row flex-wrap gap-2">
                        {user.interests.map((interest, index) => (
                            <View
                                key={index}
                                className="bg-pink-100 px-4 py-1 rounded-full mb-2"
                            >
                                <Text className="text-pink-600 font-medium">{interest}</Text>
                            </View>
                        ))}
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default ViewProfile;
