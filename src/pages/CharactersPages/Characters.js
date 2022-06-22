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


        <div className='main-content'>

            <div className='card-list'>
                {
                    characters.slice(0, 50).map((item, index) => {
                        if (item.house !== "" && item.image !== "" || item.house !== "" && item.image !== "" && item.birth !== "") {
                            return (
                                <CharactersCards
                                    key={index}
                                    name_char={item.name}
                                    housesss={item.house}
                                    img={item.image}
                                    birth={item.dateOfBirth}
                                    ancestry={item.ancestry}
                                    patronus={item.patronus}
                                    gender={item.gender}
                                    actor={item.actor}

                                />
                            )

                        }
                        else if (item.house === "" && item.image === "" || item.house === "" || item.image === "") {

                        }
                        else if (item.house !== "" && item.image !== "" || item.house !== "" && item.image !== "" || item.dateOfBirth === "" && item.house !== "" && item.image !== "") {
                            return (
                                <CharactersCards
                                    key={index}
                                    name_char={item.name}
                                    housesss={item.house}
                                    img={item.image}
                                    birth={'na'}
                                    ancestry={item.ancestry}

                                />
                            )
                        }

                    }

                    )
                }
            </div>




        </div>

    )
}




