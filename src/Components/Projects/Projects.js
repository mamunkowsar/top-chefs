import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Details from '../Details/Details';

const Projects = () => {
    const [cars, setCars] = useState([]);

    // Cart e details dekhanor jonno

    const [cart, setCart] = useState([]);

    const handleAddCart = (car) => {
        const newCart = [...cart, car]
        setCart(newCart)
        console.log(newCart)
    }

    useEffect(() => {
        fetch('./projects.JSON')
            .then(res => res.json())
            .then(data => setCars(data))
    }, []);
    return (
        <div className='row'>
            <div className='col-md-9'>
                <div className='row'>
                    {
                        cars.map(car => <Details
                            car={car}
                            handleAddCart={handleAddCart}
                        ></Details>)
                    }
                </div>
            </div>
            <div className='col-md-3'>
                <Cart
                    cart={cart}
                ></Cart>
            </div>
        </div>

    );
};

export default Projects;