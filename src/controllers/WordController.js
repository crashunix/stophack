const mongoose = require('mongoose');
const WordGroupController = require('./WordGroupController');

const Word = mongoose.model('Word');
const WordGroup = mongoose.model('WordGroup');

module.exports = {
    async index(req, res) {
        const words = await Word.find();

        return res.json(words);
    },
    async show(req, res) {
        const word = await Word.findById(req.params.id);

        const wordGroup = await WordGroup.findById(word.wordGroup);

        word.wordGroup = wordGroup;

        return res.json(word);
    },
    async store(req, res) {
        // Criação
        
        const word = req.body;
        word.letter = word.label.trim()[0].toLowerCase();
        await Word.create(word);

        return res.json(word);
    },
    async update(req, res) {
        //update
        const word = await Word.findByIdAndUpdate(req.params.id, req.body, { new: true }); 

        return res.json(word);
    },
    async destroy(req, res) {
        //destroy
        await Word.findByIdAndRemove(req.params.id);

        return res.send();
    },
}