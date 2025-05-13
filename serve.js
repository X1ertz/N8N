const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/webhook', async (req, res) => {
  console.log('LINE Webhook:', req.body);

  try {
    // ส่งต่อข้อมูลทั้งหมดไปยัง n8n
    await axios.post('http://localhost:5678/webhook/line', req.body);
    res.status(200).send('Forwarded to n8n');
  } catch (error) {
    console.error('Error forwarding to n8n:', error.message);
    res.status(500).send('Error forwarding');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
