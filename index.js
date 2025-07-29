function contact(event) {
  event.preventDefault();
  const loading = document.querySelector(".modal__overlay--loading");
  const success = document.querySelector(".modal__overlay--success");
  loading.classList += " modal__overlay--visible";

  emailjs
    .sendForm(
      "service_0acvkum",
      "template_ref0d6d",
      event.target,
      "T2E3orv5NDS7LjDya"
    )
    .then(() => {
      loading.classList.remove("modal__overlay--visible");
      success.classList += " modal__overlay--visible";
    })
    .catch(() => {
      loading.classList.remove("modal__overlay--visible");
      alert(
        "The email service is temporarily unavailable. Please contact me directly on ssjmaceo@gmail.com"
      );
    });
}

let isModalOpen = false
function toggleModal() {
    if (isModalOpen) {
        isModalOpen = false
        return document.body.classList.remove ('modal__open')
    }
    isModalOpen = true
    document.body.classList += ' modal__open'
}

let contrastToggle = false
function toggleContrast() {
    contrastToggle = !contrastToggle
    if (contrastToggle) {
        document.body.classList += ' dark-mode'
    }
    else {
        document.body.classList.remove('dark-mode')
    }
}

const scaleFactor = 1 / 20
function moveBackground(event) {
    const shapes = document.querySelectorAll('.shape')
    const x = event.clientX * scaleFactor
    const y = event.clientY * scaleFactor
    
    for (let i = 0; i < shapes.length; ++i) {
        const isOdd = i % 2 !==0
        const bollInt = isOdd ? -1 : 1
        shapes[i].style.transform = `translate(${x * bollInt}px, ${y * bollInt}px)`
    }
}