let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

 /*===============  =========== */

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');


        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active')
            });
     
        };
    });

 /*=============== sticky navbar =========== */
 
 let header = document.querySelector('header');

 header.classList.toggle('sticky', window.scrollY > 100 );

 /*===============  =========== */

 menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};


 /*===============  =========== */

 ScrollReveal({ 
    //reset: true,
    distance:'80px',
    duration: 2000,
    delay: 200 
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });

ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });

ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });

ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

function validasi() {
    var nama = document.getElementById("nama").value;
    var email = document.getElementById("email").value;
    var number = document.getElementById("number").value;
    var address = document.getElementById("address").value;
    var pesan = document.getElementById("pesan").value;
    if (nama != "" && email!="" && number !=""&& address !="" && pesan !="" ) {
        return true;
    }else{
        alert('Anda harus mengisi data dengan lengkap !');
    }
};



const scriptURL = "https://script.google.com/macros/s/AKfycbzTG172gaVBcIsE29LvX2lUxfnRgaQEG1Q_fmk92RuAm84miHDJ1gBhO1tFvVjTxhw/exec";
      const form = document.forms["contact"];
      const myAlert = document.querySelector(".my-alert");

      form.addEventListener("submit", (e) => {
        e.preventDefault();
        // ketika tombol submit diklik
        // tampilkan tombol loading, hilangkan tombol kirim
        fetch(scriptURL, { method: "POST", body: new FormData(form) })
          .then((response) => {
            // tampilkan tombol kirim, hilangkan tombol loading
            // tampilakn alert
            myAlert.classList.toggle("d-none");
            // reset formnya
            form.reset();
            console.log("Success!", response);
          })
          .catch((error) => console.error("Error!", error.message));
      });
    