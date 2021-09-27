import React from 'react';
import './cart.css'

const Cart = (props) => {

    const { cart } = props

    const totalReducer = (previousValue, currentValue) => previousValue + currentValue.income

    const total = cart.reduce(totalReducer, 0)
    const tax = .1 * total
    const totalPrice = total + tax
    return (
        <div>
            <div className="col-md-12  ">
            <div className= "cart-section">
                <div className="card card-container">

                <h1 className='text-secondary'>Cart: {cart.length}</h1>

<ul>
    {
        cart.map(pd => <li className=''>{pd.name}</li>)
    }
</ul>
<h4 className=''>Total: {total}$</h4>
<h4 className=''>Tax: {tax}$</h4>
<h4 className=''>Total Income: {totalPrice}$</h4>
                    </div>
                    </div>
                </div>

            


        </div>
    );
};

export default Cart;