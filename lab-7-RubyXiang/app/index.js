import { Person } from './person';
import '../scss/main.scss';

const personsURI = 'persons.json';

fetch(personsURI,{
    method: 'GET'
}).then(response => {
    return response.json();
}).then(data => {
    load(data);
    console.log(data)
});



/**
 * Adds person as the list item to the parent
 *
 * @param {Person} person the person object
 * @param {HTMLElement} parent the person element
 */
const createPerson = (person, parent) =>{
    const li = document.createElement('li');
    li.textContent = `Hi ${person.getName()}`;
    parent.appendChild(li);
};

/**
 * Loads all persons to the ordered list element.
 *
 * @param {Array} data the list of persons
 * @returns {boolean}
 */
const load = (data) =>{
    const ol = document.getElementById('list');
    data.forEach(item =>{
        const person = new Person(item.firstName, item.lastName);
        createPerson(person, ol)
    });
    return true;
}

setTimeout(()=>{
    console.log('hi')
},2000);