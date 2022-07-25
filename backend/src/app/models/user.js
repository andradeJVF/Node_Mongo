const mongoose = require('../../database');
const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
        lowercase:true,
    },
    password:{
        type: String,
        required: true,
        select: false, //quando buscar o usuário do bd essa informação não será exibida no array
    },
    createdAt:{
        type: Date,
        default: Date.now,
    },
});

UserSchema.pre('save', async function(next){
    const hash = await bcrypt.hash(this.password, 10); //encripitando a senha com 10 rounds
    this.password = hash;

    next();
});

const User = mongoose.model('User', UserSchema);

module.exports = User;