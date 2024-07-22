import { Contents } from './parts/contents'
import './style.css'

document.querySelectorAll('.l-main').forEach((el) => {
  new Contents({
    el: el,
  })
})


