const express = require('express')
const multer = require('multer')
const postModel = require('./models/post.model')
const uploadFile = require('./services/storage.service')
const cors = require("cors")

const app = express()
app.use(cors())
app.use(express.json())

// we use multer middleware to read the form-data or any data unlike the raw json-format/ text data
const upload = multer({storage: multer.memoryStorage()})

// create post
app.post('/create-post', upload.single("image"), async (req, res) => {

    const result = await uploadFile(req.file.buffer)
    const post = await postModel.create({
        image: result.url,
        caption: req.body.caption
    })

    return res.status(201).json({
        message: "Post created successfully.",
        post
    })
})

// get post
app.get("/posts", async (req, res) => {
    const posts = await postModel.find()
    return res.status(200).json({
        message: "Notes fetched successfully",
        posts
    })
})

module.exports = app