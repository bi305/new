const obj1 = { text: "a text", reminder: true, date: "12/08/21" };
const obj2 = { text: "b text", reminder: false}
const newObj = { ...obj1, reminder: !obj1.reminder }

console.log(newObj);