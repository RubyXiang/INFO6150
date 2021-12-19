import {Details} from "./details";

/**
 * Load data from local storage or web page
 */
function show() {
    let currentDetail = localStorage.getItem(decodeURI(getQueryVariable('item')));
    let itemJsonObj = JSON.parse(currentDetail)

    let item = document.getElementById('item');
    let description = document.getElementById('description');
    let date = document.getElementById('date');
    let done = document.getElementById('done');
    if(currentDetail == null){
        item.value = ''
        description.value = ''
        date.value = ''
        done.value = false
    }else{
    item.value = itemJsonObj.item || ''
    description.value = itemJsonObj.description || ''
    date.value = itemJsonObj.date || ''
    done.value = itemJsonObj.done || false
    }
    let elementById = document.getElementById('saveButton');
    elementById.addEventListener('click', save)
}

show()

function save() {
    let item = document.getElementById('item').value;
    let description = document.getElementById('description').value;
    let date = document.getElementById('date').value;
    let done = document.getElementById('done').value;
    let booleanTypeDone = done === 'true'

    let details = new Details(item, description, date, booleanTypeDone);
    localStorage.setItem(item, JSON.stringify(details));

    window.location = 'index.html';
}

function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("=");
        if (pair[0] == variable) {
            return pair[1];
        }
    }
    return (false);
}