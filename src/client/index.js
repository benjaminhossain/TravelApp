import { getCoordinates } from './js/getCoordinates'
import { getWeather } from './js/getWeather'
import { getImage } from './js/getImage'
import { formChecker } from './js/formChecker'
import { handleSubmit } from './js/formHandler'
import { performAction } from './js/performAction'

window.addEventListener('load', function (event) {
    performAction();
});

export { 
    getCoordinates,
    getWeather,
    getImage,
    formChecker,
    handleSubmit,
    performAction
 }
