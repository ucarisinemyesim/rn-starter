import React, { useState } from "react";
import ColorCounter from "../components/ColorCounter";
import {
  Text,
  StyleSheet,
  View,
  Button,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
} from "react-native";

const SquareScreen = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);
  const Color_Increament = 15;

  //Aşağıdaki yapıyı kullanmaktansa switch case kullanmak daha okunur olur.
  //   const setColor = (color, change) => {
  //     if (color === "red") {
  //       if (red + change > 255 || red + change < 0) {
  //         return;
  //       } else {
  //         setRed(red + change);
  //       }
  //     }
  //   };
  //   return(
  //     <ColorCounter
  //       onIncrease={() => setColor("red", Color_Increament)}
  //       onDecrease={() => setColor("red", -1 * Color_Increament)}
  //       color="Red"
  //     />;)

  const setColor = (color, change) => {
    switch (color) {
      case "red":
        red + change > 255 || red + change < 0 ? null : setRed(red + change);
        return;

      case "green":
        green + change > 255 || green + change < 0
          ? null
          : setGreen(green + change);
        return;

      case "blue":
        blue + change > 255 || blue + change < 0
          ? null
          : setBlue(blue + change);
        return;
      default:
        return;
    }
  };
  //   console.log(red);
  //   console.log(green);
  //   console.log(blue);

  return (
    <SafeAreaView>
      <ColorCounter
        onIncrease={() => setColor("red", Color_Increament)}
        onDecrease={() => setColor("red", -1 * Color_Increament)}
        color="Red"
      />
      <ColorCounter
        onIncrease={() => setColor("green", Color_Increament)}
        onDecrease={() => setColor("green", -1 * Color_Increament)}
        color="Green"
      />
      <ColorCounter
        onIncrease={() => setColor("blue", Color_Increament)}
        onDecrease={() => setColor("blue", -1 * Color_Increament)}
        color="Blue"
      />
      <View
        style={{
          height: 150,
          width: 150,
          backgroundColor: `rgb(${red}, ${green},${blue})`,
        }}
      ></View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default SquareScreen;
