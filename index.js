const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000;

// Endpoint to get anime information
app.get('/anime/:id', async (req, res) => {
  try {
    // Fetch the anime ID from the request parameters
    const { id } = req.params;

    // Build the URL for the MyAnimeList API v4
    const url = `https://api.jikan.moe/v4/anime/${id}/full`;

    // Make a GET request to the API using Axios
    const { data } = await axios.get(url);

    // Send the entire anime information as a JSON response
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
