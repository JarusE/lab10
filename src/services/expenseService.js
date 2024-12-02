import { collection, getDocs, addDoc } from "firebase/firestore";
import db from "../firebase";

const expensesCollection = collection(db, "expenses");

export const getExpenses = async () => {
  const snapshot = await getDocs(expensesCollection);
  return snapshot.docs.map((doc) => {
    const data = doc.data();
    return {
      id: doc.id,
      ...data,
      date: data.date.toDate(), 
    };
  });
};

export const addExpense = async (expense) => {
  return await addDoc(expensesCollection, expense);
};
