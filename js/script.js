import { getFilmsRequest } from './requests/requests.js'
const inputBtn = document.querySelector('#input-b')

inputBtn.addEventListener('click', getFilmsRequest())