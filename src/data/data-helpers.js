import { v4 as uuidv4 } from "uuid";

export const expenseCategories = ["Meals", "Travel", "Software"];

function generateNewUserdata(firstName, lastName) {
  const userId = uuidv4();
  return [
    userId,
    {
      id: userId,
      firstName: firstName,
      lastName: lastName,
      expenses: [],
    },
  ];
}

// Function to add an expense
export const addExpense = (expenses, uuid, category, description, amount) => {
  const updatedExpenses = new Map(expenses);
  const newExpense = {
    id: uuid,
    category,
    description,
    amount,
  };
  alert(`Expense with userId ${uuid} added successfully.`);
  return updatedExpenses.set(uuid, newExpense);
};

// Function to delete a user by userId
export const deleteUser = (users, userId) => {
  const updatedUsers = new Map(users);
  if (updatedUsers.has(userId)) {
    updatedUsers.delete(userId);
    alert(`User with userId ${userId} deleted successfully.`);
  } else {
    alert(`User with userId ${userId} not found.`);
  }
  return updatedUsers;
};

export const deleteExpense = (expenses, expenseId) => {
  const updatedExpenses = new Map(expenses);
  if (updatedExpenses.has(expenseId)) {
    updatedExpenses.delete(expenseId);
    alert(`User with userId ${expenseId} deleted successfully.`);
  } else {
    alert(`User with userId ${expenseId} not found.`);
  }
  return updatedExpenses;
};

// Function to add a user
export const addUser = (users, firstName, lastName) => {
  const userId = uuidv4();
  const updatedUsers = new Map(users);
  const newUser = {
    id: userId,
    firstName: firstName,
    lastName: lastName,
    expenses: [],
  };
  alert(`User with userId ${userId} added successfully.`);
  return updatedUsers.set(userId, newUser);
};

export const editUser = (users, userId, updatedFirstName, updatedLastName) => {
  if (users.has(userId)) {
    const existingUser = users.get(userId);
    const updatedUser = {
      ...existingUser,
      firstName: updatedFirstName,
      lastName: updatedLastName,
    };
    const updatedUsers = new Map(users);
    alert(`User with userId ${userId} updated successfully.`);
    return updatedUsers.set(userId, updatedUser);
  } else {
    alert(`User with ID ${userId} does not exist.`);
  }
};

export const editExpense = (
  expenses,
  expenseId,
  updatedCategory,
  updatedDescription,
  updatedAmount
) => {
  if (expenses.has(expenseId)) {
    const existingExpense = expenses.get(expenseId);
    const updatedExpense = {
      ...existingExpense,
      category: updatedCategory,
      description: updatedDescription,
      amount: updatedAmount,
    };
    const updatedExpenses = new Map(expenses);
    alert(`Expense with expenseId ${expenseId} updated successfully.`);
    return updatedExpenses.set(expenseId, updatedExpense);
  } else {
    alert(`User with ID ${expenseId} does not exist.`);
  }
};

export const getUserById = (users, userId) => {
  if (users.has(userId)) {
    return users.get(userId);
  } else {
    return null;
  }
};

export const getExpenseById = (expenses, userId) => {
  if (expenses.has(userId)) {
    return expenses.get(userId);
  } else {
    return null;
  }
};

export const NewUserData = new Map([
  generateNewUserdata("Jack", "Doe"),
  generateNewUserdata("Joe", "Doe"),
  generateNewUserdata("Jane", "Doe"),
  generateNewUserdata("Jill", "Doe"),
  generateNewUserdata("Joy", "Doe"),
]);

export const NewExpenseData = new Map([]);
export const NewCostData = new Map([]);

export const createData = (name, calories, fat, carbs, protein) => {
  return { name, calories, fat, carbs, protein };
};
