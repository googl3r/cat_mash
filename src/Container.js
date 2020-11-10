import React, { useState, useEffect } from 'react';
import images from './data/data';

const Container = () => {
    const dataCat = [];
    const [stateDataCat, setDataCat] = useState('')


    useEffect(() => {
        images.forEach((image) => dataCat.push({ score: 0, url: image.url, id: image.id }))
        console.log(dataCat)
        setDataCat(dataCat)
        console.log(stateDataCat[0].url)
    }, [])







    const randomImg = () => {
        const urlRandom = Math.floor(Math.random() * images.length);
        const url1 = images[urlRandom];

        // console.log(images[urlRandom]);
        // console.log(images[urlRandom].url);
        // console.log(images[urlRandom].id);

        const urlRandom1 = Math.floor(Math.random() * images.length);
        const url2 = images[urlRandom1]

        // console.log(images[urlRandom1]);
        // console.log(images[urlRandom1].url);
        // console.log(images[urlRandom1].id);

        setStateUrl1(url1.url)
        setStateUrl2(url2.url)

        setStateId1(url1.id)
        setStateId2(url2.id)

    }



    const [stateUrl1, setStateUrl1] = useState(images[0].url)
    const [stateUrl2, setStateUrl2] = useState(images[1].url)

    const [stateId1, setStateId1] = useState(images[0].id)
    const [stateId2, setStateId2] = useState(images[1].id)

    const [score, setScore] = useState(0)

    return (


        <div className="App">
            <div className="App-header">
                <div style={{ display: "flex", cursor: "pointer" }}>
                    <div style={{ marginRight: 40 }}>
                        <img src={stateUrl1} alt="logo" style={{ width: 140, height: 160 }} class="img-thumbnail" onClick={randomImg} />
                        <p>Score: {stateId1}</p>
                    </div>
                    <div>
                        <img src={stateUrl2} alt="logo" style={{ width: 140, height: 160 }} class="img-thumbnail" onClick={randomImg} />
                        <p>Score: {stateId2} </p>
                    </div>

                </div>
                <p className="text">
                    Cliquez sur la photo pour voter pour le chat le plus migon
                    </p>
                <a
                    className="App-link"
                    href="https://www.thiamibrahima.dev/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Copy Right Ibrahima Thiam 2020
                    </a>
            </div>
        </div>

    );
};

export default Container;