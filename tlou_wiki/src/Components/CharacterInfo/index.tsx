import './styles.css'

import {Character} from '../../types/Character'

import {useEffect, useContext} from 'react'
import { CurrentCharacter } from '../../contexts/CurrentCharacter'


export default function CharacterInfo(){
    const {currentCharacter} = useContext(CurrentCharacter)

    useEffect(()=>{
        let header = (document.getElementById("head") as HTMLDivElement)
        header.style.setProperty('background', `url(${currentCharacter?.background})`)
        header.style.setProperty('background-size', 'cover')
        header.style.setProperty('background-repeat', 'no-repeat')
        
    }, [currentCharacter])
    
    return(
        <div id='characater_info-container'>
            <header id='head'>
                <p>{currentCharacter?.name}</p>
            </header>

            
            <div id='middle'>
                <hr />
                <code><strong>Gender:</strong> {currentCharacter?.gender}</code>
                <code><strong>Age:</strong> {currentCharacter?.age}</code>
                <code><strong>Height:</strong> {currentCharacter?.height}cm</code>
                <code><strong>Weight:</strong> {currentCharacter?.weight}kg</code>
                <hr />       
            </div>
            

            <main id='bottom'>
                <code><strong>Description:</strong> {currentCharacter?.description}</code>
            </main>
        </div>
    )
}