const express = require('express')
const app = express()

app.set("view engine", "ejs") // tem q esta semrpe dentro da pasta views

app.get("/", function (req, res){
    const items = [
        {   title: "M",
            message: "ensagem programada!"
        },
        {   title: "M",
            message: "ensagem programada!"
        },
        {   title: "M",
            message: "ensagem programada!"
        },
        {   title: "M",
            message: "ensagem programada!"
        }
        
    ]

    const subtitle = "EJS é uma linguagem de modelagem para a criação de paginas HTML utilizando o JS"
    res.render('pages/index', {
        qualitys: items,
        subtitle: subtitle
    })
})

app.get("/sobre", function (req, res){
    res.render('pages/about')
})

app.listen(8080)
console.log("Rodando")