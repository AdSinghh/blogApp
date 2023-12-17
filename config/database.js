const mongoose = require("mongoose");

// Import the dotenv library to load environment variables from a .env file.
require('dotenv').config();

const dbConnect = () => {
    mongoose.connect(process.env.DATABASE_URL, {
    //     useNewUrlParser: true,
    //     useUnifiedTopology: true,
     })
    .then(() => {
        console.log("Database connected successfully");
    })
    .catch((err) => {
        // Log the error to the console.
        console.log(err);
        // Log the error message to the console.
        console.error(err.message);
        // Exit the process with a non-zero status code (1) to indicate an error.
        process.exit(1);
    });
};

module.exports = dbConnect;
