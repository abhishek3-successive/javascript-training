// 5. Write a program flattenObject that takes an object with nested properties and returns a flat object with the nested properties transformed into dot-separated properties. The function should handle nested objects and arrays.
// const obj = {
//    a: 1,
//    b: { c: 2, d: [3, 4] }
// };
// Output: { 'a': 1, 'b.c': 2, 'b.d.0': 3, 'b.d.1': 4 }

 const obj = {
  a: 1,
  b: {
    c: true,
    d: {
      e: {
        f: [1, { g: 2, h: [3, 4, { i: 5 }] }]
      },
      j: [
        { k: 6 },
        7,
        [8, 9]
      ]
    }
  },
  m: [
    { n: { o: 10 } },
    11
  ]
};
function flattenObject(obj, pre = "", result = {}) {
  for (let key in obj) {
    const newKey = pre ? `${pre}.${key}` : key;
    if (typeof obj[key] == "object" && obj[key] !== null) {
      flattenObject(obj[key], newKey, result);
    } else {
      result[newKey] = obj[key];
    }
  }

  return result;
}

let result = {};

console.log(flattenObject(obj));