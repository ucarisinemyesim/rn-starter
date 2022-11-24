import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";
import ImageDetails from "../components/ImageDetails";
const ImageScreen = () => {
  return (
    <View>
      <ImageDetails
        title="Forest"
        imageSource={require("../../assets/forest.jpg")}
        score={9}
      />
      <ImageDetails
        title="Beach"
        imageSource={require("../../assets/beach.jpg")}
      />
      <ImageDetails
        title="Mountain"
        imageSource={require("../../assets/mountain.jpg")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default ImageScreen;
