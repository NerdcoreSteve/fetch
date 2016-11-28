require('whatwg-fetch')

document.querySelector('#clickit').onclick = () =>
    fetch('/ajax', {
        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            data: {
                message: 'You are a penguin'
            }
        })
    })
    .then(function(response) {
        return response.json()
    }).then(function(json) {
        console.log('parsed json', json)
    }).catch(function(ex) {
        console.log('parsing failed', ex)
    })
