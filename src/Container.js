import React, { useState, useEffect } from 'react';
import data from './data/data';

const Container = () => {

    const [dataCat, setDataCat] = useState(data);
    const [cat1, setCat1] = useState('');
    const [cat2, setCat2] = useState('');

    useEffect(() => {
        const newDataCat = data.map(image => {
            image.score = 0;
            return image;
        })
        setDataCat(newDataCat)

        const indexCat1 = Math.floor(Math.random() * dataCat.length);
        const indexCat2 = Math.floor(Math.random() * dataCat.length);

        setCat1(newDataCat[indexCat1])
        setCat2(newDataCat[indexCat2])


    }, [])



    const getRandomCAtandScore = (id) => {
        // console.log(id)
        let copyDataCat = [...dataCat];
        let index = copyDataCat.findIndex(Element => Element.id === id)
        copyDataCat[index] = { ...copyDataCat[index], score: copyDataCat[index].score + 1 }
        setDataCat(copyDataCat)

        console.log(dataCat)

        const indexCat1 = Math.floor(Math.random() * dataCat.length);
        const indexCat2 = Math.floor(Math.random() * dataCat.length);

        setCat1(dataCat[indexCat1])
        setCat2(dataCat[indexCat2])
    }

    return (


        <div className="App">
            <div className="App-header">
                <div style={{ display: "flex", cursor: "pointer" }}>
                    <div style={{ marginRight: 40 }}>
                        <img src={cat1.url} alt="logo" style={{ width: 140, height: 160 }} class="img-thumbnail" onClick={_ => getRandomCAtandScore(cat1.id)} />
                        <p> score: {cat1.score} </p>
                    </div>
                    <div>
                        <img src={cat2.url} alt="logo" style={{ width: 140, height: 160 }} class="img-thumbnail" onClick={_ => getRandomCAtandScore(cat2.id)} />
                        <p> score: {cat2.score} </p>
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