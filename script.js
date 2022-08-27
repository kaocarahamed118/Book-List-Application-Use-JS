// Geting All Elements
const titles = document.getElementById('title');
const author = document.getElementById('author');
const years = document.getElementById('year');
const submitButton = document.getElementById('button');
const bottomList = document.getElementById('bottomList');


submitButton.addEventListener('click', (e) => {
    e.preventDefault()
    if(titles.value == "" || author.value == "" || years.value == ""){
        alert('Please fill the form')
    }else{
        const newRow = document.createElement('tr');

        const newTitle = document.createElement('th');
        newTitle.innerHTML = titles.value;
        newRow.appendChild(newTitle);

        const newAuthor = document.createElement('th');
        newAuthor.innerHTML = author.value;
        newRow.appendChild(newAuthor);

        const newYear = document.createElement('th');
        newYear.innerHTML = years.value;
        newRow.appendChild(newYear);

        bottomList.appendChild(newRow)

        titles.value = "";
        author.value = "";
        years.value = "";
    }
    
})

