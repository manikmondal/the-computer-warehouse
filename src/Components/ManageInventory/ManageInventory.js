import { faAdd, faDriversLicense, faTrash, faUpload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Link, useParams } from 'react-router-dom';
import useInventorys from '../../hooks/useInventorys';
import './ManageInventory.css';

const ManageInventory = () => {

    const { inventoryId } = useParams();
    const [inventorys, setInventorys] = useInventorys();


    // const [cart, setCart] = useState([]);

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            const url = `https://dry-earth-68249.herokuapp.com/inventory/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = inventorys.filter(inventory => inventory._id !== id);
                    setInventorys(remaining);
                })
        }
    }



    const handleAddToUpdate = (selecteInventory) => {
        let newCart = [];
        const exists = inventorys.find(inventory => inventory.quantity === selecteInventory.quantity);
        if (!exists) {
            selecteInventory.quantity = parseInt();
            newCart = [...inventorys, selecteInventory];
        }
        else {
            const rest = inventorys.filter(inventory => inventory.quantity !== selecteInventory.quantity);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists];
        }
        setInventorys(newCart);
        // addToDb(selecteInventory.id);
    }

    return (
        <div>
            <h2 className='w-50 mx-auto text-center m-5 text-warning'>MANAGE YOUR INVENTORY PRODUCT</h2>

            <div className='inventorys-container'>
                {
                    inventorys.map(inventory => <div key={inventory._id}>
                        <img src={inventory.img} alt="" />
                        <div className='product-info'>
                            <h2 className='product-name'>{inventory.name}</h2>
                            <p>Price:{inventory.price}</p>
                            <p>Quantity:{inventory.quantity}</p>
                            <p>Supplier:{inventory.supplier}</p>
                            <p><small className='text-success'>Description:{inventory.description} </small></p>

                        </div>
                        <div className='btn-container'>
                            <button className='btn btn-primary' onClick={() => handleAddToUpdate(inventory.quantity)}>UPDATE
                                <FontAwesomeIcon className='button-icon' icon={faUpload}></FontAwesomeIcon>
                            </button>
                            <Link to={`/checkout/${inventoryId}`}>
                                <button className='btn btn-primary'>Product Delivery<FontAwesomeIcon className='button-icon' icon={faDriversLicense}></FontAwesomeIcon></button>
                            </Link>
                            <h4><button className='btn btn-danger' onClick={() => handleDelete(inventory._id)}>Delete<FontAwesomeIcon className='button-icon' icon={faTrash}></FontAwesomeIcon></button></h4>
                            <Link to={`/addinventory`}>
                                <button className='btn btn-primary'>Product Add <FontAwesomeIcon className='button-icon' icon={faAdd}></FontAwesomeIcon></button>
                            </Link>
                        </div>



                    </div>)
                }

            </div>




        </div>
    );
};

export default ManageInventory;