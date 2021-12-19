//services takes all the logic

// import contact from "../models/contact.js";
import Contact from "../models/contact.js";

/**
 * 
 * @param {*} params 
 * @returns {Contact[]} list of contacts
 */

export const search =(params = {})=>{
    const promise =Contact.find(params).exec();
    return promise;
};

export const creat=(contact)=>{
    const newContact =new Contact(contact);
    return newContact.save();
}

export const get =(id)=>{
    const promise = Contact.findById(id).exec();
    return promise;
}

export const update =(contact)=>{
    contact._id=contact.id;
    const promise = Contact.findByIdAndUpdate(contact.id,contact,{new:true}).exec();
    return promise;
}

export const remove = (id)=>{
    const promise = Contact.findByIdAndRemove(id).exec();
    return promise;
}