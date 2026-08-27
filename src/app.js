const express = require('express')
const noteModel = require('./models/note.model')

const app = express()

app.use(express.json())

// note => {title, description}

// create notes
app.post('/notes', async (req, res)=>{
    
    const data = req.body

    await noteModel.create({
        title: data.title,
        description: data.description
    })

    res.status(201).json({
        message: 'Note created successfully.'
    })
})

// fetch notes
app.get('/notes', async (req, res) => {

    const notes1 = await noteModel.find()
    // find returns an array od objects

    const notes2 = await noteModel.findOne({
        title: 'title 1'
    })
    // findOne returns a single object based on the provided condition

    const notes3 = await noteModel.findOne({
        title: 'title 4'
    })
    // if condition does not exist, it returns null

    // we can give condition with the find method also
    const notes4 = await noteModel.find({
        title: 'title 2'
    })
    // but if the condiitoned object is not present inside the array, it returns an empty array

    res.status(200).json({
        message: 'Notes fetched successfully',
        notes1: notes1,
        notes2: notes2,
        notes3: notes3,
        notes4: notes4
    })

})

module.exports = app

