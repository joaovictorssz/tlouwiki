import './styles.css'

import {Character} from '../../types/Character'

import {useContext} from 'react'
import { CurrentCharacter } from '../../contexts/CurrentCharacter'


export default function CharacterInfo(){
    const {currentCharacter} = useContext(CurrentCharacter)
    return(
        <div id='characater_info-container'>
            <header id='head'>
                <img width={'150px'} src={`${currentCharacter?.img}`} alt="character picture" />
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