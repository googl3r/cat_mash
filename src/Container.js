import React, { useEffect } from 'react';

const Container = () => {

    const url = 'https://latelier.co/data/cats.json';
    const requestOptions = {
        method: 'GET',
        mode: 'no-cors',
        headers: {
            'content-type': 'application/json'
        }

    };


    const getImgCat = () => {
        console.log("ok")
        fetch(url, requestOptions)
            .then(response => response.json())
            .then(responseData => console.log(responseData))
            .catch(error => console.log(error))

    }


    useEffect(() => {
        getImgCat()
    })
    return (

        <div className="App">
            <div className="_title">
                <h6>Le chat le plus mingon</h6>
            </div>
            <div className="App-header">
                <div>

                    <img src="./media/chaton-errant-768x512.jpeg" alt="logo" />
                    <img src="./media/chaton-errant-768x512.jpeg" alt="logo" />

                </div>
                <p>
                    Cliquez sur le chat plus migon pour voter.
                    </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Copy Right Ibrahima Thiam
                    </a>
            </div>
        </div>

    );
};

export default Container;