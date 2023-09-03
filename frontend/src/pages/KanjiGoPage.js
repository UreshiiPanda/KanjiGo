import React from 'react';


function KanjiGoPage( {jlpt, kanji, setKanjis, roman, setRoman, hinted, setHinted, imageTxt, setImageTxt, imageURL, setImageURL} ) {

    const toggleRomaji = () => {
        setRoman(!roman);
    }

    const toggleHint = () => {
        setHinted(!hinted);
    }

    const handleImage = async () => {
        const response = await fetch(`/get/img/${imageTxt}`, { method: 'GET' });
	const url_res = await response.json();
	if (response.ok) {
	    console.log(`Dall-E image URL successfully retrieved from OpenAI: ${url_res}`);
	} else {
	    console.error(`Failed to retrieve Dall-E image URL from OpenAI: ${url_res}`);
	}
	setImageURL(url_res);
    }


    if (imageURL === "default URL") {
        if (!roman && !hinted) {
        return (
            <div className='go-div'>
                <div className="titles-div">
                    <h2 className='title-kanji'>Kanji Go</h2>
                    <h2 className='title-jlpt'>JLPT {jlpt}</h2>
                </div>
                
                <div className="main-kanji-char">
                    {kanji.kanji}    
                </div>

                <div className="titles-div">
                    <button className="romaji-hint-button" onClick={() => toggleRomaji()}>Romaji</button>
                    <button className="romaji-hint-button" onClick={() => toggleHint()}>Hint</button>
                </div>

                <div className="gen-image-div">
                    <input
                        className="dalle-input"
                        type="text"
                        name="dalleInput"
                        placeholder='Input Dall-E Image Text for your Kanji'
                        value={imageTxt}
                        onChange={e => setImageTxt(e.target.value)}  
                        id="dalleInput"
                    />
                    <button className="gen-image-button" onClick={() => handleImage()}>Generate Image</button>
                </div>
            </div>
        );
        }
        else if (roman && !hinted) {
            return (
                <div className='go-div'>
                    <div className="titles-div">
                        <h2 className='title-kanji'>Kanji Go</h2>
                        <h2 className='title-jlpt'>JLPT {jlpt}</h2>
                    </div>
                    
                    <div className="main-kanji-char">
                        {kanji.kanji}
                    </div>
        
                    <div className="titles-div">
                        <p className='unvieled'>{kanji.romaji}</p>
                        <button className="romaji-hint-button" onClick={() => toggleHint()}>Hint</button>
                    </div>

                    <div className="gen-image-div">
                        <input
                            className="dalle-input"
                            type="text"
                            name="dalleInput"
                            placeholder='Input Dall-E Image Text for your Kanji'
                            value={imageTxt}
                            onChange={e => setImageTxt(e.target.value)}  
                            id="dalleInput"
                        />
                        <button className="gen-image-button" onClick={() => handleImage()}>Generate Image</button>
                    </div>
                </div>
            );
        }
        else if (!roman && hinted) {
            return (
                <div className='go-div'>
                    <div className="titles-div">
                        <h2 className='title-kanji'>Kanji Go</h2>
                        <h2 className='title-jlpt'>JLPT {jlpt}</h2>
                    </div>
                    
                    <div className="main-kanji-char">
                        {kanji.kanji}
                    </div>
        
                    <div className="titles-div">
                        <button className="romaji-hint-button" onClick={() => toggleRomaji()}>Romaji</button>
                        <p className='unvieled'>{kanji.hint}</p>
                    </div>

                    <div className="gen-image-div">
                        <input
                            className="dalle-input"
                            type="text"
                            name="dalleInput"
                            placeholder='Input Dall-E Image Text for your Kanji'
                            value={imageTxt}
                            onChange={e => setImageTxt(e.target.value)}  
                            id="dalleInput"
                        />
                        <button className="gen-image-button" onClick={() => handleImage()}>Generate Image</button>
                    </div>
                </div>
            );
        } else {
            return (
                <div className='go-div'>
                    <div className="titles-div">
                        <h2 className='title-kanji'>Kanji Go</h2>
                        <h2 className='title-jlpt'>JLPT {jlpt}</h2>
                    </div>
                    
                    <div className="main-kanji-char">
                        {kanji.kanji}
                    </div>
        
                    <div className="titles-div">
                        <p className='unvieled'>{kanji.romaji}</p>
                        <p className='unvieled'>{kanji.hint}</p>
                    </div>

                    <div className="gen-image-div">
                        <input
                            className="dalle-input"
                            type="text"
                            name="dalleInput"
                            placeholder='Input Dall-E Image Text for your Kanji'
                            value={imageTxt}
                            onChange={e => setImageTxt(e.target.value)}  
                            id="dalleInput"
                        />
                        <button className="gen-image-button" onClick={() => handleImage()}>Generate Image</button>
                    </div>
                </div>
            );
        }
    }
    else {
        if (!roman && !hinted) {
            return (
                <div className='go-div'>
                    <div className="titles-div">
                        <h2 className='title-kanji'>Kanji Go</h2>
                        <h2 className='title-jlpt'>JLPT {jlpt}</h2>
                    </div>
                    
                    <div className="main-kanji-char-with-image">
                            <p className='the-actual-kanji'>{kanji.kanji}</p>
                            <img className="ai-image" alt="kanji image" src={imageURL}></img>
                        </div>
    
                    <div className="titles-div">
                        <button className="romaji-hint-button" onClick={() => toggleRomaji()}>Romaji</button>
                        <button className="romaji-hint-button" onClick={() => toggleHint()}>Hint</button>
                    </div>

                    <div className="gen-image-div">
                        <input
                            className="dalle-input"
                            type="text"
                            name="dalleInput"
                            placeholder='Input Dall-E Image Text for your Kanji'
                            value={imageTxt}
                            onChange={e => setImageTxt(e.target.value)}  
                            id="dalleInput"
                        />
                        <button className="gen-image-button" onClick={() => handleImage()}>Generate Image</button>
                    </div>
                </div>
            );
        }
        else if (roman && !hinted) {
            return (
                <div className='go-div'>
                    <div className="titles-div">
                        <h2 className='title-kanji'>Kanji Go</h2>
                        <h2 className='title-jlpt'>JLPT {jlpt}</h2>
                    </div>
                    
                    <div className="main-kanji-char-with-image">
                        <p className='the-actual-kanji'>{kanji.kanji}</p>
                        <img className="ai-image" alt="kanji image" src={imageURL}></img>
                    </div>
        
                    <div className="titles-div">
                        <p className='unvieled'>{kanji.romaji}</p>
                        <button className="romaji-hint-button" onClick={() => toggleHint()}>Hint</button>
                    </div>

                    <div className="gen-image-div">
                        <input
                            className="dalle-input"
                            type="text"
                            name="dalleInput"
                            placeholder='Input Dall-E Image Text for your Kanji'
                            value={imageTxt}
                            onChange={e => setImageTxt(e.target.value)}  
                            id="dalleInput"
                        />
                        <button className="gen-image-button" onClick={() => handleImage()}>Generate Image</button>
                    </div>
                </div>
            );
        }
        else if (!roman && hinted) {
            return (
                <div className='go-div'>
                    <div className="titles-div">
                        <h2 className='title-kanji'>Kanji Go</h2>
                        <h2 className='title-jlpt'>JLPT {jlpt}</h2>
                    </div>
                    
                    <div className="main-kanji-char-with-image">
                        <p className='the-actual-kanji'>{kanji.kanji}</p>
                        <img className="ai-image" alt="kanji image" src={imageURL}></img>
                    </div>
        
                    <div className="titles-div">
                        <button className="romaji-hint-button" onClick={() => toggleRomaji()}>Romaji</button>
                        <p className='unvieled'>{kanji.hint}</p>
                    </div>

                    <div className="gen-image-div">
                        <input
                            className="dalle-input"
                            type="text"
                            name="dalleInput"
                            placeholder='Input Dall-E Image Text for your Kanji'
                            value={imageTxt}
                            onChange={e => setImageTxt(e.target.value)}  
                            id="dalleInput"
                        />
                        <button className="gen-image-button" onClick={() => handleImage()}>Generate Image</button>
                    </div>
                </div>
            );
        } else {
            return (
                <div className='go-div'>
                    <div className="titles-div">
                        <h2 className='title-kanji'>Kanji Go</h2>
                        <h2 className='title-jlpt'>JLPT {jlpt}</h2>
                    </div>
                    
                    <div className="main-kanji-char-with-image">
                        <p className='the-actual-kanji'>{kanji.kanji}</p>
                        <img className="ai-image"  alt="kanji image" src={imageURL}></img>
                    </div>
        
                    <div className="titles-div">
                        <p className='unvieled'>{kanji.romaji}</p>
                        <p className='unvieled'>{kanji.hint}</p>
                    </div>

                    <div className="gen-image-div">
                        <input
                            className="dalle-input"
                            type="text"
                            name="dalleInput"
                            placeholder='Input Dall-E Image Text for your Kanji'
                            value={imageTxt}
                            onChange={e => setImageTxt(e.target.value)}  
                            id="dalleInput"
                        />
                        <button className="gen-image-button" onClick={() => handleImage()}>Generate Image</button>
                    </div>
                </div>
            );
        }
    }

}

export default KanjiGoPage;
