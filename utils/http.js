import axios from "axios";

const BASE_URL = "https://expense-tracker-c0f91-default-rtdb.firebaseio.com";

export const storeExpense = async (expenseData) => {
  const response = await axios.post(`${BASE_URL}/expenses.json`, expenseData);
  return response.data.name;
};

export const fetchExpenses = async () => {
  const response = await axios.get(`${BASE_URL}/expenses.json`);
  const expenses = [];

  for (const key in response.data) {
    const expenseObj = {
      id: key,
      amount: response.data[key].amount,
      date: new Date(response.data[key].date),
      description: response.data[key].description,
    };
    expenses.push(expenseObj);
  }

  return expenses;
};

export const updateExpense = (id, updatedExpense) => {
  return axios.put(`${BASE_URL}/expenses/${id}.json`, updatedExpense);
};

export const deleteExpense = (id) => {
  return axios.delete(`${BASE_URL}/expenses/${id}.json`);
};
