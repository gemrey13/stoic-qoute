let qoutesRandom = 'https://stoicquotesapi.com/v1/api/quotes/random';

fetch(qoutesRandom)
    .then((response) => response.json())
    .then(data => {
        var myBody = data.body;
        var myAuthor = data.author;
        document.querySelector('h1').innerHTML = `<q>${myBody}</q>`;
        document.querySelector('h3').innerHTML = `- ${myAuthor}`;
    })
    .catch(error => console.error(error))

let para = document.querySelector('p');

if (window.innerWidth <= 390) {
    para.textContent = "Refresh for random stoic qoutes";
}else{
    para.textContent = "Press F5 for random stoic qoutes";
}