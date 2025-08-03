const express = require('express');
const db = require('./firebaseService');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/postback', async (req, res) => {
  try {
    const postbackData = req.query;
    console.log('Received Postback:', postbackData);

    await db.collection('postbacks').add(postbackData);

    res.status(200).send('OK');
  } catch (err) {
    console.error('Error storing postback:', err);
    res.status(500).send('Server Error');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
