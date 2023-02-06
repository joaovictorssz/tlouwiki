import './styles.css'
import { useContext, useEffect } from 'react'
import { CurrentCharacter } from '../../contexts/CurrentCharacter'

type CharacterProps = {
    url: string,
    id: number
}

export default function CharacterItem(props: CharacterProps){

    const {data, setCurrentCharacter} = useContext(CurrentCharacter)

    
    useEffect(()=>{
        setCurrentCharacter(data[0])
    }, [])

    return(
        <img src={props.url} onClick={()=>{setCurrentCharacter(data[props.id])}}></img>
    )

}