import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ExpensesOutput from "../components/expenses/ExpensesOutput";
import { DUMMY_EXPENSES } from "../data/dummy";

export default function RecentExpenses() {
  return (
    <View>
      <ExpensesOutput expenses={DUMMY_EXPENSES} periodName="Last 7 Days" />
    </View>
  );
}

const styles = StyleSheet.create({});
