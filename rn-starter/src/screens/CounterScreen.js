import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  Button,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";

const CounterScreen = () => {
  const [counter, setCounter] = useState(0);
  //dönen verinin başlangıç değeri ne ? 0. useState(0) yazarak başlangıç değerini sıfır atarız.
  //veri güncellendiğinde react native verinin güncellendiğini anlayıp kaydedebilsin diye usestate kullanılır.
  // let count=0, console.log(count) dendiğinde consolda değer artışını gösterir ama günmcelleme vs yaparak dinamik halde sayfada gösteremez.
  return (
    <SafeAreaView>
      <View>
        <Button
          title="Increase"
          onPress={() => {
            setCounter(counter + 1);
            //counter++; dendiğinde console da değer artışlarını oluşturur. sayfada veri güncelleme yapmaz.
          }}
        />
        <Button
          title="Decrease"
          onPress={() => {
            setCounter(counter - 1);
          }}
        />
        <Text>current counter:{counter}</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default CounterScreen;
