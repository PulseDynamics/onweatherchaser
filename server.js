const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());

app.get('/weather-alerts', async (req, res) => {
    try {
        const response = await axios.get('https://www.weather.gc.ca/warnings/index_e.html');
        res.send(response.data);
    } catch (error) {
        console.error('Error fetching weather alerts:', error);
        res.status(500).send('Failed to load weather alerts.');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
