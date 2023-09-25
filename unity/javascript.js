window.addEventListener("scroll", function () {
  var navbar = document.getElementById("myNavbar");
  if (window.scrollY > 0) {
    navbar.classList.add("navbar-transparent"); // Tambahkan kelas transparan saat digulir
  } else {
    navbar.classList.remove("navbar-transparent"); // Hapus kelas transparan saat tidak digulir
  }
});
