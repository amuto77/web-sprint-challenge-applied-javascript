// STEP 1: Create a Header component.
// -----------------------
// Write a function that returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

const headerDiv = document.querySelector('div.header-container')

function Header(){
    const title = document.createElement('div');
    const date = document.createElement('span');
    const opener = document.createElement('h1');
    const temp = document.createElement('span');
    
    title.classList.add('header');
    date.classList.add('date');
    temp.classList.add('temp');

    date.textContent = 'MARCH 28, 2020';
    opener.textContent = 'Lambda Times';
    temp.textContent = '98°';

    title.appendChild(date);
    title.appendChild(opener);
    title.appendChild(temp);

    return title;
}

headerDiv.append(Header());
