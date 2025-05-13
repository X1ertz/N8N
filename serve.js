const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware เพื่อรับ JSON จาก LINE Webhook
app.use(bodyParser.json());

// Webhook endpoint
app.post('/webhook', (req, res) => {
  console.log('Received Webhook:', JSON.stringify(req.body, null, 2));

  // ตอบกลับ 200 OK เพื่อให้ LINE รู้ว่า Webhook สำเร็จ
  res.status(200).send('OK');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
