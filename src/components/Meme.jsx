import React from "react";
import getNewImg from "../images/Get a new meme image.png"


function Meme() {
    const [meme, setMeme] = React.useState({topText: "You need to know", bottomText: "When to zip it", randomImage: "http://i.imgflip.com/1bij.jpg"})
    const [allMemes, setAllMemes] = React.useState([])

    React.useEffect(() => {
        fetch('https://api.imgflip.com/get_memes')
        .then((response) => response.json())
        .then((data) => setAllMemes(data.data.memes))
    }, [])
    
    function randomMemeImage() {
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        const randomMeme = allMemes[randomNumber]
        setMeme(prevMeme => {
            return {...prevMeme, randomImage: randomMeme.url}
        }); // number of images in the array
        
    }
    console.log(meme)
    function memeTextHandler(event) {
        const {name, value} = event.target
        setMeme((prevMeme) => {
            return {...prevMeme, [name]: value}
        })
    }
    return (
        <main id="meme-generator" className="row gap-2 justify-content-center mt-5"> 
            <div className="col-lg-12 col-12">
                <div className="row gap-2 justify-content-center mb-3 px-2">
                    <div className="col-lg-5 col-md-5 col-12">
                    <input className="w-100" type="text" placeholder="Shutup" onChange={memeTextHandler} name="topText"    value={meme.topText}/>
                    </div>
                    <div className="col-lg-5 col-md-5 col-12 ">
                    <input className="w-100" type="text" placeholder="and take my money" onChange={memeTextHandler} name="bottomText" value={meme.bottomText}/>
                    </div>
                </div>
                
            </div>
            <div className="col-lg-12 col-12 d-flex justify-content-center mb-3">
                <button id="meme--button" onClick={randomMemeImage} className="meme-form-button">
                    <img src={getNewImg} alt="get a new meme image" />
            </button>
            </div>
            <div className="meme col-lg-12 col-10 d-flex justify-content-center px-4">
                <img id="meme--image" src={meme.randomImage} className="rounded" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
    </main>
    )
}

export default Meme