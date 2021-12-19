import  Mongoose  from "mongoose";

const ContactSchema = new Mongoose.Schema({
    "firstName":{
        type:String,
        required:"First Name is a required field."
    },
    "lastName":{
        type:String,
        required:"Last Name is a required field."
    },
    "phone":{
        type:Number
    },
    "createDate":{
        type:Date,
        default:Date.now
    },
    "lastModifiedDate":{
        type:Date,
        default:Date.now
    }
},
    {
        versionKey:false
    });

ContactSchema.virtual('id',()=> this._id.toHexString());//creat a virtual id
ContactSchema.set('toJson',{virtuals:true});//when convert into json, use virtual key

const Contact = Mongoose.model('Contact',ContactSchema);

export default Contact;