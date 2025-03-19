document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if(name && email && message) {
        document.getElementById("response-message").innerText = "Pesan Anda telah terkirim!";
        document.getElementById("contact-form").reset();
    } else {
        document.getElementById("response-message").innerText = "Harap isi semua bidang.";
    }
});

document.getElementById("tagihan-form").addEventListener("submit", function(event) {
    event.preventDefault();

    let nomorPelanggan = document.getElementById("nomor-pelanggan").value;
    if(nomorPelanggan) {
        let randomTagihan = Math.floor(Math.random() * 500000) + 50000;
        document.getElementById("tagihan-hasil").innerText = "Tagihan Anda: Rp " + randomTagihan.toLocaleString();
    } else {
        document.getElementById("tagihan-hasil").innerText = "Masukkan nomor pelanggan yang valid.";
    }
});