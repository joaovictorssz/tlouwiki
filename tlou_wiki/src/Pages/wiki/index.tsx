import './styles.css'

import axios from 'axios'
import {useState, useEffect} from 'react'
import CharacterItem from '../../Components/CharacterItem'
import CharacterInfo from '../../Components/CharacterInfo'

import {Character} from '../../types/Character'

import { CurrentCharacter } from '../../contexts/CurrentCharacter'

export default function Wiki(){

    useEffect(()=>{
        axios.get('http://localhost:5050/tlouapi')
        .then((res)=>{
            setData(res.data)
        })
        .catch((err)=>{
            window.alert(`You may have to run the API - ${err}`)
        })
    }, [])


    const [data, setData] = useState<Character[]>()
    const [currentCharacter, setCurrentCharacter] = useState<Character>()
    useEffect(()=>{
        if(data && data?.length > 0){
            console.log(data)
        }
    }, [data])

    return(
        <CurrentCharacter.Provider value={{data, currentCharacter, setCurrentCharacter}}>
            <div id="wiki-container">
                
                <section id='left'>
                    <div>
                        {data?.map((a: any, b: number)=>{
                        return(<CharacterItem id={b} key={b} url={data[b].img}></CharacterItem>)
                    })}
                    </div>
                </section>
                <section id="right">
                    <CharacterInfo></CharacterInfo>
                </section>

            </div>
        </CurrentCharacter.Provider>
    )
}