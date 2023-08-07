// import { View, Text, TextInput } from "react-native";
// import React, { useState } from "react";
// import { MaterialIcons } from "@expo/vector-icons";

// const UserTextInput = (placeholder, isPass, setStateValue) => {
//   const [value, setValue] = useState("");
//   const handleTextChanged = (text) => {
//     setValue(text);
//     setStateValue(value);
//   };
//   return (
//     <View
//       style={{
//         marginTop: 20,
//         borderRadius: 50,
//         borderWidth: 2,
//         margin: 5,
//         padding: 8,
//         //   paddingVertical: 4,
//         //   paddingHorizontal: 6,
//         flexDirection: "row",
//         alignItems: "center",
//         justifyContent: "space-between",
//         borderColor: "#e5e5e5",
//       }}
//     >
//       <MaterialIcons name="person" color={"#6c6d83"} size={24} />
//       <TextInput
//         placeholder={placeholder}
//         value={value}
//         onChangeText={handleTextChanged}
//         style={{ flex: 1, marginTop: 1, fontWeight: "500", color: "#212529" }}
//       />
//     </View>
//   );
// };

// export default UserTextInput;
