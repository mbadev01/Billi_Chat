import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import { Entypo, Ionicons, MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { FIREBASE_AUTH } from "../config";
import { SET_USER_NULl } from "../Contex/Actions/UserActions";

const ProfileScreen = () => {
  const dispatch = useDispatch();
  const handleLogOut = async () => {
    await FIREBASE_AUTH.signOut().then(() => {
      dispatch(SET_USER_NULl());
      navigation.replace("Login");
    });
  };
  const navigation = useNavigation();
  const user = useSelector((state) => state.user.user);
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
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <MaterialIcons name="chevron-left" size={32} color="#555" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Entypo name="dots-three-vertical" size={24} color={"#555"} />
          </TouchableOpacity>
        </View>
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 20,
              color: "#2a9d8f",
              paddingTop: 12,
            }}
          >
            {user?.fullName}
          </Text>
          <Text
            style={{
              fontWeight: "600",
              fontSize: 20,
              color: "black",
              paddingTop: 12,
            }}
          >
            {user?.providerData.email}
          </Text>
        </View>
        <View
          style={{
            width: "100%",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-evenly",
            paddingVertical: 6,
          }}
        >
          <View style={{ alignItems: "center", justifyContent: "center" }}>
            <TouchableOpacity
              style={{
                width: 48,
                height: 48,
                alignItems: "center",
                justifyContent: "space-between",
                borderRadius: 8,
                backgroundColor: "#555",
              }}
            >
              <MaterialIcons
                name="messenger-outline"
                size={40}
                color={"white"}
              />
            </TouchableOpacity>
            <Text>Message</Text>
          </View>
          <View style={{ alignItems: "center", justifyContent: "center" }}>
            <TouchableOpacity
              style={{
                width: 48,
                height: 48,
                alignItems: "center",
                justifyContent: "space-between",
                borderRadius: 8,
                backgroundColor: "#555",
              }}
            >
              <Ionicons name="ios-videocam-outline" size={40} color={"white"} />
            </TouchableOpacity>
            <Text>Video Call</Text>
          </View>
          <View style={{ alignItems: "center", justifyContent: "center" }}>
            <TouchableOpacity
              style={{
                width: 48,
                height: 48,
                alignItems: "center",
                justifyContent: "space-between",
                borderRadius: 8,
                backgroundColor: "#555",
              }}
            >
              <Ionicons name="call-outline" size={40} color={"white"} />
            </TouchableOpacity>
            <Text>Call</Text>
          </View>
          <View style={{ alignItems: "center", justifyContent: "center" }}>
            <TouchableOpacity
              style={{
                width: 48,
                height: 48,
                alignItems: "center",
                justifyContent: "space-between",
                borderRadius: 8,
                backgroundColor: "#555",
              }}
            >
              <Entypo name="dots-three-horizontal" size={40} color={"white"} />
            </TouchableOpacity>
            <Text>More Options</Text>
          </View>
        </View>
        <View
          style={{
            width: "100%",
            padding: 6,
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text style={{ color: "#555" }}>Media Shared</Text>
            <TouchableOpacity>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "600",
                  textTransform: "uppercase",
                }}
              >
                View All
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <TouchableOpacity
              style={{
                width: 94,
                height: 94,
                margin: 1,
                borderRadius: 10,
                backgroundColor: "#ccc",
                overflow: "hidden",
              }}
            >
              <Image
                source={{
                  uri: "https://www.shutterstock.com/shutterstock/photos/2226369915/display_1500/stock-photo-close-up-of-lion-roaring-at-national-park-2226369915.jpg",
                }}
                style={{
                  width: "100%",
                  height: "100%",
                }}
                resizeMode="cover"
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: 94,
                height: 94,
                margin: 1,
                borderRadius: 10,
                backgroundColor: "#ccc",
                overflow: "hidden",
              }}
            >
              <Image
                source={{
                  uri: "https://www.shutterstock.com/shutterstock/photos/1416582800/display_1500/stock-photo-african-landscape-with-mountains-silhouettes-and-sunset-1416582800.jpg",
                }}
                style={{
                  width: "100%",
                  height: "100%",
                }}
                resizeMode="cover"
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: 94,
                height: 94,
                margin: 1,
                borderRadius: 10,
                backgroundColor: "#ccc",
                overflow: "hidden",
              }}
            >
              <Image
                source={{
                  uri: "https://www.shutterstock.com/shutterstock/photos/351890411/display_1500/stock-photo-single-lion-s-mane-mushroom-on-white-background-351890411.jpg",
                }}
                style={{
                  width: "100%",
                  height: "100%",
                }}
                resizeMode="cover"
              />
              <View
                style={{
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Text
                  style={{ fontSize: 16, color: "black", fontWeight: "600" }}
                >
                  250+
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            width: "100%",
            paddingHorizontal: 6,
            paddingVertical: 4,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: 15,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <MaterialIcons name="security" size={24} color={"#555"} />
            <Text
              style={{
                fontSize: 16,
                fontWeight: "600",
                paddingHorizontal: 3,
                color: "black",
              }}
            >
              Privacy
            </Text>
          </View>
          <MaterialIcons name="chevron-right" size={24} color={"#555"} />
        </View>
        <View
          style={{
            width: "100%",
            paddingHorizontal: 6,
            paddingVertical: 4,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: 15,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <MaterialIcons name="message" size={24} color={"#555"} />
            <Text
              style={{
                fontSize: 16,
                fontWeight: "600",
                paddingHorizontal: 3,
                color: "black",
              }}
            >
              Groups
            </Text>
          </View>
          <MaterialIcons name="chevron-right" size={24} color={"#555"} />
        </View>
        <View
          style={{
            width: "100%",
            paddingHorizontal: 6,
            paddingVertical: 4,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: 15,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <MaterialIcons name="music-note" size={24} color={"#555"} />
            <Text
              style={{
                fontSize: 16,
                fontWeight: "600",
                paddingHorizontal: 3,
                color: "black",
              }}
            >
              Media's and Downloads
            </Text>
          </View>
          <MaterialIcons name="chevron-right" size={24} color={"#555"} />
        </View>
        <View
          style={{
            width: "100%",
            paddingHorizontal: 6,
            paddingVertical: 4,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: 15,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <MaterialIcons name="person" size={24} color={"#555"} />
            <Text
              style={{
                fontSize: 16,
                fontWeight: "600",
                paddingHorizontal: 3,
                color: "black",
              }}
            >
              Account
            </Text>
          </View>
          <MaterialIcons name="chevron-right" size={24} color={"#555"} />
        </View>
        <View
          style={{
            width: "100%",
            paddingHorizontal: 6,
            paddingVertical: 4,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <TouchableOpacity onPress={handleLogOut}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: "600",
                paddingHorizontal: 12,
                color: "#43c651",
              }}
            >
              Log Out
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default ProfileScreen;
