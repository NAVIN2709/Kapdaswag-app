import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const INCOMING_MATCHES = [
    {
        id: '1',
        name: 'Sophia',
        matchPercentage: '92%',
        image: 'https://api.a0.dev/assets/image?text=Confident woman with modern style&aspect=1:1&seed=1',
        bio: "hiiii"
    },
    {
        id: '2',
        name: 'Marcus',
        matchPercentage: '88%',
        image: 'https://api.a0.dev/assets/image?text=Man with street fashion style&aspect=1:1&seed=2',
        bio: "helolooo"
    },
];

const MATCHED_USERS = [
  {
    id: '4',
    name: 'Liam',
    bio: "Coffee lover and music enthusiast.",
    image: "https://api.a0.dev/assets/image?text=Man with classic casual style&aspect=1:1&seed=21"
  },
  {
    id: '5',
    name: 'Emma',
    bio: "Designer at heart. Dog mom.",
    image: "https://api.a0.dev/assets/image?text=Woman with modern fashion style&aspect=1:1&seed=22"
  },
  {
    id: '10',
    name: 'Oliver',
    bio: "Traveler. Bookworm. Introvert.",
    image: "https://api.a0.dev/assets/image?text=Man with vintage style&aspect=1:1&seed=23"
  },
  {
    id: '11',
    name: 'Ava',
    bio: "Yoga and matcha addict 🌱",
    image: "https://api.a0.dev/assets/image?text=Woman with bohemian fashion&aspect=1:1&seed=24"
  },
  {
    id: '12',
    name: 'Noah',
    bio: "Engineer. Meme lord. Cat person.",
    image: "https://api.a0.dev/assets/image?text=Man with smart casual style&aspect=1:1&seed=25"
  },
  {
    id: '14',
    name: 'Isabella',
    bio: "Love art, photography & deep talks.",
    image: "https://api.a0.dev/assets/image?text=Woman with artsy look&aspect=1:1&seed=26"
  }
];


const SUGGESTIONS = [
    {
        id: '6',
        name: 'Noah',
        matchPercentage: '86%',
        image: 'https://api.a0.dev/assets/image?text=Man with athleisure style&aspect=1:1&seed=6',
        bio: "hiieee"
    },
    {
        id: '7',
        name: 'Ava',
        matchPercentage: '84%',
        image: 'https://api.a0.dev/assets/image?text=Woman with minimalist style&aspect=1:1&seed=7',
        bio: "helomnzxcvbcvjxsdfhvbsdmnvhjsvhjsdhjfdhvdfhjhvjdsh"
    },
];

type TabType = 'incoming' | 'matched' | 'suggestions';

