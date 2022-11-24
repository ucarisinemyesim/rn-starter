import React from "react";
import {
  Text,
  StyleSheet,
  View,
  Button,
  TouchableOpacity,
  Image,
} from "react-native";

const ColorCounter = ({ color, onIncrease, onDecrease }) => {
  // React'teki bilgiler bileşenlere iki farklı şekilde aktarılır.
  //Birincisi, bilgi Parenttan childa prop olarak geçebilir.
  // Bir alt bileşen(Child), bilgileri ebeveynine nasıl geri alır? Çocuğa propların aktarılması da bu sürecin bir parçasıdır,
  //ancak aktarılanlar biraz farklıdır.

  // State in bir parçasını bir alt bileşene (child component) aktarmak yerine, parent bir callback (geri çağırma) işlevini aktarabilir.
  // burada callback onIncrease ve onDecrease fonksiyonlarıdır.
  //Bu callback işlevi, daha sonra, genellikle alt bileşenle bazı etkileşimler aracılığıyla çalıştırılır.
  //Bu callback işlevinin amacı, üst bileşenin bir parçası olan statein bir parçasını değiştirmektir.

  return (
    <View>
      <Text style={styles.text}>{color}</Text>
      <Button onPress={() => onIncrease()} title={`Increase ${color}`} />
      <Button onPress={() => onDecrease()} title={`Decrease ${color}`} />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
  },
});

export default ColorCounter;
