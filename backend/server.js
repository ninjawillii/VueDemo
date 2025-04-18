const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 8008;

app.use(cors());
app.use(express.json());

let messages = [];

app.get('/api/messages', (req, res) =>{
    res.json(messages);
});

app.post('/api/messages', (req, res) => {
    const {text} = req.body;
    if (text) {
        messages.push({ text, timestamp: new Date().toISOString() });
        res.status(200).json({ success: true });
    } else {
        res.status(400).json({ success: false, message: 'Input is required' });
    }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));