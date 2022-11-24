import React from "react";
import {
  Text,
  StyleSheet,
  View,
  Button,
  TouchableOpacity,
  Image,
} from "react-native";

const ImageDetails = (props) => {
  console.log(props);
  return (
    <View>
      <Image source={props.imageSource} />
      <Text style={styles.text}>{props.title}</Text>
      <Text style={styles.text}>{props.score}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
  },
});

export default ImageDetails;
