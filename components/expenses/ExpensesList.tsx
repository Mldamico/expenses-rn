import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Expense } from "../../interfaces/expenses";
import ExpenseItem from "./ExpenseItem";

interface Props {
  expenses: Expense[];
}

function renderExpenseItem({ item }: { item: Expense }) {
  return <ExpenseItem {...item} />;
}

const ExpensesList = ({ expenses }: Props) => {
  return (
    <FlatList
      data={expenses}
      keyExtractor={(item) => item.id}
      renderItem={renderExpenseItem}
    />
  );
};

export default ExpensesList;

const styles = StyleSheet.create({});
