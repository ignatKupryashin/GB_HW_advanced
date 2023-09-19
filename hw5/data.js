let data;

fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((json) => data = (json))
    .then((data) => fill(data)).then(() => console.log(data));

const container = document.querySelector('.container');

const fill = (data) => {data.forEach((element) => {
    const item = document.createElement('div');
    item.classList.add('item');
    const heading = document.createElement("h3");
    heading.innerText = `${element.userId} - ${element.id} - ${element.title}`;
    const paragraph = document.createElement('p');
    paragraph.innerText = element.body;
    item.append(heading, paragraph);
    container.appendChild(item);
})}

