import React from "react";
import {
  Text,
  StyleSheet,
  View,
  Button,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";

const HomeScreen = (props) => {
  //(props) yerine ({navigation}) yazıp props.navigation..... olan yerlerden propsu silebilirdik.
  //props propertisten geliyor
  // console.log(props.navigation);
  // console.log(props);
  return (
    <SafeAreaView>
      <View>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("Components")}
        >
          <Text style={styles.text}>Home Screen</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => props.navigation.navigate("Image")}>
          <Text style={styles.text}>Image Screen</Text>
        </TouchableOpacity>
        <Button
          onPress={() => props.navigation.navigate("Counter")}
          title="go counter"
        />
        <Button
          onPress={() => props.navigation.navigate("Color")}
          title="go color changer"
        />
        <Button
          onPress={() => props.navigation.navigate("ColorPage")}
          title="go color page"
        />
        <Button
          onPress={() => props.navigation.navigate("Text")}
          title="go text page"
        />
        <Button
          onPress={() => props.navigation.navigate("Box")}
          title="go box page"
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
