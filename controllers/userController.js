const User = require('./../models/User');


const getAllUsers = async (req, res) => {
   try {
    const users = await User.findAll();

    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const createUser = async (req, res) => {
  try {
    const {name, email, password} = req.body;
    const user = await User.create({name, email, password});

    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({error: error.message})
  }
};

const  findUserById = async (req, res) => {
    try {
      const id = req.params.id;
      const user = await User.findByPk(id);

      if (!user) return res.status(404).json({ error: "User not found" });

      res.json(user);
    } catch (error) {
      req.status(500).json({error: error.message});
    }
}

const  updateUser = async (req, res) => {

}

const  deleteUser = async (req, res) => {
  
}

module.exports = {
    getAllUsers,
    createUser,
    updateUser,
    deleteUser,
    findUserById
} 