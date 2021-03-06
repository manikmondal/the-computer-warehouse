
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import axiosPrivate from '../../api/axiousPrivate';
import auth from '../../firebase.init';

const Order = () => {
    const [user] = useAuthState(auth);
    const [orders, setOrders] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {

        const getOrders = async () => {
            const email = user?.email;
            const url = `https://dry-earth-68249.herokuapp.com/order?email=${email}`;
            try {
                const { data } = await axiosPrivate.get(url);
                setOrders(data);
            }
            catch (error) {
                console.log(error.message);
                if (error.response.status === 401 || error.response.status === 401) {
                    signOut(auth);
                    navigate('/login')
                }
            }
        }
        getOrders();

    }, [user]);
    return (
        <div className='w-50 mx-auto'>
            <h1 className='m-4 text-primary'>Your Delivery orders:{orders.length} </h1>
            {
                orders.map(order => <div key={order._id}>
                    <p>{order.email}:{order.inventory}</p>
                </div>)
            }
        </div>
    );
};

export default Order;