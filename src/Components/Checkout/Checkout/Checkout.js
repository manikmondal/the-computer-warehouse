import axios from 'axios';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import useInventoryDetail from '../../../hooks/useInventoryDetail';


const Checkout = () => {
    const { inventoryId } = useParams();
    const [inventory] = useInventoryDetail(inventoryId);
    const [user] = useAuthState(auth);
    const handlePlaceOrder = event => {
        event.preventDefault();
        const order = {
            email: user.email,
            inventory: inventory.name,
            inventoryId: inventoryId,
            address: event.target.address.value,
            phone: event.target.phone.value
        }
        axios.post('https://aqueous-dusk-35235.herokuapp.com/order', order)
            .then(response => {
                const { data } = response;
                if (data.insertedId) {
                    toast('Your order is booked!!');
                    event.target.reset();
                }
            })
    }

    return (
        <div className='w-50 mx-auto'>
            <h2>Please Order:{inventory.name} </h2>
            <form onSubmit={handlePlaceOrder}>
                <input className='w-100 mb-4' type="text" value={user?.displayName} name='name' placeholder='name' required readOnly disabled />
                <br />
                <input className='w-100 mb-4' type="email" value={user?.email} name='email' placeholder='email' required readOnly disabled />
                <br />
                <input className='w-100 mb-4' type="text" value={inventory.name} name='inventory' placeholder='inventory' required readOnly />
                <br />
                <input className='w-100 mb-4' type="text" name='address' placeholder='address' autoComplete='off' required />
                {/* <input className='w-100 mb-4' type="text" onChange={handleAddressChange} value={user.address} name='address' placeholder='address' required /> */}
                <br />
                <input className='w-100 mb-4' type="number" value={user.phone} name='phone' placeholder='phone' required />
                <br />
                <input className='btn btn-primary' type="submit" value="place Order " />
            </form>
        </div>
    );
};

export default Checkout;