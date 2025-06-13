import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  TextInput,
  TouchableOpacity,
  Modal,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesome } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';

const INTEREST_OPTIONS = [
  'Minimalist', 'Streetwear', 'Casual', 'Formal', 'Vintage', 
  'Athletic', 'Bohemian', 'Preppy', 'Punk', 'High Fashion',
  'Y2K', 'Cottagecore', 'Gothic', 'Business Casual'
];

export default function ProfileScreen() {
  const [modalVisible, setModalVisible] = useState(false);

  // Mock user state
  const [username, setUsername] = useState('kapdaswag2025');
  const [bio, setBio] = useState('hello');
  const [instagram, setInstagram] = useState('kapdaswag');
  const [snapchat, setSnapchat] = useState('kapdaswag123');
  const [interests, setInterests] = useState(['fashion', 'code', 'Casuals']);
  const [profileImage, setProfileImage] = useState(
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUrnmr3CB1oDs0WqiWPzNxENXCnRE-1yKVKw&s'
  );

  const toggleInterest = (interest: string) => {
    if (interests.includes(interest)) {
      setInterests(interests.filter(i => i !== interest));
    } else {
      setInterests([...interests, interest]);
    }
  };

  const handleImagePicker = () => {
    const newImage = `https://api.a0.dev/assets/image?text=${encodeURIComponent(username)}&aspect=1:1&seed=${Date.now()}`;
    setProfileImage(newImage);
    alert("Profile photo updated");
  };

  const handleSave = () => {
    if (!username.trim()) {
      alert("Username is required");
      return;
    }
    alert("Profile updated successfully");
    setModalVisible(false);
  };

  const handleLogout = () => {
    alert('Logged out');
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <StatusBar style="dark" />

      {/* Header */}
      <View className="flex-row justify-between items-center px-5 py-4 border-b border-gray-200">
        <Text className="text-lg font-bold text-gray-800">My Profile</Text>
        <TouchableOpacity>
          <FontAwesome name="cog" size={24} color="#333" />
        </TouchableOpacity>
      </View>

      {/* Main Profile View */}
      <ScrollView contentContainerStyle={{ padding: 20 }}>
        <View className="items-center mb-8">
          <Image
            source={{ uri: profileImage }}
            className="w-24 h-24 rounded-full mb-4"
          />
          <Text className="text-lg font-bold text-gray-800 mb-2">@{username}</Text>
          <Text className="text-sm text-gray-700 text-center px-5 mb-4">{bio}</Text>
          <TouchableOpacity
            onPress={() => setModalVisible(true)}
            className="bg-pink-600 px-5 py-2 rounded-full mt-2"
          >
            <Text className="text-white font-semibold">Edit Profile</Text>
          </TouchableOpacity>
        </View>

        <View className="mb-8">
          <Text className="text-lg font-bold text-gray-800 mb-4">Style Interests</Text>
          <View className="flex-row flex-wrap">
            {interests.map((interest, index) => (
              <View key={index} className="bg-pink-600 px-4 py-2 rounded-full mr-2 mb-2">
                <Text className="text-white text-sm font-medium">{interest}</Text>
              </View>
            ))}
          </View>
        </View>

        <View className="mb-8">
          <Text className="text-lg font-bold text-gray-800 mb-4">Social Media</Text>
          <View className="space-y-4">
            {instagram && (
              <View className="flex-row items-center mb-2">
                <FontAwesome name="instagram" size={24} color="#E1306C" />
                <Text className="ml-3 text-base text-gray-800">{instagram}</Text>
              </View>
            )}
            {snapchat && (
              <View className="flex-row items-center">
                <FontAwesome name="snapchat-ghost" size={24} color="#FFFC00" />
                <Text className="ml-3 text-base text-gray-800">{snapchat}</Text>
              </View>
            )}
          </View>
        </View>

        <TouchableOpacity
          onPress={handleLogout}
          className="mt-5 mb-10 py-4 items-center border border-pink-600 rounded-xl"
        >
          <Text className="text-pink-600 font-semibold text-base">Log Out</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Edit Profile Modal */}
      <Modal animationType="slide" visible={modalVisible}>
        <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={{ flex: 1 }}
          >
            <View className="flex-row justify-between items-center px-5 py-4 border-b border-gray-200">
              <TouchableOpacity onPress={() => setModalVisible(false)}>
                <FontAwesome name="arrow-left" size={20} color="#333" />
              </TouchableOpacity>
              <Text className="text-lg font-bold text-gray-800">Edit Profile</Text>
              <TouchableOpacity onPress={handleSave} className="bg-pink-600 px-4 py-1.5 rounded-full">
                <Text className="text-white font-semibold">Save</Text>
              </TouchableOpacity>
            </View>

            <ScrollView contentContainerStyle={{ padding: 20 }}>
              <View className="items-center mb-6">
                <Image source={{ uri: profileImage }} className="w-28 h-28 rounded-full mb-3" />
                <TouchableOpacity
                  onPress={handleImagePicker}
                  className="flex-row items-center bg-pink-600 px-4 py-2 rounded-full"
                >
                  <FontAwesome name="camera" size={16} color="#fff" />
                  <Text className="text-white font-medium ml-2">Change Photo</Text>
                </TouchableOpacity>
              </View>

              {/* Username */}
              <Text className="text-sm font-semibold text-gray-800 mb-1">Username</Text>
              <View className="flex-row items-center bg-gray-100 border border-gray-300 rounded-md mb-4">
                <Text className="ml-3 text-lg text-gray-400">@</Text>
                <TextInput
                  style={{ flex: 1, padding: 10, fontSize: 16 }}
                  value={username}
                  onChangeText={setUsername}
                  placeholder="Enter username"
                  autoCapitalize="none"
                />
              </View>

              {/* Bio */}
              <Text className="text-sm font-semibold text-gray-800 mb-1">Bio</Text>
              <TextInput
                style={{
                  height: 100,
                  borderColor: '#ddd',
                  borderWidth: 1,
                  borderRadius: 8,
                  backgroundColor: '#f9f9f9',
                  padding: 10,
                  textAlignVertical: 'top',
                  marginBottom: 8,
                }}
                multiline
                maxLength={150}
                value={bio}
                onChangeText={setBio}
                placeholder="Write something about yourself"
              />
              <Text className="text-right text-xs text-gray-400 mb-5">{bio.length}/150</Text>

              {/* Social */}
              <Text className="text-lg font-bold text-gray-800 mb-3">Social Media</Text>

              <Text className="text-sm font-semibold text-gray-800 mb-1">Instagram</Text>
              <View className="flex-row items-center bg-gray-100 border border-gray-300 rounded-md mb-3">
                <Text className="ml-3 text-lg text-gray-400">@</Text>
                <TextInput
                  style={{ flex: 1, padding: 10, fontSize: 16 }}
                  value={instagram}
                  onChangeText={setInstagram}
                  placeholder="Instagram username"
                />
              </View>

              <Text className="text-sm font-semibold text-gray-800 mb-1">Snapchat</Text>
              <View className="flex-row items-center bg-gray-100 border border-gray-300 rounded-md mb-5">
                <Text className="ml-3 text-lg text-gray-400">@</Text>
                <TextInput
                  style={{ flex: 1, padding: 10, fontSize: 16 }}
                  value={snapchat}
                  onChangeText={setSnapchat}
                  placeholder="Snapchat username"
                />
              </View>

              <Text className="text-lg font-bold text-gray-800 mb-2">Style Interests</Text>
              <Text className="text-sm text-gray-500 mb-3">Select your fashion interests</Text>

              <View className="flex-row flex-wrap">
                {INTEREST_OPTIONS.map((interest, index) => (
                  <TouchableOpacity
                    key={index}
                    onPress={() => toggleInterest(interest)}
                    className={`px-4 py-2 mr-2 mb-2 rounded-full border ${
                      interests.includes(interest)
                        ? 'bg-pink-600 border-pink-600'
                        : 'bg-gray-100 border-gray-300'
                    }`}
                  >
                    <Text
                      className={`text-sm font-medium ${
                        interests.includes(interest) ? 'text-white' : 'text-gray-700'
                      }`}
                    >
                      {interest}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            </ScrollView>
          </KeyboardAvoidingView>
        </SafeAreaView>
      </Modal>
    </SafeAreaView>
  );
}
