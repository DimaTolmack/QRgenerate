
let wrapper = document.querySelector('.wrapper')
let qrInput = wrapper.querySelector('input')
let qrImage = wrapper.querySelector('img')
let generate =  wrapper.querySelector('#generate')
let showError = wrapper.querySelector('label')
let preInputValue;



generate.addEventListener('click', ()=>{
    let qrInputValue = qrInput.value
    if(!qrInputValue || preInputValue == qrInputValue) {
        return;
    }

    generate.innerText = 'Generate QR code.....'
    qrImage.src =  `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data= ${qrInputValue}`
    let imgLink = qrImage;
    console.log(imgLink)
    preInputValue = qrInputValue
  
})


qrImage.addEventListener('load', ()=>{
    wrapper.classList.add('active')
    setTimeout(()=>{
        generate.innerHTML = 'Generate QR code'
    }, 100)
})


qrInput.addEventListener('keyup', ()=>{
    if(!qrInput.value) {
        preInputValue = ""
        wrapper.classList.remove('active')
    }


    
    
})



