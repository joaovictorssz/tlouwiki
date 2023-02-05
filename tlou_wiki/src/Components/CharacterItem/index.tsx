import './styles.css'

type CharacterProps = {
    url: string
}

export default function CharacterItem(props: CharacterProps){

    return(
        <img src={props.url}></img>
    )

}