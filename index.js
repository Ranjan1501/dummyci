export const sum = (a, b) => {
    if (typeof a !== "number" || typeof b !== "number") {
      throw new Error("a and b should be number");
    } else {
      return a + b;
    }
  };

