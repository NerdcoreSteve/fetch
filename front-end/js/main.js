const
    R = require('ramda'),
    fetch = require('fetch-polyfill'),
    Promise = require('es6-promise-polyfill').Promise

    console.log(fetch)

const ajax_call = options =>
    () => {
        const request = new XMLHttpRequest()

        request.open(
            options.request_type,
            options.url,
            true)

        request.setRequestHeader(
            'Content-Type',
            'application/x-www-form-urlencoded;'
                + 'charset=UTF-8')

        request.onload = function () {
            if (this.status >= 200
                && this.status < 400) {

                const data = JSON.parse(this.response)
                options.success(data)
            } else {
                options.failure()
            }
        }

        request.onerror = options.failure

        if(options.data) {
            request.send('data=' + JSON.stringify(options.data))
        } else {
            request.send()
        }

    }

document.querySelector('#clickthis').onclick =
    ajax_call({
        request_type: 'POST',
        url: '/ajax',
        failure: () => console.err('Something\'s gone wrong'),
        success: data => document.querySelector('#message').innerHTML = data.message,
        data: {
            message: 'Bananas are my friends'
        }
    })

document.querySelector('#clickthat').onclick = () =>
    fetch('/ajax').then(function(data) {
        document.querySelector('#message').innerHTML = data.message
    })
