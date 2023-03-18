const express = require('express')
const user = require('../Schema/userSchema.js')

const router = express.Router();

// try {
//     router.post("/Signup", async (req, res) => {
//         // console.log('hello');
//         const name = req.body.name;
//         const email = req.body.email;
//         const password = req.body.password;

//         const preuser = await user.findOne({ email: email })

//         if (!preuser) {
//             const adUser = new user({
//                 name: name, email: email, password: password
//             })
//             await adUser.save();
//             res.send({ Message: 'Signup Successful' })
//         }

//         else {
//             res.send({ Message: "Username already Exist" })
//         }
//     })

// } catch (error) {
//     res.send(error)
// }

try {
    router.post('/Signup', async(req, res)=>{
        const name = req.body.name
        const email = req.body.email
        const password = req.body.password

        const userDetail =new user({
            name: name, email: email, password: password
        })
       await userDetail.save();
        res.send({Message:'User registered' })
    })
} catch (error) {
    res.send(error)
}

try {
    router.post("/Login", async (req, res) => {

        const email = req.body.email;
        const password = req.body.password;

        const preuser = await user.findOne({ email: email, password: password })

        if (preuser) {

            res.send({ status: 201, preuser })
            console.log('hello login');
        }
        else
            res.send({ status: 404 })
    }
    )
}
catch (error) {
    res.send(error)
}

router.post('/expenses', async (req, res) => {
    console.log('helloooooooo')
    const name = req.body.name;
    const amount = req.body.amount;
    const date = req.body.date;
    console.log('hellloooowww')

    const expenses = new user({
        expenseName: name, expenseAmount: amount, expenseDate: date
    })
    console.log('333')

    try {
        await expenses.save();
        console.log('44444');
        res.send({ Message: 'Expense Added' })
    } catch (error) {
        res.send(error)
    }
})
module.exports = router;