const
    express = require('express'),
    body_parser = require('body-parser'),
    app = express()

app.use(express.static('public'))  

app.set('view engine', 'pug')

app.use(body_parser.urlencoded({extended: false}))  
app.use(body_parser.json())

app.get('/', function (req, res) {  
    res.render('index')
})

app.post('/ajax', function (req, res) {  
    const data = JSON.parse(req.body.data)
    res.json({
        message:
            `This comes from an AJAX POST call! The message sent to the server was "${data.message}" `
    })
})

app.listen(3000, function () {  
    console.log('Example app listening on port 3000!')
})
