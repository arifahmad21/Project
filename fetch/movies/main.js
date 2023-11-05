let movie 
const input = document.querySelector('#search')

// fetch("http://www.omdbapi.com/?apikey=d684a20e&t=avengers")
// .then(response => response.json())
// .then(response => {
//     movie = response

    // const main = document.querySelector('#main')
    // const card = document.querySelector('div')
    // const title = document.createElement('h1')
    // const img = document.createElement('img')

    // card.className = 'card'
    // title.innerText = movie.Title
    // img.setAttribute("src", movie.Poster)
    // img.setAttribute("title", movie.Title)

    // card.appendChild(title)
    // card.appendChild(img)

    // main.appendChild(card)
// })

// function OnChangeSearch(searchParam){
//     fetch("http://www.omdbapi.com/?apikey=d684a20e&s=" + searchParam)
//     .then(response => response.json())
//     .then(response => {
//         const movies = response.Search
//         let cards = ''
//         movies.forEach(data => cards += showCards(data));
//         const main = document.querySelector('#main')
//         main.innerHTML = cards;
//     })
// }

// function showCards(data){
//     return `
//     <div class="card">
//             <h1>${data.Title}</h1>
//             <img src="${data.Poster}"
//                         title="${data.Title}">
//         </div>
//     `

// }

// input.addEventListener('blur', function(){
//     OnChangeSearch(input.value)
// })


function onChangeSearch(searchParameter){
    axios.get("http://www.omdbapi.com/?apikey=d684a20e&t=" + searchParameter, {

    })
    .then(function (response) {
        if(response.data.Title){
            movie = response.data;
            const movies = response.data.Title
            let cards = ''
             movies.forEach(data => cards += showCards(data));
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
        <img src="${data.Poster}"
            title="${data.Title}">
        <h1>${data.Title}</h1>    
    </div>
    `
}

// ! event untuk searching
input.addEventListener('blur', function(){
    onChangeSearch(input.value);
})

