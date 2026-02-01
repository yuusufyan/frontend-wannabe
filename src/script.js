const inputNama = document.getElementById('inputNama');
const listSkill = document.querySelector('ul');
const buttonSapa = document.getElementById('btn-sapa');

function sapaUser() {
  const nama = inputNama.value;

  // if(nama === '') {
  //   alert('Masukkan nama kamu!');
  // } else {
  //   alert(`Halo, ${nama}! Selamat datang di website ini.`);
  // }
  if (nama !== "") {
          // Bikin elemen <li> baru di memori
          const liBaru = document.createElement('li');

          // Isi teksnya
          liBaru.textContent = "User Baru: " + nama;

          // Kasih style biar cakep (sama kayak li yang lain)
          liBaru.style.color = "#3498db";
          liBaru.style.fontWeight = "bold";

          // Masukin ke dalem <ul> yang udah ada di web
          listSkill.appendChild(liBaru);

          // Kosongin lagi inputnya
          inputNama.value = "";
      }
}

// Cara yang lebih modern dan rapi:
buttonSapa.addEventListener('click', function() {
    // Masukin semua logika sapaUser di sini
    console.log("Tombol diklik lewat EventListener!");
    sapaUser();
});
