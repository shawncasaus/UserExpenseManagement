import { v4 as uuidv4 } from "uuid";

// #### USER HELPERS ####
export const deleteUser = (users, userId) => {
  const updatedUsers = new Map(users);
  if (updatedUsers.has(userId)) {
    updatedUsers.delete(userId);
  } else {
    console.error(`User with userId ${userId} not found.`);
  }
  return updatedUsers;
};

export const addUser = (users, firstName, lastName) => {
  const userId = uuidv4();
  const updatedUsers = new Map(users);
  const newUser = {
    id: userId,
    firstName: firstName,
    lastName: lastName,
  };
  return { uuid: userId, updatedUsers: updatedUsers.set(userId, newUser) };
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
    return updatedUsers.set(userId, updatedUser);
  } else {
    console.error(`User with ID ${userId} does not exist.`);
  }
};

export const getUserById = (users, userId) => {
  if (users.has(userId)) {
    return users.get(userId);
  } else {
    return null;
  }
};

export const NewUserData = new Map([]);

// #### END USER HELPERS ####

// #### EXPENSE HELPERS ####
export const expenseCategories = ["Meals", "Travel", "Software"];

export const addNewUserExpense = (expenses, uuid) => {
  if (expenses.has(uuid)) {
    console.error(`Expense with userId ${uuid} already exists.`);
  } else {
    const updatedExpenses = new Map(expenses);
    return updatedExpenses.set(uuid, []);
  }
};

export const addExpense = (expenses, uuid, category, description, amount) => {
  if (expenses.has(uuid)) {
    const expenseId = uuidv4();
    const userExpenses = expenses.get(uuid);
    const updatedExpenses = new Map(expenses);
    const newExpense = {
      id: expenseId,
      category,
      description,
      amount: parseInt(amount, 10),
    };
    userExpenses.push(newExpense);
    return updatedExpenses.set(uuid, userExpenses);
  } else {
    console.error(`User with ID ${uuid} does not exist.`);
  }
};

export const editExpense = (
  expenses,
  uuid,
  expenseId,
  category,
  description,
  amount
) => {
  const updatedExpenses = new Map(expenses);
  if (expenses.has(uuid)) {
    const expensesByUuid = expenses.get(uuid);
    expensesByUuid.forEach((expense, index) => {
      if (expense.id === expenseId) {
        expensesByUuid[index] = {
          ...expense,
          ...{ category, description, amount: parseInt(amount, 10) },
        };
      }
    });
    return updatedExpenses.set(uuid, expensesByUuid);
  } else {
    console.error(
      `Expense with expenseId: ${expenseId} not updated successfully.`
    );
  }
};

export const deleteExpense = (expenses, uuid, expenseId) => {
  const updatedExpenses = new Map(expenses);
  if (updatedExpenses.has(uuid)) {
    const userExpenses = updatedExpenses.get(uuid);
    userExpenses.forEach((expense, i) => {
      if (expense.id === expenseId) {
        userExpenses.splice(i, 1);
      }
    });
    return updatedExpenses.set(uuid, userExpenses);
  } else {
    console.error(`Expense with expenseId: ${expenseId} not found.`);
  }
  return updatedExpenses;
};

export const getExpensesById = (expenses, uuid) => {
  if (expenses.has(uuid)) {
    return expenses.get(uuid);
  } else {
    return [];
  }
};

export const getExpensesTotalById = (expenses, uuid) => {
  if (expenses.has(uuid)) {
    const expensesByUuid = expenses.get(uuid);
    let total = 0;
    expensesByUuid.forEach((expense) => {
      total += expense.amount;
    });
    return total;
  } else {
    return 0;
  }
};

export const getExpenseById = (expenses, uuid, expenseId) => {
  if (expenses.has(uuid)) {
    const expensesByUuid = expenses.get(uuid);
    const expenseToReturn = expensesByUuid.find(
      (expense) => expense.id === expenseId
    );
    return expenseToReturn;
  } else {
    return [];
  }
};

export const NewExpenseData = new Map([]);

// #### END EXPENSE HELPERS ####

// #### COST HELPERS ####
export const NewCostData = new Map([]);

export const GetCosts = (expenses) => {
  const newCostsData = new Map([]);
  expenseCategories.forEach((category) => {
    newCostsData.set(category, 0);
  });
  for (const [, user] of expenses.entries()) {
    user.forEach((expense) => {
      let expenseByCategory = newCostsData.get(expense.category);
      expenseByCategory += expense.amount;
      newCostsData.set(expense.category, expenseByCategory);
    });
  }
  return newCostsData;
};

// #### END COST HELPERS ####

export const createData = (name, calories, fat, carbs, protein) => {
  return { name, calories, fat, carbs, protein };
};
