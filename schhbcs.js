   // JavaScript untuk menghindari klik dobel saat animasi berjalan
    const book = document.getElementById('book');
    book.addEventListener('click', function () {
      book.style.pointerEvents = 'none';
      setTimeout(() => {
        book.style.pointerEvents = '';
      }, 2000);
    });