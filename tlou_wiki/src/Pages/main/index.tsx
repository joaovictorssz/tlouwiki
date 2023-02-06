import './styles.css'

export default function Main(){

    function scrollToBottom(){
        let bottom = document.getElementById("wiki-container") as HTMLDivElement

        bottom.scrollIntoView({behavior: 'smooth'})
    }
    return(
        <div>
            <div id="extern">
                <div id='content'>
                    <section>
                        <h3>When you're lost in the darkness, look for the light.</h3>
                        <p>Meet the characters</p>
                    </section>
                    <button onClick={scrollToBottom}>Characters</button>
                </div>
            </div>
        </div>
    )
}