const express = require('express')
const expenseSchema = require('../Schema/expenseSchema')

const router = express.Router();

router.post('/expense', async(req, res)=>{
    const email = req.body.email;
    const name = req.body.name;
    const amount = req.body.amount;
    const date = req.body.date;

    const expenseData = new expenseSchema({
        email: email, expenseName: name, expenseAmount: amount, expenseDate: date
    })

    try {
        await expenseData.save()
        res.send({Message: 'Record Added', expenseData})
    } catch (error) {
        res.send(error) 
    }
})

router.post('/showExpenses', async(req, res)=>{
    const email = req.body.email;
    const record = await expenseSchema.find({email: email})
    
    if(record.length>0){
        res.send(record)
    }
    else 
    res.send('no')

    // console.log(record);

}
)

router.delete('/deleteExpense/:id', async(req, res)=>{
    const id = req.params.id;
    console.log(id);
    try {
        await expenseSchema.findByIdAndRemove({_id:id})
        res.send({Message: 'Record Deleted'})
    } catch (error) {
        res.send(error)
    }

    
})
   

router.post('/expenseUpdate/:id', async(req, res)=>{
    const id = req.params.id;
    const email = req.body.email
    const name= req.body.expenseName;
    const amount = req.body.amount;
    const date = req.body.date;

    console.log(id, name, amount, date);

    const updateRecord = await expenseSchema.findByIdAndUpdate(id,{
        email: email, expenseName:name, expenseAmount: amount, expenseDate: date
    }
       )
    try {
        console.log(email, name, amount, date);
        // console.log(updateRecord);
        updateRecord.save()
        // console.log('hello2');
        res.send({Message: 'Record Updated'})
        
    } catch (error) {
        console.log(error);
        res.send(error)
    }
})

module.exports = router;