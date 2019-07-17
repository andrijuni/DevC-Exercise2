function nomor(number) {
    document.getElementById("nilai").value+=number;
}

function aritmatika(mat) {
    document.getElementById("nilai").value+=mat;
}

function kosong() {
    document.getElementById("nilai").value = "";
}

function hasil() {

let angka = document.getElementById("nilai").value;
    nilaiAkhir = eval(angka);
        document.getElementById("nilai").value = nilaiAkhir;
}