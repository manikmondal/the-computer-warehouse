import { faUpload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Inventory.css';

const Inventory = ({ inventory }) => {
    const { _id, name, img, description, price, quantity, supplier } = inventory;
    const navigate = useNavigate();

    const navigateToInventoryDetail = id => {
        navigate(`/inventory/${id}`);
    }
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h2 className='product-name'>{name}</h2>
                <p>Price: {price}</p>
                <p>Quantity:- {quantity}</p>
                <p>supplier:- {supplier}</p>
                <p><small>Description:- {description}</small></p>
            </div>

            <button onClick={() => navigateToInventoryDetail(_id)} className='btn-cart'><p className='btn-text'>UPDATE:{name} </p>
                <FontAwesomeIcon className='cart-icon' icon={faUpload}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Inventory;