import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Image } from "react-native";
import { FontAwesome, FontAwesome5, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import {
  QuerySnapshot,
  collection,
  doc,
  onSnapshot,
  orderBy,
  query,
} from "@firebase/firestore";
import { FIRESTORE_DB } from "../config";

const HomeScreen = () => {
  const navigation = useNavigation();
  const user = useSelector((state) => state.user.user);
  const [loading, setLoading] = useState(true);
  const [chats, setChats] = useState(null);
  useLayoutEffect(() => {
    const chatQuery = query(
      collection(FIRESTORE_DB, "chats"),
      orderBy("_id", "desc")
    );
    const unSubscribe = onSnapshot(chatQuery, (QuerySnapshot) => {
      const chatRooms = QuerySnapshot.docs.map((doc) => doc.data());
      setChats(chatRooms);
      setLoading(false);
    });
    return unSubscribe;
  }, []);

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <SafeAreaView>
        <View
          style={{
            width: "100%",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: 40,
            paddingHorizontal: 10,
            paddingHorizontal: 10,
            //margin: 5,
            //: 5,
          }}
        >
          <Image
            source={require("../assets/images/logo.png")}
            style={{ height: 50, width: 50 }}
          />
          <TouchableOpacity
            onPress={() => navigation.navigate("ProfileScreen")}
          >
            <Ionicons name="person" size={32} color="#2a9d8f" />
          </TouchableOpacity>
        </View>
        <ScrollView
          style={{
            width: "100%",
            paddingLeft: 4,
            paddingRight: 4,
          }}
        >
          <View
            style={{
              width: "100%",
            }}
          >
            <View
              style={{
                width: "100%",
                paddingLeft: 4,
                paddingRight: 4,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Text
                style={{
                  paddingTop: 10,
                  fontWeight: "bold",
                  color: "#14213d",
                }}
              >
                Messages
              </Text>
              <TouchableOpacity>
                <Ionicons
                  name="chatbox"
                  size={28}
                  color="#555"
                  onPress={() => navigation.navigate("AddToChat")}
                />
              </TouchableOpacity>
            </View>
            {loading ? (
              <>
                <View
                  style={{
                    width: "100%",
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <ActivityIndicator size={"large"} color={"#43c651"} />
                </View>
              </>
            ) : (
              <>
                {chats && chats?.length > 0 ? (
                  <>
                    {chats?.map((room) => (
                      <MessageCard key={room._id} room={room} />
                    ))}
                  </>
                ) : (
                  <></>
                )}
              </>
            )}
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

const MessageCard = ({ room }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("ChatScreen", { room: room })}
      style={{
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        paddingTop: 2,
      }}
    >
      <View
        style={{
          width: 64,
          height: 64,
          borderRadius: 32,
          alignItems: "center",
          justifyContent: "center",
          borderWidth: 2,
          padding: 4,
          borderColor: "#2a9d8f",
        }}
      >
        <FontAwesome5 name="users" size={24} color="#555" />
      </View>
      <View
        style={{
          color: "#55",
          flex: 1,
          alignItems: "flex-start",
          justifyContent: "center",
          marginLeft: 4,
        }}
      >
        <Text
          style={{
            color: "#333",
            fontWeight: "bold",
            fontSize: 15,
          }}
        >
          {room.chatName}
        </Text>
        <Text
          style={{
            color: "#333",
          }}
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </Text>
      </View>
      <Text
        style={{
          fontSize: 16,
          paddingHorizontal: 16,
          fontWeight: "600",
          color: "#2a9d8f",
          fontWeight: "700",
          fontSize: 14,
        }}
      >
        27 min
      </Text>
    </TouchableOpacity>
  );
};
export default HomeScreen;
