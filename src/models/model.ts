import { mongoose } from "@loaders/mongo";

const usersSchemas = new mongoose.Schema({
    email: { type: String, unique: true, required: true},
    password: {type: String, unique: false, required: true}
})

const Users = mongoose.model('Users', usersSchemas);

export { Users };