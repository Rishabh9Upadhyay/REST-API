const express = require("express")
const app = express()
require('./db/conn')
const prcCol = require('./models/prc')
const port = process.env.PORT || 3000

app.use(express.json())

app.post("/practice",async (req,res)=>{
    try{
        console.log(req.body)
        const data = new prcCol(req.body);
        const result = await data.save();
        res.send(result)
    }catch(e){
        res.status(404).send(e)
    }
})
app.get("/practice",async (req,res)=>{
    try{
        const data = await prcCol.find();
        res.send(data)
    }catch(e){
        res.status(404).send(e)
    }
})
// app.get('/practice/:name',async(req,res)=>{
//     try {
//         const name = req.params.name;
//         const data = await prcCol.find({name})
//         res.send(data)
//     }catch(e){
//         res.status(500).send(e)
//     }
// })
app.get('/practice/:id',async(req,res)=>{
    try {
        const _id = req.params.id;
        const data = await prcCol.findById({_id})
        res.send(data)
    }catch(e){
        res.status(500).send(e)
    }
})

app.patch("/practice/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const data = await prcCol.findByIdAndUpdate(_id, req.body, {
            new: true
        });
        res.send(data);
    } catch (e) {
        res.status(500).send(e);
    }
});
app.delete("/practice/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const data = await prcCol.findByIdAndDelete({_id});
        res.send(data);
    } catch (e) {
        res.status(500).send(e);
    }
});

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})