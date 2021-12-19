import * as contactService from '../services/contact.js';

// export const index =(request,response)=>{
//     const resolve = (contacts)=>{
//         response.status(200);
//         response.json(contacts);
//     };

//     // const contacts = await contactService.search();
//     // response.status(200);
//     // response.json(contacts);
//     contactService.search.then(resolve);
// }
const errrohandler =(message,response)=>{
    response.status(500);
    response.json({error:message});
}


const setRessponse =(data,response)=>{
    response.status(200);
    response.json(data);
}


export const index = async(request,response)=>{
    try{
        const contacts = await contactService.search();
        response.status(200);
        response.json(contacts);
    }catch(e){
        response.status(500);
        response.json({error:e.message});
    }
};

export const save = async(request,response)=>{
    try{
        const contact = {...request.body};
        const newContact = await contactService.create(contact);
        setSuccessResponse(newContact,response);
    }catch(e){
        errrohandler(e.message,response);
    }
}

export const get = async(request,response)=>{
    try{
        const id= request.params.id;
        const contact = await contactService.get(id);
        setSuccessResponse(contact,request);
    }catch(e){
        errrohandler(e.message,response);
    }
}

export const update = async(request,response)=>{
    try{
        const id= request.params.id;
        const contact ={...request.body,id};
        const updatedContact = await contactService.update(contact);
        setSuccessResponse(updatedContact,request);
    }catch(e){
        errrohandler(e.message,response);
    }
}

export const remove = async(request,response)=>{
    try{
        const id= request.params.id;
        // const contact ={...request.body,_id:id};
        const contact = await contactService.remove(id);
        setSuccessResponse({message:'Contact ${id} remove successfully.'},response);
    }catch(e){
        errrohandler(e.message,response);
    }
}