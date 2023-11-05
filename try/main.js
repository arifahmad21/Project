const input = document.querySelector('#search');
let movie;

// ! satu movie
// fetch("http://www.omdbapi.com/?apikey=d684a20e&t=panda")
//     .then(response => response.json())
//     .then(response => {
//         movie = response;

        // // memanggil main
        // const main = document.querySelector('#main');
        // // memanggil div (pada card)
        // const card = document.querySelector('div');

        // // membuat title dan img
        // const title = document.createElement('h1')
        // const img = document.createElement('img')

        // // memberikan class pada card
        // card.className = 'card';

        // // memberikan value pada title
        // title.innerText = movie.Title;

        // // set attribute pada img
        // img.setAttribute("src", movie.Poster);
        // img.setAttribute("title", movie.Title);
        

        // // memasukkan title dan img ke card
        // card.appendChild(title)
        // card.appendChild(img)

        // // memasukkan card ke main
        // main.appendChild(card)
//     })



// !berdasarkan searching
// //? menampung semua yang di input di kolom search
function onChangeSearch(searchParameter){
    fetch("http://www.omdbapi.com/?apikey=d684a20e&s=" + searchParameter)
        .then(response => response.json())
        .then(response => {
            const movies = response.Search;
            let cards = '';

            movies.forEach(data => cards += showCards(data));

            const main = document.querySelector('#main');

            main.innerHTML = cards;
        })
}

function showCards(data){
    return `
    <div class="card">
        <h1>${data.Title}</h1>
        <img src="${data.Poster}"
            title="${data.Title}">
    </div>
    `
}

// // ! event untuk searching
// input.addEventListener('blur', function(){
//     onChangeSearch(input.value);
// })


// ! menggunakan axios

function onChangeSearch(searchParameter){
    axios.get("http://www.omdbapi.com/?apikey=d684a20e&t=" + searchParameter, {

    })
    .then(function (response) {
        if(response.data.Title){
            movie = response.data;
        }else{
            movie.Title = "Tidak Ada Filmnya.."
            movie.Poster = "uu"
        }
        
    })
    .catch(function (error) {
        console.log(error);
    })
    .finally(function () {
        const main = document.querySelector('#main');

        main.innerHTML = showCards(movie);
    }); 
}

function showCards(data){
    return `
    <div class="card">
        <h1>${data.Title}</h1>
        <img src="${data.Poster}"
            title="${data.Title}">
    </div>
    `
}

// ! event untuk searching
input.addEventListener('blur', function(){
    onChangeSearch(input.value);
})



