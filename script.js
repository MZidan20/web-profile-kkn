document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');

    // Pastikan kedua elemen ada sebelum menambahkan event listener
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            // Menambahkan atau menghapus kelas 'active' pada nav-links
            navLinks.classList.toggle('active');
        });
    }
});