const MatchesScreen = () => {
    const navigation = useNavigation();
    const [activeTab, setActiveTab] = useState<TabType>('matched');

    const handleAcceptMatch = (name: string) => {
        alert(`Match accepted with ${name}`);
    };

    const handleDeclineMatch = () => {
        alert(`Match declined`);
    };

    const handleMessageUser = (name: string) => {
        alert(`Removed ${name}`);
    };

    const renderIncomingItem = ({ item }: any) => (
        <View className="flex-row bg-white rounded-xl mb-4 p-4 shadow">
            <Image source={{ uri: item.image }} className="w-20 h-20 rounded-full" />
            <View className="flex-1 px-4 justify-center">
                <Text className="text-lg font-bold text-gray-800">{item.name}</Text>
                <Text className="text-gray-500">{item.bio}</Text>
                <Text className="text-pink-600 font-medium">{item.matchPercentage} match</Text>
            </View>
            <View className="justify-center items-center space-y-2">
                <TouchableOpacity onPress={handleDeclineMatch} className="bg-pink-600 p-2 rounded-full mb-3">
                    <FontAwesome name="times" size={20} color="#fff" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleAcceptMatch(item.name)} className="bg-green-600 p-2 rounded-full">
                    <FontAwesome name="check" size={20} color="#fff" />
                </TouchableOpacity>
            </View>
        </View>
    );

    const renderMatchedItem = ({ item }: any) => (
        <View className="flex-row bg-white rounded-xl mb-4 p-4 shadow">
            <Image source={{ uri: item.image }} className="w-20 h-20 rounded-full" />
            <View className="flex-1 px-4 justify-center">
                <Text className="text-lg font-bold text-gray-800">{item.name}</Text>
                <Text className="text-gray-500">{item.bio}</Text>
            </View>
            <TouchableOpacity onPress={() => handleMessageUser(item.name)} className="bg-pink-600 px-3 py-2 rounded-lg self-center flex-row items-center">
                <FontAwesome name="remove" size={18} color="#fff" />
                <Text className="text-white ml-2 font-medium">Remove</Text>
            </TouchableOpacity>
        </View>
    );

    const renderSuggestionItem = ({ item }: any) => (
        <View className="flex-row bg-white rounded-xl mb-4 p-4 shadow">
            <Image source={{ uri: item.image }} className="w-20 h-20 rounded-full" />
            <View className="flex-1 px-4 justify-center">
                <Text className="text-lg font-bold text-gray-800">{item.name}</Text>
                <Text className="text-gray-500">{item.bio}</Text>
                <Text className="text-pink-600 font-medium">{item.matchPercentage} match</Text>
            </View>
            <TouchableOpacity onPress={() => handleMessageUser(item.name)} className="bg-pink-600 px-3 py-2 rounded-lg self-center flex-row items-center">
                <Text className="text-white ml-2 font-medium">Give Request</Text>
            </TouchableOpacity>
        </View>
    );

    const renderContent = () => {
        switch (activeTab) {
            case 'incoming':
                return (
                    <FlatList
                        data={INCOMING_MATCHES}
                        renderItem={renderIncomingItem}
                        keyExtractor={item => item.id}
                        key="incoming" // 👈 forces FlatList to remount
                    />
                );
            case 'matched':
                return (
                    <FlatList
                        data={MATCHED_USERS}
                        renderItem={renderMatchedItem}
                        keyExtractor={item => item.id}
                        key="matched" // 👈 forces FlatList to remount
                    />
                );
            case 'suggestions':
                return (
                    <FlatList
                        data={SUGGESTIONS}
                        renderItem={renderSuggestionItem}
                        keyExtractor={item => item.id}
                        key="suggestions" // 👈 forces FlatList to remount
                    />
                );
            default:
                return null;
        }
    };

    return (
        <SafeAreaView className="flex-1 bg-white pt-5">
            <View className="bg-white px-7 flex flex-row mb-3">
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    className='mt-2 mr-6'
                >
                    <FontAwesome name="arrow-left" size={20} color="#000" />
                </TouchableOpacity>
                <Text className="text-2xl font-bold text-gray-800">Connections</Text>
            </View>

            <View className="flex-row bg-white border-b border-gray-200">
                {['incoming', 'matched', 'suggestions'].map(tab => (
                    <TouchableOpacity
                        key={tab}
                        onPress={() => setActiveTab(tab as TabType)}
                        className={`flex-1 py-4 items-center ${activeTab === tab ? 'border-b-2 border-pink-500' : ''
                            }`}
                    >
                        <Text className={`${activeTab === tab ? 'text-pink-600 font-semibold' : 'text-gray-500'}`}>
                            {tab.charAt(0).toUpperCase() + tab.slice(1)}
                        </Text>
                        {tab === 'incoming' && INCOMING_MATCHES.length > 0 && (
                            <View className="absolute top-1 right-6 bg-pink-500 rounded-full px-2 py-0.5">
                                <Text className="text-white text-xs font-bold">{INCOMING_MATCHES.length}</Text>
                            </View>
                        )}
                    </TouchableOpacity>
                ))}
            </View>

            <View className="flex-1 px-5 py-3">{renderContent()}</View>
        </SafeAreaView>
    );
};

export default MatchesScreen;
