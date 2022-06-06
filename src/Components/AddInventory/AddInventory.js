import React from 'react';
import { useForm } from "react-hook-form";

const AddInventory = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        console.log(data)
        const url = `https://dry-earth-68249.herokuapp.com/inventory`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
            })
    };
    return (
        <div className='w-50 mx-auto'>
            <h2 className='m-5 text-primary'>Please Add New Computer Item</h2>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-3' placeholder='Computer product Name' {...register("name", { required: true, maxLength: 20 })} />

                <input className='mb-3' placeholder='Price' type="number" {...register("price")} />
                <input className='mb-3' placeholder='quantity' type="number" {...register("quantity")} />
                <input className='mb-3' placeholder='supplier' type="text" {...register("supplier")} />
                <textarea className='mb-3' placeholder='Description' {...register("description")} />
                <input className='mb-3' placeholder='photo URL' type="text" {...register("img")} />
                <input className='mb-4 w-25 mx-auto btn btn-primary' type="submit" value="Add Product" />
            </form>
        </div>
    );
};

export default AddInventory;