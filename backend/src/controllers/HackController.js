const mongoose = require('mongoose');

const Word = mongoose.model('Word');
const WordGroup = mongoose.model('WordGroup');

module.exports = {
    async batota(req, res) {
        const words = await Word.find({
            'wordGroup': { $in: req.body.wordGroups},
            'letter': req.body.letter
        }).populate('wordGroup');

        console.log('success');

        return res.json(words);
    }
}