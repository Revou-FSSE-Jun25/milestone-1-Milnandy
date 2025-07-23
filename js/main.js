// logo condition
window.onscroll = function() {
    const logoSmall = document.querySelector('#logo-small');
    const logo = document.querySelector('#logo');
    const scrollThreshold = 50;

    if (window.pageYOffset > scrollThreshold) {
        // Tampilkan logo kecil dan sembunyikan logo besar
        logoSmall.classList.remove('hidden');
        logoSmall.classList.add('block');
        logo.classList.remove('block');
        logo.classList.add('hidden');
    } else {
        // Kembalikan ke kondisi awal jika scroll kembali ke atas
        logoSmall.classList.remove('block');
        logoSmall.classList.add('hidden');
        logo.classList.remove('hidden');
        logo.classList.add('block');
    }
}