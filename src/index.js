import axios from "axios";

// const input = [1, 2, 3, 2, 3, 5, 6, 6, 5, 7, 1];

export const uniqueInput = (input) => {
  let uniqueset = new Set(input);
  return Array.from(uniqueset);
};

export const multiplyUniqueInputbyData = (input, data) => {
  let temp = uniqueInput(input);
  return temp.map((el) => {
    return el * data;
  });
};

// throw error in the function
export const sum = (a, b) => {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error("a and b should be number");
  } else {
    return a + b;
  }
};
export const getTodoList = async (id) => {
  try {
    const data = await axios.get(
      `https://jsonplaceholder.typicode.com/todos/${id}`
    );
    // const jsonData = await data.json();
    // console.log(data.data);

    return data.data;
  } catch (err) {
    console.error(err.message);
    throw new Error("id should be number");
  }
};
console.log(uniqueInput([1, "1", 2, "2", 3, 4, 5, 5, 6, "6", 8]));

const list = getTodoList(3)
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });