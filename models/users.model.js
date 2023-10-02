const { v4: uuidv4 } = require('uuid');
const users = [
  {
    id: uuidv4(),
    name: "John",
    email: "john@example.com",
  },

  {
    id: uuidv4(),

    name: "Helena",
    email: "helena@example.com",
  },
  {
    id: uuidv4(),

    name: "Devid",
    email: "devid@example.com",
  },
  {
    id: uuidv4(),

    name: "Morris",
    email: "morris@example.com",
  },
];

module.exports = users;
