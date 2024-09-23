const express = require('express');
const path = require('path');
const phpExpress = require('php-express')({
    binPath: 'php' // Ensure PHP is installed and in your PATH
});

const app = express();
const PORT = process.env.PORT || 3000;

// Set view engine to php-express
app.engine('php', phpExpress.engine);
app.set('views', path.join(__dirname, 'views')); // Directory for PHP files
app.set('view engine', 'php');

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Route for serving PHP files
app.all(/.+\.php$/, phpExpress.router);

// Optional: Add a route for the home page (HTML)
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html')); // Serve index.html as the home page
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});