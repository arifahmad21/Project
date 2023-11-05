const formulir = document.querySelector('form')

formulir.addEventListener('submit', kirimCatatan)

function kirimCatatan(e){
    e.preventDefault()

    //mengambil elemen
    const elemen_judul =  document.querySelector('#judul')
    const elemen_isi = document.querySelector('#isi')

    //mengambil value
    const judul = elemen_judul.value
    const isi = elemen_isi.value

    axios.post('http://localhost:3002/v1/todo',{
        judul, 
        isi
    }).then(response => {

        elemen_judul.value = '';
        elemen_isi.value = '';
        ambilcatatan()
    })

}

function ambilcatatan(){
    const catatan_body = document.querySelector('#pembungkus_catatan')
    axios.get('http://localhost:3002/v1/todo')
    .then (response => {
        const kumpulan_ctt = response.data.data
        let tampilan = '';

        for (const catatan of kumpulan_ctt) {
            tampilan += `
                <div class="catatan"> 
                    <h2>${catatan.judul}</h2>
                    <p>${catatan.isi}</p>
                    <button data-idcatatan = ${catatan.id} id="tombol_hapus">Hapus</button>
                </div>
            `
        }

        catatan_body.innerHTML = tampilan;

        hapusCatatan()

    })
    .catch(error => {
        console.log(error.message)
    })

}

function hapusCatatan(){
    const kumpulan_tombol_hapus = document.querySelectorAll('#tombol_hapus')
    kumpulan_tombol_hapus.forEach(tombol_hapus => {
        tombol_hapus.addEventListener('click', ()=>{
            const id_catatan = tombol_hapus.dataset.idcatatan
            axios.delete(`http://localhost:3002/v1/todo/${id_catatan}`)
            .then(() => {
                ambilcatatan()
            })
            .catch((err) => {
                console.log(err.message)
            })
        })
    })

}


ambilcatatan()