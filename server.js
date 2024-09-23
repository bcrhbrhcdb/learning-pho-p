const express = require('express');
const path = require('path');
const { exec } = require('child_process');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Start the server and open Chrome automatically
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);

    // Command to open Chrome with the specified URL
    const openChromeCommand = `google-chrome http://localhost:${PORT}`;

    exec(openChromeCommand, (err) => {
        if (err) {
            console.error('Failed to open Chrome:', err);
        }
    });
});