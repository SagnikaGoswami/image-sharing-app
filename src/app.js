// server ko create karna

const express = require('express');

const app = express();
app.use(express.json());

// the notes variable is saved inside the RAM,that is why whenever a server is stopped, the data stored inside this array also gets erased
// This is the reason we require a specified database to store and manage our data

notes = [];

// create notes
app.post('/notes', (req, res)=>{
    console.log(req.body);
    notes.push(req.body);
    res.status(201).json({
        message: "Note created successfully"
    })
})

// display notes
app.get('/notes', (req, res)=>{
    res.status(200).json({
        message: "Notes fetched successfully",
        notes: notes
    })
})

// delete notes
app.delete('/notes/:index', (req, res) => {
    const index = req.params.index;
    console.log(index);
    delete notes[index];
    res.status(200).json({
        message: "Note deleted successfully"
    })
})

// patch method => to update the data that is stored inside the server
app.patch('/notes/:index', (req, res) => {
    const description = req.body.description
    notes[req.params.index].description = description
    res.status(200).json({
        message: 'Note updated successfully'
    })
})

module.exports = app;