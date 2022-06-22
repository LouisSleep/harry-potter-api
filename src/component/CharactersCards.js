import React from 'react'


export default function CharactersCards(props) {
    return (
        <div className={props.housesss}>

            <h2>{props.name_char}</h2>

            <div className='img-conteneur'><img id='profile-picture' src={props.img} alt="" /></div>
            <table className='desciption-card'>
                <tbody>
                    <tr>
                        <td className='title'>Birth : </td>
                        <td className='response'>{props.birth}</td>
                    </tr>
                    <tr>
                        <td className='title'>Ancestry : </td>
                        <td className='response'>{props.ancestry}</td>
                    </tr>
                    <tr>
                        <td className='title'>Gender : </td>
                        <td className='response'>{props.gender}</td>
                    </tr>
                    <tr>
                        <td className='title'>Patronus : </td>
                        <td className='response'>{props.patronus}</td>
                    </tr>

                    <tr>
                        <td className='title'>Actor : </td>
                        <td className='response'>{props.actor}</td>
                    </tr>

                </tbody>
            </table>
            <h4>{props.housesss}</h4>
            <div className='logo-card' id={props.housesss}></div>



        </div>
    )
}

