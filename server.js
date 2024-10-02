const express = require('express');
const path = require('path');

const app = express();
const port = 3000;
app.use(express.static(path.join(__dirname, 'public')));
// Serve the index.html file directly for the root route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'site.html'));
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
