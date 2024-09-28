const ul = document.querySelector('.js__ul');
const btn = document.querySelector('.js__btn');

fetch('http://localhost:4000/books')
    .then(res => res.json())
    .then(data => {

        let html = '';
        for (const item of data) {

            html += `<li>${item.name}</li>`;
        }
        ul.innerHTML = html;
    });

const data = {

}

btn.addEventListener('click', handleClick)

function handleClick(ev) {
    ev.preventDefault();

    fetch('http://localhost:4000/books', {
        method: 'POST',
        headers: {
            'content-Type': 'application/json'
        },
        body: JSON.stringify(data)

    })
        .then()
}
