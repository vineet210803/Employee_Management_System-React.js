import React, { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { AuthContext } from "./context/AuthProvider";
import { getLocalStorage, setLocalStorage } from "./utils/localStorage";

const App = () => {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);
  const AuthData = useContext(AuthContext);

  // ✅ Initialize storage on first load
  useEffect(() => {
    setLocalStorage();
  }, []);

  // ✅ Restore user session if exists
  useEffect(() => {
    const userLogIn = localStorage.getItem("userLogInHai");
    if (userLogIn) {
      const parsedUser = JSON.parse(userLogIn);
      setUser(parsedUser.role);
      setLoggedInUserData(
        parsedUser.role === "employee"
          ? parsedUser.employee
          : parsedUser.admin
      );
    }
  }, [AuthData]);

  // ✅ Login handler
  const handleLogin = (email, password) => {
    if (!AuthData) return;

    const admin = AuthData.adminData.find(
      (e) => e.email === email && e.password === password
    );
    const employee = AuthData.employeesData.find(
      (e) => e.email === email && e.password === password
    );

    if (admin) {
      setUser("admin");
      setLoggedInUserData(admin);
      localStorage.setItem(
        "userLogInHai",
        JSON.stringify({ role: "admin", admin })
      );
    } else if (employee) {
      setUser("employee");
      setLoggedInUserData(employee);
      localStorage.setItem(
        "userLogInHai",
        JSON.stringify({ role: "employee", employee })
      );
    } else {
      alert("Invalid user credentials!");
    }
  };

  // ✅ Task update function
  const updateTask = (index, updatedTask) => {
    const updatedEmployee = { ...loggedInUserData };
    updatedEmployee.tasks[index] = updatedTask;

    const counts = { active: 0, newTask: 0, completed: 0, failed: 0 };
    updatedEmployee.tasks.forEach((task) => {
      if (task.active) counts.active++;
      if (task.newTask) counts.newTask++;
      if (task.completed) counts.completed++;
      if (task.failed) counts.failed++;
    });
    updatedEmployee.taskCounts = counts;

    setLoggedInUserData(updatedEmployee);

    const { employeesData } = getLocalStorage();
    const updatedEmployees = employeesData.map((emp) =>
      emp.email === updatedEmployee.email ? updatedEmployee : emp
    );
    localStorage.setItem("employeesData", JSON.stringify(updatedEmployees));
    localStorage.setItem(
      "userLogInHai",
      JSON.stringify({ role: "employee", employee: updatedEmployee })
    );
  };

  return (
    <>
      {user === null && <Login handleLogin={handleLogin} />}
      {user === "admin" && (
        <AdminDashboard data={loggedInUserData} changeUser={setUser} />
      )}
      {user === "employee" && (
        <EmployeeDashboard
          data={loggedInUserData}
          changeUser={setUser}
          updateTask={updateTask}
        />
      )}
    </>
  );
};

export default App;
