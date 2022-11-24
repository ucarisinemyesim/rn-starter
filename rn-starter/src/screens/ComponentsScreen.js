import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ComponentsScreen = () => {
  return (
    <View>
      <Text style={styles.textStyle}> Component Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
  },
});
export default ComponentsScreen; //export ederek bu componenti projenin her yerinde kullanabilir oluyoruz.
