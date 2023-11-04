// function loadData () {

//      fetch("https://jsonplaceholder.typicode.com/users")
//     .then(response => console.log(response.json()))
//     .then(data => {
//         let no = 1 
//         let output = ''
//         data.forEach(el => {
//             output += `
//             <tr>
//                 <td>`+ (no++) +`</td>
//                 <td>${el.name}</td>
//                 <td>${el.email}</td>
//             </tr> 
//             `;
            
//         });
//         document.querySelector('tbody').innerHTML = output

//     })
// }

const tbody = document.querySelector('tbody')
let userData  = [];

const loadData = async () => {
    try{
    const url = await fetch("https://jsonplaceholder.typicode.com/users")
    userData = await url.json()
    loadUserData(userData)
    } catch(err) {
        console.log(err)
    }
}

const loadUserData = (data) => {
    let no = 1
    const output = data.map((el) => {
        return (
          `
        <tr> 
            <td>`+(no++)+`</td>
            <td>${el.name}</td>
             <td>${el.email}</td>
            </tr> 
        `
        )
    }).join('')

    tbody.innerHTML = output
}

  loadData();