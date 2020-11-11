import React, { useState } from 'react';
import images from './data/data';

const Container = () => {

    const [dataImage, setdataImaga] = useState(images)

    const [stateUrl1, setStateUrl1] = useState(images[0].url)
    const [stateUrl2, setStateUrl2] = useState(images[1].url)

    const [stateScore1, setStateScore1] = useState(0)
    const [stateScore2, setStateScore2] = useState(0)


    const [stateId1, setStateId1] = useState(images[0].id)
    const [stateId2, setStateId2] = useState(images[1].id)


    const randomImg = (id) => {

        const newData = images.map(image => {
            image.score = 0;
            return image;
        })
        setdataImaga(newData)

        console.log(id)
        let copyData = [...dataImage]
        let index = copyData.findIndex(Element => Element.id === id)
        console.log(copyData[index])

        copyData[index] = { ...copyData[index], score: copyData[index].score + 1 }
        console.log(copyData[index])
        setdataImaga(copyData)



        const urlRandom = Math.floor(Math.random() * copyData.length);
        const url1 = copyData[urlRandom];


        const urlRandom1 = Math.floor(Math.random() * copyData.length);
        const url2 = copyData[urlRandom1];

        setStateUrl1(url1.url)
        setStateUrl2(url2.url)

        setStateId1(url1.id)
        setStateId2(url2.id)

        setStateScore1(url1.score)
        setStateScore2(url2.score)




    }


    return (


        <div className="App">
            <div className="App-header">
                <div style={{ display: "flex", cursor: "pointer" }}>
                    <div style={{ marginRight: 40 }}>
                        <img src={stateUrl1} alt="logo" style={{ width: 140, height: 160 }} class="img-thumbnail" onClick={_ => randomImg(stateId1)} />
                        <p>id: {stateId1}  </p>
                        <p> sciore : {stateScore1}</p>
                    </div>
                    <div>
                        <img src={stateUrl2} alt="logo" style={{ width: 140, height: 160 }} class="img-thumbnail" onClick={_ => randomImg(stateId2)} />
                        <p>id: {stateId2}  </p>
                        <p> sciore : {stateScore2}</p>
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