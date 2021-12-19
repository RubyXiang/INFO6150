import {Details} from './details';
import '../scss/main.scss';

const detailsURI = 'todo.json';

/**
 * Get data from .json file
 */
fetch(detailsURI, {
    method: 'GET'
}).then(response => {
    return response.json();
}).then(data => {
    load(data);
    console.log(data)
});

/**
 * Add list, checkbox to detail, and add detail to parent
 * @param data
 * @returns {boolean}
 */
const load = (data) => {
    if (localStorage.length === 0) {
        data.forEach(todo => {
            localStorage.setItem(todo.item, JSON.stringify(new Details(todo.item, todo.description, todo.date, false)));
        });
    }
    const ul = document.getElementById('list');

    for (let i = 0; i < localStorage.length; i++) {
        let item = localStorage.getItem(localStorage.key(i));
        const detail = JSON.parse(item)
        createList(detail, ul)
    }
    return true;
}

setTimeout(() => {
    console.log('hi')
}, 2000);

const createList = (detail, parent) => {
    const li = document.createElement('li');

    const checkBox = document.createElement('input');
    checkBox.setAttribute("type", "checkbox");
    if (detail.done) {
        checkBox.setAttribute('checked', 'checked')
    }
    checkBox.addEventListener('click', () => {
        let currentDetail = localStorage.getItem(detail.item);
        let parse = JSON.parse(currentDetail);
        parse.done = !parse.done;
        localStorage.setItem(detail.item, JSON.stringify(parse))
    })
    li.appendChild(checkBox);

    const contentLabel = document.createElement('label');
    contentLabel.innerHTML = `${detail.item}`
    contentLabel.addEventListener('click', () => {
        let item = detail.item;
        window.location = 'subPage.html?item=' + encodeURI(item)
    })
    li.appendChild(contentLabel);
    
    parent.appendChild(li);
}