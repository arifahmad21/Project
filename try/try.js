

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

// let movie 
// const input = document.querySelector('#search')
// function OnChangeSearch(searchParam){
//     fetch("http://www.omdbapi.com/?apikey=d684a20e&s=" + searchParam)
//     .then(response => response.json())
//     .then(response => {
        // const movies = response.Search
        // let cards = ''
        // movies.forEach(data => cards += showCards(data));
        // const main = document.querySelector('#main')
        // main.innerHTML = cards;
//     })
// }

// function showCards(data){
//     return `
//     <div class="card">
            
//             <img src="${data.Poster}"
//                         title="${data.Title}">
//             <h1>${data.Title}</h1>
//             <a href="#" id="detail">Detail</a>
//         </div>
//     `

// }

// input.addEventListener('blur', function(){
//     OnChangeSearch(input.value)
// })

let movie 
const input = document.querySelector('#search')

function OnChangeSearch(searchParam){
    axios.get("http://www.omdbapi.com/?apikey=d684a20e&t=" + searchParam)
    .then(function (response) {
        if (response.data.Tittle){
            movie = response.data
        }
        else{
            movie.Title = "Tidak Ada"
        }

       
    })
    .catch(function(error){
        console.log(error)
    })
    .finally(function(){
    //     const main = document.querySelector('#main')
    // const card = document.querySelector('div')
    // const title = document.createElement('h1')
    // const img = document.createElement('img')

     const movies = response.Search
        let cards = ''
        movies.forEach(data => cards += showCards(data));
        const main = document.querySelector('#main')
        main.innerHTML = cards;
    card.className = 'card'
    title.innerText = movie.Title
    img.setAttribute("src", movie.Poster)
    img.setAttribute("title", movie.Title)

    card.appendChild(title)
    card.appendChild(img)

    main.appendChild(card)
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
input.addEventListener('blur', function(){
    OnChangeSearch(input.value)
})

