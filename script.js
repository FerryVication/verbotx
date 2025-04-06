var BASE_URL = "https://api.ferdev.my.id";

document.getElementById("btn-kirim").addEventListener("click", async (e) => {
  e.preventDefault(); // Mencegah halaman refresh

  // Buka tutup FAQ (ini sebenarnya lebih cocok ditaruh di luar handler klik 'kirim')
  const questions = document.querySelectorAll('.faq-question');
  questions.forEach((btn) => {
    btn.addEventListener('click', () => {
      const answer = btn.nextElementSibling;
      const icon = btn.querySelector('.faq-icon');
      answer.classList.toggle('open');
      icon.classList.toggle('rotate');
    });
  });

  const nama = document.getElementById("input-nama").value.trim();
  const email = document.getElementById("input-email").value.trim();
  const pesan = document.getElementById("input-pesan").value.trim();

  // Validasi kosong
  if (!nama || !email || !pesan) {
    showToastError("Kolom nya harus diisi semua dong!");
    return;
  }

  // Validasi email mengandung "@"
  if (!email.includes("@")) {
    showToastError("Email harus valid dan mengandung '@'");
    return;
  }

  const url = `${BASE_URL}/remote/report?nama=${encodeURIComponent(nama)}&email=${encodeURIComponent(email)}&pesan=${encodeURIComponent(pesan)}`;

  try {
    const res = await fetch(url);
    if (res.ok) {
      showToast("Berhasil Mengirim Laporan!");
      document.getElementById("input-nama").value = '';
      document.getElementById("input-email").value = '';
      document.getElementById("input-pesan").value = '';
    } else {
      showToastError("Oopss.. ada sesuatu yang salah nih...");
    }
  } catch (err) {
    showToastError("Terjadi kesalahan saat mengirim.");
  }
});

// Inisialisasi FAQ toggle di luar event klik 'kirim'
document.querySelectorAll('.faq-question').forEach((btn) => {
  btn.addEventListener('click', () => {
    const answer = btn.nextElementSibling;
    const icon = btn.querySelector('.faq-icon');
    answer.classList.toggle('open');
    icon.classList.toggle('rotate');
  });
});

// Toast
function showToast(message) {
  const toastContainer = document.getElementById("toast-container");
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerText = message;
  toastContainer.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 3000);
}

function showToastError(message) {
  const toastContainer = document.getElementById("toast-container");
  const toast = document.createElement("div");
  toast.className = "toast-error";
  toast.innerText = message;
  toastContainer.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 3000);
}

document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".card");

    function checkScroll() {
        const triggerBottom = window.innerHeight * 0.85; // Muncul saat 85% viewport
        const triggerTop = window.innerHeight * 0.15; // Hilang saat 15% viewport

        cards.forEach(card => {
            const cardTop = card.getBoundingClientRect().top;
            const cardBottom = card.getBoundingClientRect().bottom;

            if (cardTop < triggerBottom && cardBottom > triggerTop) {
                card.classList.add("show");
                card.classList.remove("hide");
            } else {
                card.classList.remove("show");
                card.classList.add("hide");
            }
        });
    }

    window.addEventListener("scroll", checkScroll);
    checkScroll(); // Jalankan saat halaman pertama kali dimuat
});

// Feather icon
feather.replace();