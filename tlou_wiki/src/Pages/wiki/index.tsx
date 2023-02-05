import './styles.css'

import axios from 'axios'
import {useState, useEffect} from 'react'
import CharacterItem from '../../Components/CharacterItem'

type DataType = {
    name: string,
    age: number,
    gender: string,
    height: number,
    weight: number,
    img: string,
    description: string
}

export default function Wiki(){

    useEffect(()=>{
        axios.get('http://localhost:5050/tlouapi')
        .then((res)=>{
            setData(res.data)
        })
    }, [])


    const [data, setData] = useState<DataType[]>()

    useEffect(()=>{
        if(data && data?.length > 0){
            console.log(data)
        }
    }, [data])

    return(
        <div id="wiki-container">
            
            <section id='left'>
                {data?.map((a: any, b: number)=>{
                    return(<CharacterItem key={b} url={data[b].img}></CharacterItem>)
                })}
            </section>
            <section id="right">
                <p>Right hand</p>
            </section>

        </div>
    )
}