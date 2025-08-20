const sequelize = require("./database");
require("./../models/User");

(async () => {
  try {
    await sequelize.authenticate();
    console.log("✅ Database connected.");

    await sequelize.sync({ alter: true }); // or { force: true } if you want to drop tables
    console.log("✅ Models synced.");
    
  } catch (err) {
    console.error("❌ DB connection error:", err);
  }
})();