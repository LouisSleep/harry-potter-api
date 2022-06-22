import React, { useState, useEffect } from 'react'
import axios from 'axios'
import "./Characters.css";
import CharactersCards from '../../component/CharactersCards'


export default function Characters() {
    const [characters, setCharacters] = useState([])
    useEffect(() => {
        const getCharacters = async () => {
            const resp = await axios(
                `http://hp-api.herokuapp.com/api/characters`
            )

            setCharacters(resp.data)
            // const data = await resp.json()
            console.log(resp.data)
        }
        getCharacters()

    }, [])
    return (
        <>

            <div className='card-list'>
                {
                    characters.slice(0, 15).map((item, index) => (
                        <CharactersCards
                            key={index}
                            name_char={item.name}
                            housesss={item.house}
                            img={item.image}

                        />
                    ))
                }
            </div>




        </>
    )
}




