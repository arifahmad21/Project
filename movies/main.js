let movie;
const input = document.querySelector('#search');

// function OnChangeSearch(searchParam) {
//   axios.get("http://www.omdbapi.com/?apikey=d684a20e&t=" + searchParam)
//     .then(function (response) {
//       movie = response.data
      
//       console.log(movie);

        // const movies = response.data.Search
        // let cards = ''
        // movies.forEach(data => cards += showCards(data));
        // const main = document.querySelector('#main')
        // main.innerHTML = cards;

//     })
//     .catch(function (error) {
//       // Tangani kesalahan jika ada
//       console.error('Terjadi kesalahan:', error);
//     });
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

// input.addEventListener('blur', function () {
//   OnChangeSearch(input.value);
// });

//AXIOSS

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


// !berdasarkan searching
//? menampung semua yang di input di kolom search
// function onChangeSearch(searchParameter){
//     fetch("http://www.omdbapi.com/?apikey=d684a20e&s=" + searchParameter)
//         .then(response => response.json())
//         .then(response => {
//             const movies = response.Search;
//             let cards = '';

//             movies.forEach(data => cards += showCards(data));

//             const main = document.querySelector('#main');

//             main.innerHTML = cards;
//         })
// }

// function showCards(data){
//     return `
//     <div class="card">
//         <h1>${data.Title}</h1>
//         <img src="${data.Poster}"
//             title="${data.Title}">
//     </div>
//     `
// }
// input.addEventListener('blur', function(){
//     onChangeSearch(input.value);
// })