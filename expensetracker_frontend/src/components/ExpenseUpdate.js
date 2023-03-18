import React, { useRef, useState } from 'react'
import Label from './UI/Label'
import Input from './UI/Input'
import Button from './UI/Button'
import Axios from 'axios'
import { useLocation } from 'react-router-dom'
import ExpenseList from './ExpenseList'
import { useNavigate } from 'react-router-dom'

export default function ExpenseUpdate(props) {
    const navigate = useNavigate();
    const Location = useLocation();

    const record = JSON.parse(localStorage.getItem('record'));
    const [id, setid] = useState(record._id);
    const [email, setEmail] = useState(record.email)
    const [expenseName, setName] = useState(record.expenseName);
    const [amount, setAmount] = useState(record.expenseAmount);
    const [date, setDate] = useState(record.expenseDate);

    const submitExpense = () => {
        console.log(expenseName, amount, date)

        Axios.post(`http://localhost:8080/expenseUpdate/${id}`, {
            email,
            expenseName, amount, date
        }).then(res => {
            alert(res.data.Message)
        })
        navigate('/expense')
    }

    return (
        <>
            <form className="expenseForm" >
                <div className="m-3 row">
                    <Label htmlFor="expenseName">Expense Name</Label>
                    <div className="col-sm-10">
                        <input
                            id="expenseName"
                            className='inputLabels'
                            type="text"
                            value={expenseName}
                            onChange={(e) => { setName(e.target.value) }}
                            placeholder="Food"
                            name='expenseName'
                        />
                    </div>
                </div>
                <div className="m-3 row">
                    <Label htmlFor="expenseAmount">Expense Amount</Label>
                    <div className="col-sm-10">
                        <input
                            id="expenseAmount"
                            className='inputLabels'
                            type="number"
                            value={amount}
                            onChange={(e) => { setAmount(e.target.value) }}
                            placeholder="Rs. 100"
                            name='expenseAmount'
                        />
                    </div>
                </div>
                <div className="m-3 row">
                    <Label htmlFor="expenseDate">Expense Date</Label>
                    <div className="col-sm-10">
                        <input
                            id="expenseDate"
                            className='inputLabels'
                            type='date'
                            value={date}
                            onChange={(e) => { setDate(e.target.value) }}
                            name='expenseDate'
                            placeholder="01/01/2020"
                        />
                    </div>
                </div>
                <center>
                    <Button type="submit" onClick={() => { submitExpense(id) }} className="btn-primary">
                        {props.buttonTitle}
                    </Button>
                </center>
            </form>
        </>
    )
}
