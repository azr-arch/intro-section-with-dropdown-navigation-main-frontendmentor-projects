const mobileNavBtn = document.querySelector('.mobile-menu')
const mobileNavBar = document.querySelector('.navbar')



mobileNavBtn.addEventListener('click', () => {

    const status = mobileNavBtn.getAttribute('aria-expanded')
    console.log(status)

    if(status === 'false'){
        mobileNavBtn.setAttribute('aria-expanded', 'true')
        mobileNavBar.setAttribute('data-visibility', 'true')

    }else{
        mobileNavBtn.setAttribute('aria-expanded', 'false')
        mobileNavBar.setAttribute('data-visibility', 'false')
    }

    mobileNavBar.classList.toggle('active')
})
