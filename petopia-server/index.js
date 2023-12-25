require('dotenv').config(); 
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require("morgan");

const userRoutes = require('./route/routes'); // Your existing routes
const productRoutes = require('./route/productRoutes'); // The new product routes
const blogRoutes = require('./route/blogRoutes');
const comboRoutes = require('./route/comboRoutes');
const app = express();
const port = process.env.PORT || 9992;

// Middleware
app.use(morgan("combined"));
app.use(cors({ origin: "http://localhost:4200" }));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ limit: '10mb', extended: true }));

// MongoDB connection
const dbUri = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/petopiadb";
mongoose.connect(dbUri)
    .then(() => console.log("Successfully connected to DB"))
    .catch(error => console.log("Error connecting to DB:", error));

// Routes
app.use(userRoutes); // Use existing routes
app.use('/products', productRoutes); // Use product routes
app.use("/blogs", blogRoutes);
app.use("/combos", comboRoutes);
// Error Handling Middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

// Starting the server
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});