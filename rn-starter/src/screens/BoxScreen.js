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

const BoxScreen = () => {
  return (
    <View>
      <Text>Enter Password:</Text>
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

export default BoxScreen;
