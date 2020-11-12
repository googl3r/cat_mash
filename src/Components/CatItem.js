import React from 'react';

const CatItem = ({ cats }) => {


    console.log('dataCats: ', cats)

    return (

        <div className="card-deck">
            <div className="card">
                <img src="" className="card-img-top" alt="..." />

                <div className="card-footer">
                    <small className="text-muted"> score </small>
                </div>
            </div>
        </div>




    );
};

export default CatItem;