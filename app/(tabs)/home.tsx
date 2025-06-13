import { Text, View, Image, TouchableOpacity,Linking } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import Swiper from 'react-native-deck-swiper';
import Ionicons from "@expo/vector-icons/Ionicons";

const cards = [
  {
    id: 1,
    brand: "Allen Solly",
    category: "Shirt",
    image_url: "https://f.media-amazon.com/images/I/61idJrfaIRL._AC_UL320_.jpg",
    link: "https://www.amazon.in/dp/B07DMZQTNX",
    name: "Men's Solid Slim Fit Shirt",
    price: "1599",
    tagline: "Men's Solid Slim Fit Shirt - Wear the vibe."
  },
  {
    id: 2,
    brand: "Levi's",
    category: "Jeans",
    image_url: "https://f.media-amazon.com/images/I/81WcnNQ-TBL._AC_UL320_.jpg",
    link: "https://www.amazon.in/dp/B08B46C6G2",
    name: "Levi's Slim Fit Mid-Rise Jeans",
    price: "2299",
    tagline: "Classic comfort meets timeless style."
  },
  {
    id: 3,
    brand: "H&M",
    category: "T-Shirt",
    image_url: "https://f.media-amazon.com/images/I/61MBlA8nKHL._AC_UL320_.jpg",
    link: "https://www.amazon.in/dp/B098MN7L2G",
    name: "H&M Men's Cotton T-Shirt",
    price: "799",
    tagline: "Minimalist tee for everyday swagger."
  },
  {
    id: 4,
    brand: "Puma",
    category: "Jacket",
    image_url: "https://f.media-amazon.com/images/I/51Nn1WRglCL._AC_UL320_.jpg",
    link: "https://www.amazon.in/dp/B09MZ5L9P8",
    name: "Puma Lightweight Windbreaker",
    price: "3499",
    tagline: "Stay breezy. Stay sporty."
  },
  {
    id: 5,
    brand: "Zara",
    category: "Dress",
    image_url: "https://f.media-amazon.com/images/I/713BQ4ylcOL._AC_UL320_.jpg",
    link: "https://www.amazon.in/dp/B0B8GJP4KZ",
    name: "Zara Women's Summer Dress",
    price: "2799",
    tagline: "Elegant curves, breezy comfort."
  },
  {
    id: 6,
    brand: "Nike",
    category: "Joggers",
    image_url: "https://f.media-amazon.com/images/I/51QJGFuO-JL._AC_UL320_.jpg",
    link: "https://www.amazon.in/dp/B09FXVP6FR",
    name: "Nike Sportswear Men's Joggers",
    price: "1999",
    tagline: "Train hard. Chill harder."
  },
  {
    id: 7,
    brand: "FabIndia",
    category: "Kurta",
    image_url: "https://f.media-amazon.com/images/I/71Y7N3ZpnFL._AC_UL320_.jpg",
    link: "https://www.amazon.in/dp/B09TQNBNBX",
    name: "Men's Cotton Printed Kurta",
    price: "1499",
    tagline: "Tradition, with a twist."
  },
  {
    id: 8,
    brand: "Biba",
    category: "Ethnic Dress",
    image_url: "https://f.media-amazon.com/images/I/61XcInLLO+L._AC_UL320_.jpg",
    link: "https://www.amazon.in/dp/B07N6SBXVK",
    name: "Biba Women's Flared Anarkali",
    price: "3199",
    tagline: "Grace and tradition stitched together."
  }
];


export default function Home() {
  return (
    <SafeAreaView className="flex-1 bg-gray-100">
      <Image
        source={require("../../assets/kapdaswag3.png")}
        className="h-20 w-full mt-4 mb-2"
        resizeMode="contain"
      />
      <View className="absolute top-[80px] right-0 p-4 z-10">
        <Ionicons name="qr-code-sharp" size={35} />
      </View>
      <View className="flex-1 px-4 -mt-16">
        <Swiper
          cards={cards}
          renderCard={(card) => (
            <View className="bg-white rounded-3xl shadow-lg overflow-hidden" style={{ height: '85%' }}>
              {/* Product Image */}
              <Image
                source={{ uri: card.image_url }}
                className="w-full h-2/3"
                resizeMode="contain"
              />

              {/* Product Details */}
              <View className="p-4">
                <Text className="text-2xl font-bold text-gray-800">{card.name}</Text>
                <View className="flex flex-row">
                  <Text className="text-xl text-black mb-1 -mr-10">{card.brand}</Text>
                  <Image source={require("../../assets/verified.png")} />
                </View>
                <View className="flex flex-row">
                  <Text className="text-xl font-bold text-black">₹{card.price}</Text>
                  <TouchableOpacity onPress={()=>Linking.openURL(card.link)}>
                    <View className="flex flex-row border border-1 rounded-[50px] justify-center items-center p-1 ml-3">
                    <Ionicons name="shirt-outline" size={23} className="ml-1"/>
                    <Text className="w-[70px] ml-1">Try On !</Text>
                  </View>
                  </TouchableOpacity>
                </View>

                {/* Tagline */}
                <Text className="text-sm text-gray-600 mt-2 italic">{card.tagline}</Text>

                {/* Shop Now Button */}
                <TouchableOpacity onPress={() => Linking.openURL(card.link)}>
                  <Text className="bg-pink-500 text-white px-3 py-3 rounded-full font-bold text-md w-full text-center mt-3">
                    Shop Now
                  </Text>
                </TouchableOpacity>

              </View>
            </View>
          )}

          // Swipe Controls
          disableTopSwipe
          disableBottomSwipe
          verticalSwipe={false}

          // Custom overlay images
          overlayLabels={{
            left: {
              element: (
                <Image
                  source={require('../../assets/nope.png')}
                  className="w-[120px] h-[80px] opacity-80"
                  resizeMode="contain"
                />
              ),
              style: {
                wrapper: {
                  flexDirection: 'column',
                  alignItems: 'flex-end',
                  justifyContent: 'flex-start',
                  marginTop: 20,
                  marginLeft: -20
                }
              }
            },
            right: {
              element: (
                <Image
                  source={require('../../assets/like.png')}
                  className="w-[120px] h-[80px] opacity-80"
                  resizeMode="contain"
                />
              ),
              style: {
                wrapper: {
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  justifyContent: 'flex-start',
                  marginTop: 20,
                  marginLeft: 20
                }
              }
            }
          }}

          // Swipe callbacks
          onSwipedLeft={(cardIndex) => console.log('Noped:', cards[cardIndex].id)}
          onSwipedRight={(cardIndex) => console.log('Liked:', cards[cardIndex].id)}

          // Visual settings
          backgroundColor="transparent"
          stackSize={3}
          stackSeparation={15}
          animateCardOpacity
          overlayOpacityHorizontalThreshold={10}
          cardStyle={{ borderRadius: 30 }}
          marginTop={20}
        />
      </View>
    </SafeAreaView>
  );
}


