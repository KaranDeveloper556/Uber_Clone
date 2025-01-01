const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const captainSchema = mongoose.Schema({
    fullName: {
        firstName: {
            type: String,
            required: true,
            minLength: [3, 'First name must be at least 3 characters long'],
        },
        lastName: {
            type: String,
            required: true,
            minLength: [3, 'Last name must be at least 3 characters long'],
        }
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        match: [/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'Please fill a valid email address'],
    },
    password: {
        type: String,
        required: true,
        select: false
    },
    socketId: {
        type: String
    },
    status: {
        type: String,
        enum: ['active', 'inactive'],
        default: 'inactive'
    },
    vehicle: {
        color: {
            type: String,
            required: true,
            minLength: [3, 'Color must be at least 3 characters long']
        },
        plate: {
            type: String,
            required: true,
            minLength: [2, 'Plate must be at least 3 characters long']
        },
        capacity: {
            type: Number,
            required: true,
            minLength: [1, 'Capacity must be at least 1'],
        },
        vehicleType: {
            type: String,
            required: true,
            enum: ['car', 'Bike', 'auto', 'Van', 'bus'],
        }
    },
    location: {
        lat: {
            type: Number,
            required: true
        },
        lon: {
            type: Number,
            required: true
        }
    }
})

captainSchema.methods.generateAuthToken = () => {
    const token = jwt.sign({ _id: this._is }, process.env.JWT_SECRET, { expiresIn: '24h' })
}

captainSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
}

captainSchema.static.hashingPassword = async function (password) {
    return await bcrypt.hash(password, 10)
}

const captainModel = mongoose.model('captain', captainSchema)