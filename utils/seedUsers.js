const {faker} = require("@faker-js/faker");
const User = require("../models/User");

async function seedUsers() {
    try {
        const users = Array.from({length: 10}).map(() => ({
            name: faker.person.fullName(),
            email: faker.internet.email(),
            password: "dummy_password123"
        }));

        await User.bulkCreate(users, {ignoreDuplicates: true});
    } catch (error) {
        console.error("[Seed Users] Error seeding users:", error);
    }
}

module.exports = seedUsers;
