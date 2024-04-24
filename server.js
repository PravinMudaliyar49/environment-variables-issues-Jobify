import app from './app.js';

// Starting the server...
const port = 4000;
const server = app.listen(port, () => {
    console.log(`App running on port ${port}...`);
});
