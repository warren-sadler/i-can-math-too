/**
 * given two integers, returns their sum
 * @param {number} x
 * @param {number} y
 * @returns number
 */
exports.add = (x, y) => {
  if (typeof x !== "number" || typeof y !== "number")
    throw new Error("Yoh, you cant do that");
  return x + y;
};
