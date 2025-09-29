const employeesData = [
  {
    id: 1,
    firstName: "Arjun",
    email: "arjun@e.com",
    password: "123",
    taskCounts: {
      active: 0,
      newTask: 0,
      completed: 0,
      failed: 0,
    },
    tasks: [],
  },
  {
    id: 2,
    firstName: "Sneha",
    email: "sneha@e.com",
    password: "123",
    taskCounts: {
      active: 0,
      newTask: 0,
      completed: 0,
      failed: 0,
    },
    tasks: [],
  },
  {
    id: 3,
    firstName: "Ravi",
    email: "ravi@e.com",
    password: "123",
    taskCounts: {
      active: 0,
      newTask: 0,
      completed: 0,
      failed: 0,
    },
    tasks: [],
  },
  {
    id: 4,
    firstName: "Karan",
    email: "karan@e.com",
    password: "123",
    taskCounts: {
      active: 0,
      newTask: 0,
      completed: 0,
      failed: 0,
    },
    tasks: [],
  },
  {
    id: 5,
    firstName: "John",
    email: "john@e.com",
    password: "123",
    taskCounts: {
      active: 0,
      newTask: 0,
      completed: 0,
      failed: 0,
    },
    tasks: [],
  },
  {
    id: 6,
    firstName: "Priya",
    email: "priya@e.com",
    password: "123",
    taskCounts: {
      active: 0,
      newTask: 0,
      completed: 0,
      failed: 0,
    },
    tasks: [],
  },
  {
    id: 7,
    firstName: "Ankit",
    email: "ankit@e.com",
    password: "123",
    taskCounts: {
      active: 0,
      newTask: 0,
      completed: 0,
      failed: 0,
    },
    tasks: [],
  },
  {
    id: 8,
    firstName: "Neha",
    email: "neha@e.com",
    password: "123",
    taskCounts: {
      active: 0,
      newTask: 0,
      completed: 0,
      failed: 0,
    },
    tasks: [],
  },
  {
    id: 9,
    firstName: "Amit",
    email: "amit@e.com",
    password: "123",
    taskCounts: {
      active: 0,
      newTask: 0,
      completed: 0,
      failed: 0,
    },
    tasks: [],
  },
  {
    id: 10,
    firstName: "Isha",
    email: "isha@e.com",
    password: "123",
    taskCounts: {
      active: 0,
      newTask: 0,
      completed: 0,
      failed: 0,
    },
    tasks: [],
  },
];


const adminData = [
  {
    id: 1,
    firstName: "Vineet",
    email: "admin@me.com",
    password: "123",
  },
];

export const setLocalStorage = () => {
  if (!localStorage.getItem("employeesData")) {
    localStorage.setItem("employeesData", JSON.stringify(employeesData));
  }
  if (!localStorage.getItem("adminData")) {
    localStorage.setItem("adminData", JSON.stringify(adminData));
  }
};

export const getLocalStorage = () => {
  const employeesData = JSON.parse(localStorage.getItem("employeesData")) || [];
  const adminData = JSON.parse(localStorage.getItem("adminData")) || [];
  return { employeesData, adminData };
};
