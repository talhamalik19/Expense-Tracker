import "./App.css";
import React, { useState } from "react";
import ExpenseForm from "./components/ExpenseForm";
import Navbar from "./components/Navbar";
import ExpenseList from "./components/ExpenseList";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import ExpenseUpdate from "./components/ExpenseUpdate";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/Signup" element={<Signup />}></Route>
          <Route path="/Home" element={<Login />}></Route>
          <Route path="/expense" element={<><ExpenseForm buttonTitle="Add Expense" /><ExpenseList/></>}></Route>
          <Route path="/ExpenseUpdate" element={<ExpenseUpdate buttonTitle='Update Record' />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
