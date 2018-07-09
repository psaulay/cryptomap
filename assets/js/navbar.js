
const hamburger = document.querySelector('#iHamburger')

hamburger.addEventListener('click', e => {

  const   mobile  = document.querySelector('#mobile')
        , display = window.getComputedStyle(mobile).getPropertyValue('display')

  display === 'block' ? mobile.style.display = 'none' : mobile.style.display = 'block'

})