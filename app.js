const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/mongoose-test');
const validator = require('validator');

const { Schema } = mongoose;

// Schema : 데이터의 구조
const userSchema = new Schema({
    name:{
        type:String
    },
    email:{
        type:String,
        required:true,
        validate:{
            validator: function(value){
                if(!validator.isEmail(value))
                throw new Error("This is not an email")
            }
        }
    },
    password:{
        type:String,
        required:true,
        trim: true
    },
    age:{
        type:Number,
        default: 0
    },
});

// Schema를 토대로 model을 만들 수 있다
const User = mongoose.model("User", userSchema); // "User"라는 model 생성

// const newUser = new User ({
//     name: "김철수",
//     email: "www9@gamil.com",
//     password: "1122"
// });

// newUser.save().then((value) => console.log("value is", value));

User.find({ name: "김철수"})
    .select("name -_id")
    .then(value => console.log("all data : ", value));