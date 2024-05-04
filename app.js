const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/mongoose-test');

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
                if(!value.includes("@")) throw new Error("This is not an email")
            }
        }
    },
    password:{
        type:String,
        required:true
    },
    age:{
        type:Number
    },
});

// Schema를 토대로 model을 만들 수 있다
const User = mongoose.model("User", userSchema); // "User"라는 model 생성

const newUser = new User ({
    name: "Dora",
    email: "qwe11gamil.com",
    password: "4445"
});

newUser.save().then((value) => console.log("value is", value));

