import {
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  ActivityIndicator,
  TextInput,
} from "react-native";
import React, { useLayoutEffect, useRef, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  Entypo,
  FontAwesome,
  FontAwesome5,
  Ionicons,
  MaterialIcons,
} from "@expo/vector-icons";
import { useSelector } from "react-redux";
import {
  addDoc,
  collection,
  collectionGroup,
  doc,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
} from "@firebase/firestore";
import { FIRESTORE_DB } from "../config";

const ChatScreen = ({ route }) => {
  const user = useSelector((state) => state.user.user);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState(null);
  const [loading, setLoading] = useState(true);
  const { room } = route.params;
  const navigation = useNavigation();
  const textInputRef = useRef(null);

  const sendMessage = async () => {
    const timeStamp = serverTimestamp();
    const id = `${Date.now()}`;
    const _doc = {
      _id: id,
      roomId: room._id,
      timeStamp: timeStamp,
      message: message,
      user: user,
    };
    setMessage("");
    await addDoc(
      collection(doc(FIRESTORE_DB, "chats", room._id), "message"),
      _doc
    )
      .then(() => {})
      .catch((err) => alert(err));
  };
  useLayoutEffect(() => {
    const msgQuery = query(
      collection(FIRESTORE_DB, "chats", room?._id, "message"),
      orderBy("timeStamp", "asc")
    );
    const unSubscribe = onSnapshot(msgQuery, (querySnap) => {
      const upMsg = querySnap.docs.map((doc) => doc.data());
      setMessages(upMsg);
      setLoading(false);
    });
    return unSubscribe;
  }, []);
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
          <View>
            <Text
              style={{
                color: "#f0f9ff", // Corresponds to text-gray-50 in Tailwind
                fontSize: 16, // Corresponds to text-base in Tailwind
                fontWeight: "600", // Corresponds to font-semibold in Tailwind
                textTransform: "capitalize",
              }}
            >
              {room.chatName.length > 16
                ? `${room.chatName.slice(0, 16)}..`
                : room.chatName}{" "}
            </Text>
            <Text
              style={{
                color: "#f0f9ff", // Corresponds to text-gray-50 in Tailwind
                fontSize: 16, // Corresponds to text-base in Tailwind
                fontWeight: "600", // Corresponds to font-semibold in Tailwind
                textTransform: "capitalize",
              }}
            >
              Online
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginRight: 12,
            }}
          >
            <TouchableOpacity
              style={{
                marginLeft: 5,
                marginRight: 5,
              }}
            >
              <FontAwesome5 name="video" size={20} color="#fbfbfb" />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                marginLeft: 5,
                marginRight: 5,
              }}
            >
              <FontAwesome5 name="phone" size={20} color="#fbfbfb" />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                marginLeft: 5,
                marginRight: 5,
              }}
            >
              <Entypo name="dots-three-vertical" size={20} color="#fbfbfb" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View
        style={{
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
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          keyboardVerticalOffset={100}
        >
          <>
            <ScrollView showsVerticalScrollIndicator={false}>
              {loading ? (
                <>
                  <View
                    style={{
                      width: "100%",
                      flex: 1,
                      flexDirection: "row",
                      justifyContent: "center",
                    }}
                  >
                    <ActivityIndicator size={"large"} color={"#43c651"} />
                  </View>
                </>
              ) : (
                <>
                  {messages?.map((msg, i) =>
                    msg.user.providerData.email === user.providerData.email ? (
                      <View key={i} style={{ margin: 1 }}>
                        <View
                          style={{
                            backgroundColor: "#43c651",
                            paddingHorizontal: 16,
                            paddingVertical: 8,
                            borderTopLeftRadius: 32,
                            borderTopRightRadius: 32,
                            borderBottomLeftRadius: 32,
                            width: "auto",
                            position: "relative",
                            alignSelf: "flex-end",
                          }}
                        >
                          <Text
                            style={{
                              fontSize: 16,
                              fontWeight: "600",
                              color: "white",
                            }}
                          >
                            {msg.message}
                          </Text>
                        </View>
                        <View
                          style={{
                            alignSelf: "flex-end",
                          }}
                        >
                          {msg?.timeStamp?.seconds && (
                            <Text
                              style={{
                                fontSize: 12,
                                color: "black",
                                fontWeight: "bold",
                              }}
                            >
                              {new Date(
                                parseInt(msg?.timeStamp?.seconds) * 1000
                              ).toLocaleTimeString("en-US", {
                                hour: "numeric",
                                minute: "numeric",
                                hour12: true,
                              })}
                            </Text>
                          )}
                        </View>
                      </View>
                    ) : (
                      <View
                        key={i}
                        style={{
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "flex-start",
                          marginRight: 8,
                          alignSelf: "flex-start",
                        }}
                      >
                        <View
                          style={{
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "center",
                            marginRight: 2,
                          }}
                        >
                          <View style={{ margin: 1 }}>
                            <View
                              style={{
                                backgroundColor: "#b1a7a6",
                                paddingHorizontal: 16,
                                paddingVertical: 8,
                                borderTopLeftRadius: 32,
                                borderTopRightRadius: 32,
                                borderBottomLeftRadius: 32,
                                width: "auto",
                                position: "relative",
                              }}
                            >
                              <Text
                                style={{
                                  fontSize: 16,
                                  fontWeight: "600",
                                  color: "black  ",
                                }}
                              >
                                {msg.message}
                              </Text>
                            </View>
                            <View
                              style={{
                                alignSelf: "flex-start",
                              }}
                            >
                              {msg?.timeStamp?.seconds && (
                                <Text
                                  style={{
                                    fontSize: 12,
                                    color: "black",
                                    fontWeight: "bold",
                                  }}
                                >
                                  {new Date(
                                    parseInt(msg?.timeStamp?.seconds) * 1000
                                  ).toLocaleTimeString("en-US", {
                                    hour: "numeric",
                                    minute: "numeric",
                                    hour12: true,
                                  })}
                                </Text>
                              )}
                            </View>
                          </View>
                        </View>
                      </View>
                    )
                  )}
                </>
              )}
            </ScrollView>
          </>
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              paddingHorizontal: 8,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                padding: 8,
                backgroundColor: "#d1d5db", // Replace with your desired color
                borderRadius: 20,
                marginHorizontal: 16,
                marginBottom: 16,
              }}
            >
              <TouchableOpacity>
                <Entypo name="emoji-happy" size={24} color={"#555"} />
              </TouchableOpacity>
              <TextInput
                style={{ flex: 1, height: 32, fontSize: 16, fontWeight: "600" }}
                placeholder="Type Hear..."
                placeholderTextColor={"#999"}
                value={message}
                onChangeText={(text) => setMessage(text)}
              />
              <TouchableOpacity>
                <Entypo name="mic" size={24} color={"#43c651"} />
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity onPress={sendMessage}>
                <FontAwesome name="send" size={24} color={"#555"} />
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
      </View>
    </View>
  );
};

export default ChatScreen;
