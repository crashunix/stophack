const mongoose = require('mongoose');

const Word = mongoose.model('Word');
const WordGroup = mongoose.model('WordGroup');

module.exports = {
    async batatao(req, res) {
        const words = await Word.find({
            'wordGroup': { $in: req.body.wordGroups},
            'letter': req.body.letter
        });

        words.map((word, index) => {
            const wordGroup = WordGroup.findById(word.wordGroup);
            word[index].wordGroup = wordGroup;
        });

        return res.json(words);
    }
}