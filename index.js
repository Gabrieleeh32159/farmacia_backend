const DATA = [
    {
        "id": 0,
        "name": "Paracetamol",
        "imageUrl": "https://cdn.shopify.com/s/files/1/0579/1947/1767/products/9342026347_345x@2x.png?v=1654017776",
        "price": 3.5,
        "quantity": 50
    },
    {
        "id": 1,
        "name": "Betametasona",
        "imageUrl": "https://drogueriascomfenalco.com/image/cache/catalog/FOTOS/LINEA%20GENERICA(VENTA%20LIBRE)/GENFAR/betametasona_5105-0106-600x600.png",
        "price": 3.5,
        "quantity": 50
    },
    {
        "id": 2,
        "name": "Hisaler",
        "imageUrl": "https://www.bago.com.pe/uploads/fotos-de-productos/32-hisaler-jarabe.png",
        "price": 15,
        "quantity": 50
    },
    {
        "id": 3,
        "name": "Ibuprofeno",
        "imageUrl": "https://www.life.com.ec/wp-content/uploads/2022/02/IBUPROFENO_200_DOLOR_ESPALDA_CABEZA_GARGANTA_CONTRACTURA_GENERICOS_GENAMERICA.png",
        "price": 1,
        "quantity": 50
    },
    {
        "id": 4,
        "name": "Nastiflu",
        "imageUrl": "https://images.squarespace-cdn.com/content/v1/552c178de4b0d20d05487129/1435684186381-XIS20S9IZI8R5U5OMV5C/nastiflu.png",
        "price": 2,
        "quantity": 50
    }
]

const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const app = express()

app.use(cors())
app.use(morgan('dev'))

app.get('/', (req, res) => {
    res.send("<strong><h1>Hello World</h1></strong>")
})

app.get('/farmacos', (req, res) => {
    const id = req.query.id
    const name = req.query.name
    const price = req.query.price

    ndata = DATA

    if (id) {
        ndata = ndata.filter((ob) => (ob.id == id))
    }

    if (name) {
        ndata = ndata.filter((ob) => (ob.name == name))
    }

    if (price) {
        ndata = ndata.filter((ob) => (ob.price < price))
    }

    res.json({
        "farmacos": DATA
    })

})

app.delete('/farmacos/:farmacoId', (req, res) => {
    DATA = DATA.filter((obj) => (obj.id != farmacoId))
    res.json({
        "data": DATA
    })
})

app.patch('farmacos/:farmacoId', (req, res) => {
    
})

app.use((req, res) => {
    res.status(404).send("Your page was not found :(")
})

const PORT = 3000
app.listen(PORT)
console.log(`Server on port ${PORT}`)