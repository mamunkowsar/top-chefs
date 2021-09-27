
import React from 'react';
import './Details.css'

const Details = (props) => {

    const { name, img, michelin, restaurent, income, known } = props.car || {};

    return (
       
        <div className="col-md-4 g-4 ">
            <div className= "card-section">
                <div className="card card-container">
                    <img className="chef-image" src={img} style={{ 'height': '250px' }} alt="" />
                    <div className="card-body">
                        <h5 className="card-title "><small>Name: {name}</small></h5>
                        <p className="card-text "><small>Michelin Stars: {michelin}</small></p>
                        <p className="card-text "><small>Number of  Restaurants: {restaurent}</small></p>
                        <p className="card-text "><small>Income: {income}</small></p>
                        <p className="card-text "><small>Known for: {known}</small></p>
                        <button onClick={() => props.handleAddCart(props.car)}
                            className='cart-btn'><i className="fas fa-shopping-cart"></i>Add to cart</button>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Details;