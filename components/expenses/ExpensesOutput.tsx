import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";
import { Expense } from "../../interfaces/expenses";

interface Props {
  expenses: Expense[];
  periodName: string;
}

export default function ExpensesOutput({ expenses, periodName }: Props) {
  return (
    <View>
      <ExpensesSummary expenses={expenses} periodName={periodName} />
      <ExpensesList expenses={expenses} />
    </View>
  );
}

const styles = StyleSheet.create({});
