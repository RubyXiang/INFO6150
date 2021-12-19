const personsURI = 'data/persons.json';
const personsXHR = new XMLHttpRequest();
personsXHR.open('GET', personsURI);

/**
 * Loads the Response
 */
personsXHR.onload = function (){
    if(this.status === 200){
        const responseText = this.responseText;
        const persons = JSON.parse(responseText);
        load(persons);
    }
};
personsXHR.send();

/**
 * Adds person as the list item to the parent
 *
 * @param {Person} person the person object
 * @param {HTMLElement} parent the person element
 */
const createPerson = (person, parent) =>{
    const li = document.createElement('li');
    li.textContent = `${person.firstName} ${person.lastName}`;
    parent.appendChild(li);
};

/**
 * Loads all persons to the ordered list element.
 *
 * @param {Person[]} persons the list of persons
 * @returns {boolean}
 */
const load = (persons) =>{
    const ol = document.getElementById('list');
    persons.forEach(person=>{
        createPerson(person, ol)
    });
    return true;
}

setTimeout(()=>{
    console.log('hi')
},2000);