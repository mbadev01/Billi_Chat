import { View, Text, TouchableOpacity, TextInput } from "react-native";
import React, { useState } from "react";
import { FontAwesome, Ionicons, MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { doc, setDoc } from "@firebase/firestore";
import { FIRESTORE_DB } from "../config";
import { useSelector } from "react-redux";

const AddToChat = () => {
  const user = useSelector((state) => state.user.user);
  const createNewChat = async () => {
    let id = `${Date.now()}`;

    const _doc = {
      _id: id,
      user: user,
      chatName: addChat,
    };
    if (addChat !== "") {
      setDoc(doc(FIRESTORE_DB, "chats", id), _doc)
        .then(() => {
          setAddChat("");
          navigation.replace("HomeScreen");
        })
        .catch((err) => {
          alert("Error :", err);
        });
    }
  };
  const navigation = useNavigation();
  const [addChat, setAddChat] = useState("");
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          width: "100%",
          flex: 0.25,

          padding: 16,
          paddingTop: 24,
          paddingBottom: 36,
          backgroundColor: "#43c651",
        }}
      >
        <View
          style={{
            width: "100%",
            paddingHorizontal: 16,
            paddingVertical: 12,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <MaterialIcons name="chevron-left" size={32} color={"#fbfbfb"} />
          </TouchableOpacity>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              marginRight: 12,
            }}
          >
            <Ionicons name="person" size={32} color="#2b2d42" />
          </View>
        </View>
      </View>
      <View
        style={{
          marginTop: 20,
          width: "100%",
          backgroundColor: "white",
          paddingHorizontal: 16,
          paddingVertical: 24,
          borderRadius: 48,
          flex: 1,
          borderTopLeftRadius: 50,
          marginTop: -50,
        }}
      >
        <View
          style={{
            paddingHorizontal: 16,
            paddingVertical: 24,
          }}
        >
          <View
            style={{
              width: "100%",
              paddingHorizontal: 16,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              paddingVertical: 12,
              borderRadius: 16,
              borderWidth: 1,
              borderColor: "#E5E7EB",
              marginRight: 8,
            }}
          >
            <Ionicons name="chatbubbles" size={24} color={"#777"} />
            <TextInput
              style={{
                width: "100%",
                height: 48,
                marginTop: -5,
                flex: 1,
                color: "#8d99ae",
                marginHorizontal: 10,
              }}
              placeholder="Create a chat"
              placeholderTextColor={"#999"}
              value={addChat}
              onChangeText={(text) => setAddChat(text)}
            />

            <TouchableOpacity onPress={createNewChat}>
              <FontAwesome name="send" size={24} color={"#777"} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default AddToChat;
