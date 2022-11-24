import React, { useReducer } from "react";
import ColorCounter from "../components/ColorCounter";
import { Text, StyleSheet, View, SafeAreaView } from "react-native";
const Color_Increament = 15;
const reducer = (state, action) => {
  switch (action.colorToChange) {
    case "red":
      return { ...state, red: state.red + action.amount };

    case "green":
      return { ...state, green: state.green + action.amount };

    case "blue":
      return { ...state, blue: state.blue + action.amount };

    default:
      return state;
  }
};
const SquareScreen = () => {
  const [state, runMyReducer] = useReducer(reducer, {
    red: 0,
    green: 0,
    blue: 0,
  });
  const { red, green, blue } = state;

  return (
    <SafeAreaView>
      <ColorCounter
        onIncrease={() =>
          runMyReducer({ colorToChange: "red", amount: Color_Increament })
        }
        onDecrease={() =>
          runMyReducer({ colorToChange: "red", amount: -1 * Color_Increament })
        }
        color="Red"
      />
      <ColorCounter
        onIncrease={() =>
          runMyReducer({ colorToChange: "Green", amount: Color_Increament })
        }
        onDecrease={() =>
          runMyReducer({
            colorToChange: "Green",
            amount: -1 * Color_Increament,
          })
        }
        color="Green"
      />
      <ColorCounter
        onIncrease={() =>
          runMyReducer({ colorToChange: "Blue", amount: Color_Increament })
        }
        onDecrease={() =>
          runMyReducer({ colorToChange: "Blue", amount: -1 * Color_Increament })
        }
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
