import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  Button,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";

const TextScreen = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View>
      <Text>Enter Password:</Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoComplete="none"
        autoCorrect={false}
        value={password}
        onChangeText={(newValue) => setPassword(newValue)}
      />
      <Text>My name is {name}</Text>

      {(password.length < 4 && (
        <Text> password should be contain at least 4 char</Text>
      )) || <Text> oldu</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: "black",
    borderWidth: 1,
  },
});

export default TextScreen;
