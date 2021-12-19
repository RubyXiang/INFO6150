import React from 'react';

export class Tasks extends React.Component {
    create(tasks, ul) {
        if (ul) {
            let pObjs = ul.childNodes;
            for (let i = pObjs.length - 1; i >= 0; i--) { // 一定要倒序，正序是删不干净的，可自行尝试
                ul.removeChild(pObjs[i]);
            }
        }

        this.props.tasks.map((task) => {
            this.createList(task, ul)
        })
    }

    createList(detail, parent) {

        const li = document.createElement('li');

        const checkBox = document.createElement('input');
        checkBox.setAttribute("id", detail._id);
        checkBox.setAttribute("type", "checkbox");
        if (detail.done) {
            checkBox.setAttribute('checked', 'checked')
        }
        checkBox.addEventListener('click', (event) => {
            let checked = event.target.checked;
            this.update(detail._id.toString(), checked)
        })
        li.appendChild(checkBox);

        const alink = document.createElement('a');
        alink.href = "javascript:void(0)";
        alink.innerHTML = `${detail.title}`
        alink.addEventListener('click', () => {
            const div = alink.nextElementSibling;
            if (div.style.display === "none") {
                div.style.display = ""
            } else {
                div.style.display = "none"
            }
        })
        li.appendChild(alink);

        const detailInfo = document.createElement('div');
        const detailInfoLabel = document.createElement('label');
        detailInfoLabel.innerHTML =
            'title: ' + detail.description + ' </br>'
            + 'createdDate: ' + detail.createdDate + ' </br>'
            + 'lastModifiedDate: ' + detail.lastModifiedDate;
        detailInfo.appendChild(detailInfoLabel);
        detailInfo.style.display = "none"
        detailInfo.setAttribute("id", detail.id)

        li.appendChild(detailInfo);

        parent.appendChild(li);
    }


    update(id, done) {
        const requestOptions = {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                done: done
            })
        };
        fetch('http://localhost:3001/tasks/' + id.toString(), requestOptions)
            .then(response => response.json())
            .then((childTask) => {
            });
    }

    render() {

        const div = (
            <div className="item-list">
                <ul id="list"/>
            </div>
        );
        this.create(this.props.tasks, document.getElementById('list'));
        return div;
    }
}