import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ExpensesOutput from "../components/expenses/ExpensesOutput";
import { DUMMY_EXPENSES } from "../data/dummy";

export default function AllExpenses() {
  return (
    <View style={styles.container}>
      <ExpensesOutput expenses={DUMMY_EXPENSES} periodName="Total" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
