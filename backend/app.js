const express = require('express')
const axios = require('axios')
const app = express()
const url = "https://rickandmortyapi.com/api/character"
const port = 3000
const cors = require('cors')
app.use(cors())

app.get('/characters', async (req, res) => {
    try {
        const response = await axios.get(url)
        req.charactersInfo = response.data
        res.json(response.data.results)
    }catch (ERROR){
        res.status(404).json({error: 'Personajes no encontrados'})
    }
})

app.get('/characters/:characterId', async (req, res) => {
    const characterName = req.params.characterId
    try {
        const response = await axios.get(url)
        const characterInfo = response.data.results.find(({ name }) => name.toLowerCase() === characterName.toLowerCase())
        res.json(characterInfo)
    }catch (ERROR){
        res.status(404).json({error: 'Personaje no encontrado'})
    }
})

app.listen(port, () => {
    console.log('Server on')
})


