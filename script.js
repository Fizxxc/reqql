        document.getElementById("formRequest").addEventListener("submit", function(event) {
            event.preventDefault();
            
            let nama = document.getElementById("nama").value;
            let lagu = document.getElementById("lagu").value;
            let artis = document.getElementById("artis").value;
            let botToken = "7604337358:AAFitWVGj2UA3jCJ38ymVDwE12IS9IX3CIo"; // Ganti dengan token bot Telegram
            let chatId = "6450551010"; // Ganti dengan chat ID admin
            
            let message = `🎵 Request Lagu Baru:%0A👤 Nama: ${nama}%0A🎶 Lagu: ${lagu}%0A🎤 Artis: ${artis}`;
            let url = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${message}`;
            
            Swal.fire({
                title: 'Mengirim...',
                text: 'Mohon tunggu sebentar',
                timer: 5000,
                showConfirmButton: false,
                allowOutsideClick: false,
                willOpen: () => {
                    Swal.showLoading();
                }
            });
            
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    Swal.fire({
                        icon: 'success',
                        title: 'Request Berhasil!',
                        text: 'Lagu sudah terkirim.',
                        confirmButtonColor: '#ff4757'
                    });
                    document.getElementById("formRequest").reset();
                })
                .catch(error => {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Gagal mengirim request. Coba lagi!',
                        confirmButtonColor: '#ff4757'
                    });
                });
        });
