//Event Listener
const performAction = () => {
    const submit = document.getElementById('submit')
    submit.addEventListener('click', Client.handleSubmit)
}

export { performAction }