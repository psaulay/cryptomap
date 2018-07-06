const hamburger = document.querySelector('#iHamburger')

hamburger.addEventListener('click', e => {

  const   ulMobile = document.querySelector('#ul-mobile')
        , display  = window.getComputedStyle(ulMobile).getPropertyValue('display')

  display === 'block' ? ulMobile.style.display = 'none' : ulMobile.style.display = 'block'

})