const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const userRoutes = require("./routes/userRoutes");
const sequelize = require("./config/database");
const seedUsers = require("./utils/seedUsers");

// Import models (register them with Sequelize)
require("./models/User"); 

dotenv.config();
const app = express();

// Middleware
app.use(express.json());
app.use(morgan('env'));

// Sync DB and seed users
(async () => {
  try {
    await sequelize.sync({ alter: true });
    console.log("[Sequelize Sync] Database synced");

    await seedUsers();
    console.log("[Sequelize Seed] Created 10 dummy users");
  } catch (error) {
    console.error("[Sequelize Sync & Seed] Error syncing DB or seeding:", error);
  }
})();

// Routes
app.use("/api/users", userRoutes);

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));