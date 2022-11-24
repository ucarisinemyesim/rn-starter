import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  Button,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
} from "react-native";

const ColorChangeScreen = () => {
  const [color, setColor] = useState([]);
  //color değişken olurken setColor fonksiyon oluyor.
  //dönecek olan veri rgb(244,46,78) gibi bir string bu sebeple defoult değeri boş string
  //console.log(color); yazarak color arrayi içindeki değerler okunabilir. return kısmına yazılırsa değer okunmaz.

  //flatlist yerine viewda kullanılabilir
  // <View
  //   style={{ height: 100, width: 100, backgroundColor: randomRgb() }}
  // />
  return (
    <SafeAreaView>
      <View>
        <Button
          title="Change color"
          onPress={() => {
            setColor([...color, randomRgb()]);
            //...color => color arrayine bak,içindeki tüm elementleri al ve onları [...color, randomRgb()] ile belirtilen "[]"
            //parantezlerden oluşan yeni arrayin içine koy. burada color başlangıçta boş ve array değerleri randomRgb den geliyor.
            //arrayde var olan eski verilere randomRgb denn gelen yeni array değerleri eklenir.
          }}
        />

        <FlatList
          keyExtractor={(item) => item}
          data={color}
          renderItem={({ item }) => {
            return (
              <View
                style={{
                  height: 100,
                  width: 100,
                  backgroundColor: item,
                }}
              ></View>
            );
          }}
        ></FlatList>
      </View>
    </SafeAreaView>
  );
};
const randomRgb = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  return `rgb(${red},${green},${blue})`;
};
const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default ColorChangeScreen;
