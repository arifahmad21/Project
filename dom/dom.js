const gambar = document.getElementById("gambar");
gambar.setAttribute("width", 350);
gambar.setAttribute("height", 270);

const buttons = document.querySelectorAll(".button");
const playButton = buttons[3];
const playButtonELement = playButton.children[0];
playButtonELement.setAttribute("disabled", "disabled");

const linkITC = document.getElementById("linkITC");
linkITC.innerText = "Ayo Gabung ITC";

//innerHTML
linkITC.innerHTML = " <i>Ayo Gabung ITC</i>";

//styleproperty
for (const button of buttons) {
  button.children[0].computedStyleMap.borderRadius = "5px";
}

//menambahkan konten html
//appendChild
const elemenBaru = document.createElement("li");
elemenBaru.innerHTML = '<a href="http://google.com">Google</a>';
const awal = document.getElementById("daftarLink");
awal.appendChild(elemenBaru);

//insertbefore
const list = document.createElement("p");
list.innerHTML = "Daftar Link";
const parentElemen = document.getElementById("links");
parentElemen.insertBefore(list, awal);
