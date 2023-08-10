import { View, Text, Image } from "react-native";
import React, { useLayoutEffect } from "react";
import { ActivityIndicator } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { FIREBASE_AUTH, FIRESTORE_DB } from "../config";
import { doc, getDoc } from "@firebase/firestore";
import { SET_USER } from "../Contex/Actions/UserActions";

const SplashScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    checkLaggedUSer();
  }, []);

  const checkLaggedUSer = async () => {
    FIREBASE_AUTH.onAuthStateChanged((userCred) => {
      if (userCred?.uid) {
        getDoc(doc(FIRESTORE_DB, "users", userCred?.uid))
          .then((docSnap) => {
            if (docSnap.exists()) {
              console.log("User Data", docSnap.data());
              dispatch(SET_USER(docSnap.data()));
            }
          })
          .then(() => {
            setTimeout(() => {
              navigation.navigate("HomeScreen");
            }, 1000);
          });
      } else {
        navigation.navigate("Login");
      }
    });
  };
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        margin: 20,
        padding: 20,
      }}
    >
      <Image
        source={require("../assets/images/logo.png")}
        style={{
          width: 60,
          height: 60,
          resizeMode: "contain",
        }}
      />
      <ActivityIndicator size={"large"} color={"#43c651"} />
    </View>
  );
};

export default SplashScreen;
