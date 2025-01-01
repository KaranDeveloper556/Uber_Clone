const userModal = require("../modals/user.model");

module.exports.createUser = async ({
    firstName, lastName, email, password
}) => {
    if (!firstName || !email || !password) {
        throw new Error('All fields are required');
    }
    const user = userModal.create({
        fullName: {
            firstName,
            lastName
        },
        email,
        password
    })

    return user;
}