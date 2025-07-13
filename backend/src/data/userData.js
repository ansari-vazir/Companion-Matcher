const users = [{name: 'Vazir', age: 23, interests: ['coding', 'reading', 'cooking', 'singing', 'exploring', 'gaming']},
  {name: 'Wasim', age: 22, interests: ['cooking', 'traveling','coding', 'music']},
  {name: 'Luv', age: 21, interests: ['exploring', 'reading', 'gaming']},
];

function addNewUser(user) {
  if (users.some(u => u.name.toLowerCase() !== user.name.toLowerCase() || u.age !== user.age)) {
    users.push(user);
  }
}

function getUserByName(name) {
  return users.find(u => u.name.toLowerCase() === name.toLowerCase());
}

function getAllUsers() {
  return users;
}

module.exports = { users, addNewUser, getUserByName, getAllUsers };
