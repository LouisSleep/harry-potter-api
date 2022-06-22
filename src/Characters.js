import React from 'react'

export default function Characters(props) {
    return (
        <div className={props.housesss}>
            <h2>{props.name_char}</h2>
            <h4>{props.housesss}</h4>
            <img src={props.img} alt="" />
        </div>
    )
}
