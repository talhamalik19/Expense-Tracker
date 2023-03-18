import React, { useState, useEffect, useRef } from "react";
import ExpenseItem from "./ExpenseItem";
import Axios from 'axios'
import { useNavigate } from "react-router-dom";

export default function ExpenseList(props) {
  const navigate = useNavigate();

  const onChangeItem = (props) => {
    props.onChangeItem()
  }

  const [expense, setExpense] = useState([]);

  const record = JSON.parse(localStorage.getItem('user'));
  const email = record.email;
  console.log(email)

  useEffect(() => {
    Axios.post('http://localhost:8080/showExpenses', { email }
    ).then(res => {
        setExpense(res.data)
      })
  }, [])


  const deleteExpense = (id) => {
    Axios.delete(`http://localhost:8080/deleteExpense/${id}`, console.log(id)).then(
      res => {
        alert(res.data.Message)
      }
    )
  }

  // const updateRecord = (id) => {
  //   console.log(id);

  //   const fetchRecord = JSON.parse(localStorage.getItem('record'))
  //   const expenseId = fetchRecord._id;
  //   const expenseName = fetchRecord.expenseName;
  //   const expenseAmount = fetchRecord.expenseAmount;
  //   const expenseDate = fetchRecord.expenseDate;
  //   console.log(expenseId, expenseName, expenseAmount, expenseDate);
  // }
  console.log(expense)

  return (

    <>
      <div className="container-fluid">
        <center>
          <h1>Expenses</h1>
        </center>
        <div className="d-flex flex-wrap justify-content-center mb-2">
          {
          
          expense.map((expense) => (
            <ExpenseItem
            text={expense.name}
              id={expense._id}
              name={expense.expenseName}
              amount={expense.expenseAmount}
              date={expense.expenseDate}
              onChangeItem={onChangeItem}
              onDelete={() => { deleteExpense(expense._id) }}
              onUpdate={() => { localStorage.setItem('record', JSON.stringify(expense)); navigate('/ExpenseUpdate') }}
              buttonTitle={'Update Record'}
            />
          ))}
        </div>
      </div>
    </>
  );

}