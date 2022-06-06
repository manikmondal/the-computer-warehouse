import React, { useEffect, useState } from 'react';
import Inventory from '../Inventory/Inventory';
import './Inventorys.css';

const Inventorys = () => {

    const [inventorys, setInventorys] = useState([]);

    useEffect(() => {
        fetch('https://dry-earth-68249.herokuapp.com/inventory')
            .then(res => res.json())
            .then(data => setInventorys(data));
    }, [])

    return (
        <div id="inventorys" className='container'>
            <div className="row">
                <h1 className='text-primary text-center mt-5'> OUR INVENTORYS PRODUCT</h1>
                <div className="inventorys-container">
                    {
                        inventorys.slice(0, 6).map(inventory => < Inventory
                            key={inventory._id}
                            inventory={inventory}
                        >
                        </Inventory>)
                    }
                </div>
            </div>
        </div >
    );
};

export default Inventorys;