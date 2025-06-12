import { Text, View, Image, TouchableOpacity,Linking } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import Swiper from 'react-native-deck-swiper';
import Ionicons from "@expo/vector-icons/Ionicons";

const cards = [
  { id: 1, brand: "Allen Solly", category: "Shirt", image_url: "https://f.media-amazon.com/images/I/61idJrfaIRL._AC_UL320_.jpg", link: "https://www.amazon.in/Allen-Solly-Geometric-Regular-ASSFWMOFO48848_White_38/dp/B07DMZQTNX/ref=cs_sr_dp_1?crid=21441F6H8C0VU&dib=eyJ2IjoiMSJ9.uuNCqLKCFVYJFS_tT0XBavWkml12lxN7elzhqmwL2P_PiZptCInsokey5Zp6uFLXRdXlspJNyQkqioeB508ptTvhiagc-yCPbxiEl5_thquUJnsEu-Bz9B4DTb-TzcEwcGiUsSTWPiena9ZOOXRmKJ_i5ptX2k9T7SvofZv_TN3lV1HJApfxDTyrKPe3ZsxH4MIdt90finzXne63aeF4lWWb7sykz8sEEZCshwqP2ygvd-ReIry7n-FSh2u0guu6XeaFun2HpzSBUZXQQhUvC-8Ym9_Zz9VcQU0vBcOw6kY.HCwk5wBsrk2zRpxeDMEw27VmaAZCuUideniC-CSeBpk&dib_tag=se&keywords=shirt&qid=1746275852&sprefix=s%2Caps%2C412&sr=8-18", name: "Men's Solid Slim Fit Shirt", price: "1599", tagline: "Men's Solid Slim Fit Shirt - Wear the vibe." },
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


