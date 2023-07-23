const express = require('express')
const cors = require('cors')
const app = express()
const mongoose=require('mongoose')
app.use(express.json())
app.use(cors())
const PORT = 8080
app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}...`)
})
//connect
mongoose.connect("mongodb://0.0.0.0:27017/students", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    
}).then(() => {
    console.log('Database connected..')
})  

//add
const Idcard = require('./idcard')

app.post('/add-idcards', async(req,res) => {
    const idcard = new Idcard(req.body)
    try{
        await idcard.save()
        res.status(201).json({
            status: 'Success',
            data : {
                idcard
            }
        })
    }catch(err){
        res.status(500).json({
            status: 'Failed',
            message : err
        })
    }
})

//
app.get('/get-idcard', async (req,res) => {
    const idcard = await Idcard.find({})
    try{
        res.status(200).json({
            status : 'Success',
            data : {
                idcard
            }
        })
    }catch(err){
        res.status(500).json({
            status: 'Failed',
            message : err
        })
    }
})

// //up
// app.patch('/update-idcard/:id', async (req,res) => {
//     const idcard = await Idcard.findByIdAndUpdate(req.params.id,req.body,{
//         new : true,
//         runValidators : true
//       })
//     try{
//         res.status(200).json({
//             status : 'Success',
//             data : {
//               idcard
//             }
//           })
//     }catch(err){
//         console.log(err)
//     }
// })
// //del
// //delkl
// app.delete('/delete-phone/:id', async(req,res) => {
//     await Idcard.findByIdAndDelete(req.params.id)
    
//     try{
//       res.status(204).json({
//           status : 'Success',
//           data : {}
//       })
//     }catch(err){
//         res.status(500).json({
//             status: 'Failed',
//             message : err
//         })
//     }
// })