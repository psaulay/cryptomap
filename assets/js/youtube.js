
/**** **** **** **** **** **** **** ****
 > EVENTS
**** **** **** **** **** **** **** ****/

const eventHashtags = () => {

  const hashtags = document.querySelectorAll('.hashtag')

  hashtags.forEach(hashtag => {

    hashtag.addEventListener('click', () => {

      post(hashtag.value)

    })

  })

}

/**** **** **** **** **** **** **** ****
 > POST
**** **** **** **** **** **** **** ****/

const post = data => {

  const XHR = new XMLHttpRequest()

  XHR.open('POST', `${window.location.href}`)

  XHR.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')

  XHR.send(`hashtag=${data}`)

  XHR.onreadystatechange = () => {

    if(XHR.readyState === 4 && XHR.status === 200) {

      const container = document.querySelector('.row-content')
      container.innerHTML = ''
      container.innerHTML = XHR.responseText

    }

  }

}

/**** **** **** **** **** **** **** ****
 > INIT
**** **** **** **** **** **** **** ****/

const init = function() {

  eventHashtags()

}()
