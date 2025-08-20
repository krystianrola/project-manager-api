const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const userRoutes = require("./routes/userRoutes");
const sequelize = require("./config/database");

// Import models (register them with Sequelize)
require("./models/User"); 

dotenv.config();
const app = express();

// Middleware
app.use(express.json());
app.use(morgan('env'));

// Test DB connection
sequelize.sync({ alter: true }) // or { force: true } if you want to drop & recreate tables
  .then(() => {
    console.log("Database synced successfully");
    
    // Start server
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Unable to sync database:", err);
  });

// Routes
app.use("/api/users", userRoutes);

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));