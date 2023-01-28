import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function ManageExpenses() {
  return (
    <View style={styles.container}>
      <Text>ManageExpenses</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
