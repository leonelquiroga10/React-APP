import React, { useEffect, useState } from 'react'
import Card from './Card'
import RickAndMortyService from '../../services/RickAndMorty.service';


const Cards = () => {
    const [mascotas, setMascotas] = useState([]);

    useEffect(() => {

        RickAndMortyService.getallCharacters()
            .then((data) => setMascotas(data.results))
            .catch((error) => console.log(error));
    }, [mascotas])


    const cardsList = mascotas.map((m) => <Card mascota={m} key={m.id} />)


    return (
        <div className="album py-5 bg-body-tertiary">
            <div className="container">

                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                    {cardsList}
                </div>
            </div>
        </div>

    )
}

export default Cards
