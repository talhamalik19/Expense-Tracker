import React, { useRef } from "react";
import Button from "./UI/Button";
import Input from "./UI/Input";
import Label from "./UI/Label";
import Axios from 'axios'
import ExpenseList from './ExpenseList'
import { useLocation } from "react-router-dom";

export default function ExpenseForm(props) {

  const Location = useLocation();

  const nameInputRef = useRef();
  const amountInputRef = useRef();
  const dateInputRef = useRef();

  const resetForm = () => {
    nameInputRef.current.value = "";
    amountInputRef.current.value = "";
    dateInputRef.current.value = "";
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    console.log("Form submitted");

    const name = nameInputRef.current.value;
    console.log(name);
    const amount = amountInputRef.current.value;
    const date = dateInputRef.current.value;

    if (name === "" || amount === "" || date === "") {
      alert("Please fill all the fields");
    }

    else {
      console.log('hellow from inside')
      const name = nameInputRef.current.value;
      console.log(name);
      const amount = amountInputRef.current.value;
      const date = dateInputRef.current.value;

      const record = JSON.parse(localStorage.getItem('user'));
      const email = record.email;
      console.log(email)

      Axios.post('http://localhost:8080/expense', {
        email, name, amount, date
      }
      ).then(res => {
        alert(res.data.Message)
      })
    }
  };

  return (

    <form className="expenseForm" onSubmit={formSubmitHandler}>
      <div className="m-3 row">
        <Label htmlFor="expenseName">Expense Name</Label>
        <div className="col-sm-10">
          <Input
            id="expenseName"
            className='inputLabels'
            type="text"
            value=''
            placeholder="Food"
            name='expenseName'
            innerRef={nameInputRef}

          />
        </div>
      </div>
      <div className="m-3 row">
        <Label htmlFor="expenseAmount">Expense Amount</Label>
        <div className="col-sm-10">
          <Input
            id="expenseAmount"
            className='inputLabels'
            type="number"
            value=''
            placeholder="Rs. 100"
            name='expenseAmount'
            innerRef={amountInputRef}

          />
        </div>
      </div>
      <div className="m-3 row">
        <Label htmlFor="expenseDate">Expense Date</Label>
        <div className="col-sm-10">
          <Input
            id="expenseDate"
            className='inputLabels'
            type="date"
            value=''
            name='expenseDate'
            placeholder="01/01/2020"
            innerRef={dateInputRef}
          />
        </div>
      </div>
      <center>
        <Button type="submit" className="btn-primary">
          {props.buttonTitle}
        </Button>
      </center>
    </form>
  );
}
