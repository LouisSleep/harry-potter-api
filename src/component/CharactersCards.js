import React from 'react'


export default function CharactersCards(props) {
    return (
        <div className={props.housesss}>
            <div id={props.housesss}></div>
            <h2>{props.name_char}</h2>
            <h4>{props.housesss}</h4>
            <img src={props.img} alt="" />
        </div>
    )
}

