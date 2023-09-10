const User = require('../../models/user');
const Poem = require('../../models/poem');

module.exports = {
    create,
    index,
    delete: deletePoem,
    edit
};

async function create(req, res) {
    try {
        const newPoem = {
            title: req.body.newTitle,
            text: req.body.newPoem,
            genre: req.body.newGenre,
            user: req.user._id
        };
        const poem = await Poem.create(newPoem);
        res.json(poem);
    }   catch (err) {
        res.status(400).json(err);
    }
}

async function index(req, res) {
    try {
        const poems = await Poem.find({});
        res.json(poems);
    }   catch (err) {
        res.status(400).json(err);
    }
}

async function deletePoem(req, res) {
    try {
        const poem = await Poem.findOneAndDelete({_id: req.params.id});
        res.json(poem);
    }   catch (err) {
        res.status(400).json(err);
    }
}

async function edit(req, res) {
    try {
        const poem = await Poem.findOneAndUpdate({ _id: req.params.id }, req.body , { new: true });
        res.json(poem);
    }   catch (err) {
        res.status(400).json(err);
    }
}