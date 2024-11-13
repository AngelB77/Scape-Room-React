import { useEffect } from "react";
import { useState } from "react";

const ShowCharacter = () => {
    const [characters, setCharacter] = useState([]);
    function getAllCharacters() {
        fetch('https://rickandmortyapi.com/api/character')
            .then(response => response.json())
            .then(data => {
                console.log(data.results)
                setCharacter(data.results)
            });
    }
    useEffect(() => {
        getAllCharacters()
    }, []);
    return (
        <>
            <h1>“Hola, soy el componente ShowCharacter”</h1>
            {
                characters.map((character) => (
                <div key={character.id}>
                <img src={character.image} alt={character.name} />
                <p>Nombre: {character.name}</p>
                <p>Especie: {character.species}</p>
                <p>Estado: {character.status}</p>
                </div>
                ))
            }
            
        </>
    );
};

export default ShowCharacter;