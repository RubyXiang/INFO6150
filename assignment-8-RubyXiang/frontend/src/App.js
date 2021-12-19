import React from "react";
import {Tasks} from "./Tasks";


export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: []
        }
    }

    save() {
        let title = document.getElementById('title').value;
        let description = document.getElementById('description').value;
        let createdDate = document.getElementById('date').value;
        let done = document.getElementById('done').value;
        let booleanTypeDone = done === 'true'


        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                title: title, description: description, createdDate: createdDate, done: booleanTypeDone
            })
        };
        fetch('http://localhost:3001/tasks', requestOptions)
            .then(response => response.json())
            .then((childTask) => {
                alert(childTask.title + 'add succeed')
                document.getElementById("addTask").style.display = "none"
                window.location.reload()
            });
    }

    componentDidMount() {
        const requestOptions = {
            method: 'GET',
            headers: {'Content-Type': 'application/json'}
        };
        fetch('http://localhost:3001/tasks', requestOptions)
            .then(response => response.json())
            .then((tasks) => {
                this.setState({tasks});
            });
        document.getElementById("addTask").style.display = "none"
        document.getElementById("subButton").style.display = "none"
    }

    toggleSave(){
        let addTask = document.getElementById("addTask");
        let subButton = document.getElementById("subButton");
        let addButton = document.getElementById("addButton");
        if (addTask.style.display === "none"){
            addTask.style.display = ""
        }else {
            addTask.style.display = "none"
        }
        if (subButton.style.display === "none"){
            subButton.style.display = ""
        }else {
            subButton.style.display = "none"
        }
        if (addButton.style.display === "none"){
            addButton.style.display = ""
        }else {
            addButton.style.display = "none"
        }
    }

    render() {
        return (<div>
            <h1>Todo List</h1>
            <Tasks tasks={this.state.tasks}/>
            <div>
                <button id="addButton" className="add-button" onClick={this.toggleSave}>+</button>
                <button id="subButton" className="add-button" onClick={this.toggleSave}>-</button>
            </div>
            <div id="addTask">
                <div className="text-area">
                    <textarea id="title" type="text" className="item" placeholder="Type The Item"/>
                    <textarea id="description" className="description" placeholder="Type The Description"/>
                </div>
                <div>
                    <form>
                        <div className="form">
                            <lable htmlFor="date">Date:</lable>
                            <input id="date" type="datetime-local" min="2021-11-04T00:00"/>
                            <input id="done" type="hidden"/>
                        </div>
                    </form>
                </div>
                <div className="save">
                    <input id="saveButton" type="button" value="save" onClick={this.save}/>
                </div>
            </div>
        </div>);
    }
}

