import pkg from 'mongoose';
const  mongoose  = pkg;

/*const uri = "mongodb+srv://nico:123321@cluster0.rtak1.mongodb.net/flyplaneDB?retryWrites=true&w=majority"

mongoose.Promise = global.Promise
mongoose.connect(uri, {
useNewUrlParser: true,
useUnifiedTopology: true,
}).then(() => {
console.log("MongoDB Conectado...")
}).catch((erro) => {
console.log("Houve um erro ao se conectar: " + erro)
})*/


const UserSchema = mongoose.Schema({

    email:{
        type: String,
        require: true,
        unique: false,
        null: false,
        lowercase: true,
        
    },
    valida:{

        type: Number,
        unique: false

    },
    perfil:{
        type: String,
        require: true,
        unique: false,
        null: false,
        lowercase: true,

    },
    dest:{
        type: String,
        require: true,
        unique: false,
        null: false,
        lowercase: true,

    },
    createdAt:{ 
        type: Date,  
        default: Date.now 
    }
})

 mongoose.model('users', UserSchema)

export const User = mongoose.model('users', UserSchema)

/*new User({

    email: "alui@eu.com",
    valida: 2,
    perfil: "hist",
    dest: "roma"

}).save()
.then(() => {
    console.log("Pedido cadastrado")
}).catch((erro) => {
    console.log("Houve um erro " + erro)
})*/



