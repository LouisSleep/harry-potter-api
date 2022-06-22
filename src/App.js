import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Characters from './Characters'
import './App.css'

export default function App() {
  const [characters, setCharacters] = useState()

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
      <h1>
        hello
      </h1>

      {
        characters.map((item,index) => (
          <Characters
            key={index}
            name_char={item.name}
            housesss={item.house}
            img={item.image}

          />
        ))
      }



    </>
  )
}
