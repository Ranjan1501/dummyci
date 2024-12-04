import {
    sum,
    uniqueInput,
    getTodoList,
    multiplyUniqueInputbyData
  } from "../src/index";

  jest.mock("axios");
import axios from "axios";

describe("tetsing function", () => {
  test("making input unique", () => {
    // add assestion
    expect(uniqueInput([1, 2, 3, 2, 3, 5, 6, 6, 5, 7, 1])).toEqual([
      1, 2, 3, 5, 6, 7,
    ]);
  });

  // toEqual is used for the data type array and object whereas toBe is used for checking e sort of strict equality or extact equality comparison in number string
  // toMatch:  to match regex in the function result

  test("making unique with passing string data", () => {
    expect(uniqueInput([1, "1", 2, "2", 3, 4, 5, 5, 6, "6", 8])).toEqual([
      1,
      "1",
      2,
      "2",
      3,
      4,
      5,
      6,
      "6",
      8,
    ]);
  });

  test("make unique input and multiply by data", () => {
    expect(
      multiplyUniqueInputbyData([1, 2, 3, 2, 3, 5, 6, 6, 5, 7, 1], 2)
    ).toEqual([2, 4, 6, 10, 12, 14]);
  });

  test("sum of two numbers", () => {
    expect(sum(1, 2)).toBe(3);
  });

  // throw error within the test wrap test scenerio within skip method test.skip method
  // if you wnat to skip the test
  test("sum of two strings throws error", () => {
    // here sum should be passed in the function as callback
    expect(() => sum("1", "2")).toThrow("a and b should be number");
    // test will fail if throw any random error instead of the expected error
  });
});

describe("GET /todos/:id", () => {
  it("mocking axios api  call fetch TodoList", async () => {
    // add assestion
    let userData = {
      userId: 1,
      id: 2,
      title: "fugiat veniam minus",
      completed: false,
    };
    // axios.get = jest.fn(() => userData);
    // axios.get("https://jsonplaceholder.typicode.com/todos/2");
    // // getTodoList(2);
    // //passes
    // expect(axios.get).toHaveReturnedWith(userData);
    
    // mock with actual fn call. 
    axios.get.mockResolvedValue({ data: userData });
    const response = await getTodoList(2);
    expect(response).toEqual(userData);
  });
});