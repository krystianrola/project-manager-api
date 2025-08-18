const express = require("express")
// const dotenv = require("dotenv")
// const morgan = require("morgan")
// const connectDB = require('./config/db');
// const authRoutes = require('./routes/authRoutes');
// const projectRoutes = require('./routes/projectRoutes');

// dotenv.config();
// connectDB();

const app = express();

// app.use(express.json());
// app.user(morgan('env'));

// app.use('/api/auth', authRoutes);
// app.use('/api/projects', projectRoutes);

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));