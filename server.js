const express = require('express');
const browserSync = require('browser-sync');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Catch-all route to serve index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// Initialize Browser-Sync
browserSync({
  proxy: `localhost:${PORT}`,
  files: ['public/**/*.{html,js,css}'],
  open: false,
  notify: false,
  reloadDelay: 10
});