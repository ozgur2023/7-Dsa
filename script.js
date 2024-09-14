// Duyurular
const duyurular = [
    "Yarın sınav var, lütfen hazırlıklı gelin.",
    "Okul gezisi için izin formlarını teslim etmeyi unutmayın.",
    "Matematik ödevi son teslim tarihi bu cuma."
];

// Öğrenciler
const ogrenciler = [
    { isim: "Ahmet Yılmaz", numara: 101 },
    { isim: "Elif Kaya", numara: 102 },
    { isim: "Mehmet Demir", numara: 103 }
];

// Ödevler
const odevler = [
    { ders: "Matematik", detay: "Problemler Kitabı Sayfa 45", teslim: "15 Eylül" },
    { ders: "Fen Bilimleri", detay: "Deney Raporu", teslim: "17 Eylül" },
    { ders: "Türkçe", detay: "Kompozisyon Yazma", teslim: "20 Eylül" }
];

// Duyuruları Yükle
function duyurulariYukle() {
    const duyurularListesi = document.getElementById('duyurularListesi');
    duyurular.forEach((duyuru) => {
        const p = document.createElement('p');
        p.textContent = duyuru;
        duyurularListesi.appendChild(p);
    });
}

// Öğrencileri Yükle
function ogrencileriYukle() {
    const ogrenciListesi = document.getElementById('ogrenciListesi');
    ogrenciler.forEach((ogrenci) => {
        const div = document.createElement('div');
        div.classList.add('ogrenci');
        div.innerHTML = `<strong>${ogrenci.isim}</strong> - Numara: ${ogrenci.numara}`;
        ogrenciListesi.appendChild(div);
    });
}

// Ödevleri Yükle
function odevleriYukle() {
    const odevListesi = document.getElementById('odevListesi');
    odevler.forEach((odev) => {
        const div = document.createElement('div');
        div.classList.add('odev');
        div.innerHTML = `<strong>${odev.ders}:</strong> ${odev.detay} - Son Teslim: ${odev.teslim}`;
        odevListesi.appendChild(div);
    });
}

// Sayfa yüklendiğinde tüm içerikleri yükle
document.addEventListener('DOMContentLoaded', () => {
    duyurulariYukle();
    ogrencileriYukle();
    odevleriYukle();
});
