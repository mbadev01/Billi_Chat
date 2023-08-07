import {
  View,
  Text,
  Image,
  Dimensions,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";

import { Entypo, MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Login = () => {
  const isPass = true;
  const navigation = useNavigation();
  const [showPass, setShowPass] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const screenWidth = Math.round(Dimensions.get("window").width);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image
        source={require("../assets/images/bg.png")}
        resizeMode="cover"
        style={{
          height: 200,
          width: screenWidth,
        }}
      />
      <View
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "white",
          marginTop: 50,
          borderTopLeftRadius: 90,
          alignItems: "center",
          justifyContent: "center",
          flex: 1,
          paddingHorizontal: 6,
          paddingVertical: 6,
        }}
      >
        <Image
          source={require("../assets/images/logo.png")}
          resizeMode="contain"
          style={{ height: 60, width: 60 }}
        />
        <Text
          style={{
            fontWeight: "bold",
            color: "#2a9d8f",
          }}
        >
          Welcome Back!
        </Text>

        <View
          style={{
            width: "100%",
            flex: 1,
            alignItems: "center",
          }}
        >
          <View
            style={{
              marginTop: 20,
              borderRadius: 50,
              borderWidth: 2,
              margin: 5,
              padding: 8,
              //   paddingVertical: 4,
              //   paddingHorizontal: 6,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              borderColor: "#e5e5e5",
            }}
          >
            <MaterialIcons name="email" color={"#6c6d83"} size={24} />
            <TextInput
              isPass={false}
              value={email}
              onChangeText={(text) => setEmail(text)}
              placeholder="Email"
              autoCapitalize="none"
              style={{
                flex: 1,
                marginTop: 1,
                fontWeight: "500",
                color: "#212529",
              }}
            />
          </View>
          <View
            style={{
              marginTop: 20,
              borderRadius: 50,
              borderWidth: 2,
              margin: 5,
              padding: 8,
              //   paddingVertical: 4,
              //   paddingHorizontal: 6,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              borderColor: "#e5e5e5",
            }}
          >
            <MaterialIcons name="lock" color={"#6c6d83"} size={24} />
            <TextInput
              isPass={true}
              value={password}
              onChangeText={(text) => setPassword(text)}
              secureTextEntry={isPass && showPass}
              placeholder="Password"
              autoCapitalize="none"
              style={{
                flex: 1,
                marginTop: 1,
                fontWeight: "500",
                color: "#212529",
              }}
            />
            {isPass && (
              <TouchableOpacity onPress={() => setShowPass(!showPass)}>
                <Entypo
                  name={`${showPass ? "eye" : "eye-with-line"}`}
                  size={24}
                  color={"#6c6d83"}
                />
              </TouchableOpacity>
            )}
          </View>
          <TouchableOpacity
            style={{
              width: "100%",
              padding: 10,
              borderRadius: 10,
              margin: 10,

              backgroundColor: "#20bf55",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                color: "white",
                fontWeight: "bold",
              }}
            >
              Sign In
            </Text>
          </TouchableOpacity>
          <View
            style={{
              width: "100%",
              paddingL: 6,
              marginTop: 6,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ color: "#040404" }}>Don't have an account? </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate("SignUpScreen")}
            >
              <Text
                style={{
                  fontWeight: "bold",
                  color: "#2a9d8f",
                }}
              >
                Create Hare
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Login;
