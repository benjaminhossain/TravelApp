import { getCoordinates } from './js/getCoordinates'
import { formChecker } from './js/formChecker'
import { handleSubmit } from './js/formHandler'
import { performAction } from './js/performAction'

window.addEventListener('load', (event) => {
    console.log('page loaded')
    performAction();
});

export { 
    getCoordinates,
    formChecker,
    handleSubmit,
    performAction
 }
