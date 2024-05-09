function getCharacterInfo() {
    const characterInput = document.getElementById('characterName')
    const infoCharacter = document.getElementById('infoCharacter')

    const characterName = characterInput.value.toLowerCase()
    fetch(`http://localhost:3000/characters/${characterName}`)
        .then(response => response.json())
        .then(data => {
            const {name, status, species, gender, origin, image} = data
            infoCharacter.innerHTML= `<h2>${name}</h2>
            <img src="${image}" alt="${name}" />
            <p>Status: ${status}</p>
            <p>Especie: ${species}</p>
            <p>Género: ${gender}</p>
            <p>Origen: ${origin.name}</p>
            `
        })
        .catch(error => infoCharacter.innerHTML = `<p>Imposible acceder al personaje</p>`)
}
