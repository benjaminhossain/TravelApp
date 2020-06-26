import { getCoordinates } from './js/getCoordinates'
import { formChecker } from './js/formChecker'
import { handleSubmit } from './js/formHandler'
import { performAction } from './js/performAction'

window.addEventListener('load', function (event) {
    performAction();
});

export { 
    getCoordinates,
    formChecker,
    handleSubmit,
    performAction
 }
