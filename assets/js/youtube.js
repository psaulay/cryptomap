
/**** **** **** **** **** **** **** ****
 > EVENTS
**** **** **** **** **** **** **** ****/

const eventHashtags = () => {

  const hashtags = document.querySelectorAll('.hashtag')

  hashtags.forEach(hashtag => {

    hashtag.addEventListener('click', () => {

      post(hashtag.value, done)

    })

  })

}

/**** **** **** **** **** **** **** ****
 > POST
**** **** **** **** **** **** **** ****/

const post = (data, cb) => {

  const XHR = new XMLHttpRequest()

  XHR.open('POST', `${window.location.href}`)

  XHR.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')

  XHR.send(`hashtag=${data}`)

  XHR.onreadystatechange = () => {

    if(XHR.readyState === 4 && XHR.status === 200) {

      const container = document.querySelector('.row-content')
      container.innerHTML = ''
      container.innerHTML = XHR.responseText

      // document.querySelector('.row-videos').insertAdjacentHTML('beforebegin', XHR.responseText)

      // const parsed = JSON.parse(XHR.responseText)
      //
      // if(parsed.notification)
      //   document.querySelector('.row-videos').insertAdjacentHTML('beforebegin', parsed.notification)
      // else
      //   cb(parsed.videos)

    }

  }

}

/**** **** **** **** **** **** **** ****
 > CALLBACKS
**** **** **** **** **** **** **** ****/

const done = notification => {



}

/**** **** **** **** **** **** **** ****
 > INIT
**** **** **** **** **** **** **** ****/

const init = function() {

  eventHashtags()

}()
