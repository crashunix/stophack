const mongoose = require('mongoose');

const WordGroup = mongoose.model('WordGroup');
const Word = mongoose.model('Word');

module.exports = {
    async index(req, res) {
        const wordGroups = await WordGroup.find().populate('words');

        return res.json(wordGroups);
    },
    async show(req, res) {
        const wordGroup = await WordGroup.findById(req.params.id);

        return res.json(wordGroup);
    },
    async store(req, res) {
        // Criação
        const wordGroup = await WordGroup.create(req.body);

        return res.json(wordGroup);
    },
    async update(req, res) {
        //update
        const wordGroup = await WordGroup.findByIdAndUpdate(req.params.id, req.body, { new: true }); 

        return res.json(wordGroup);
    },
    async destroy(req, res) {
        //destroy
        await WordGroup.findByIdAndRemove(req.params.id);

        return res.send();
    },
}