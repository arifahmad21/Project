let movie 
const input = document.querySelector('#search-button')

function onChangeSearch(searchParam){
    axios.get('http://www.omdbapi.com/?apikey=d684a20e&s=' + searchParam, {})

    .then(response => {
        const movies = response.data.Search
        const check = response
        console.log(check)
        let cards = '';
        for (const data of movies) {
            cards +=  `
        <div class="card">
        <img src="${data.Poster}"
            title="${data.Title}">
            <h1>${data.Title} (${data.Year}) </h1>
            <a href="#" id="detail">Show Detail</a>
        </div>
    `
        }
        const main = document.querySelector('#main');
        main.innerHTML = cards;
    })
    .catch (function(error) {
        console.log(error)
    })
}

// function showCards(data){
//     return `
//     <div class="card">
//         <h1>${data.Title}</h1>
//         <img src="${data.Poster}"
//             title="${data.Title}">
//     </div>
//     `
// }

input.addEventListener('click', function(){
    const inputKeyword = document.querySelector('#search')
    onChangeSearch(inputKeyword.value);
})