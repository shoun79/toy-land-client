import { Button, TextInput, Textarea } from 'flowbite-react';
import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProviders';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';

const AddAToy = () => {
    const { register, handleSubmit } = useForm();
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    useTitle('Add a Toy');
    const onSubmit = (value) => {

        fetch('https://toy-land-server-delta.vercel.app/toys', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(value)
        })
            .then(res => res.json())
            .then(data => {
                if (data.status === 'success') {
                    Swal.fire({
                        title: "Good job!",
                        text: data.message,
                        icon: "success"
                    });
                    navigate('/')
                }
            })
    }
    return (
        <div className=' flex justify-center mt-6'>
            <div className='border p-6 w-full md:w-1/2'>
                <h3 className='font-bold text-3xl mb-6'>Add a Toy</h3>
                <form onSubmit={handleSubmit(onSubmit)} className="flex  flex-col gap-4">
                    <div className="grid md:grid-flow-col justify-stretch md:space-x-4 space-y-4 md:space-y-0">
                        <TextInput defaultValue={user?.displayName}  {...register("sellerName")} type="text" placeholder="Seller Name" required />
                        <TextInput defaultValue={user?.email}  {...register("email")} type="email" placeholder="Seller Email" required />
                    </div>
                    <div className="grid md:grid-flow-col justify-stretch md:space-x-4 space-y-4 md:space-y-0">
                        <TextInput  {...register("toyName")} type="text" placeholder="Toy Name" required />
                        <TextInput  {...register("subCategory")} type="text" placeholder="Sub category" required />
                    </div>
                    <div className="grid md:grid-flow-col justify-stretch md:space-x-4 space-y-4 md:space-y-0">

                        <TextInput  {...register("price")} type="text" placeholder="Price" required />
                        <TextInput  {...register("availableQuantity")} type="text" placeholder="Available quantity" required />

                    </div>
                    <div className="grid md:grid-flow-col justify-stretch md:space-x-4 space-y-4 md:space-y-0">
                        <TextInput  {...register("rating")} type="text" placeholder="Rating" required />
                        <TextInput  {...register("photoURL")} type="text" placeholder="PhotoURL" required />

                    </div>
                    <div className="grid md:grid-flow-col justify-stretch md:space-x-4 space-y-4 md:space-y-0">
                        <Textarea {...register("details")} placeholder="Details about toy" required rows={4} />
                    </div>
                    <Button type="submit">Add</Button>
                </form>
            </div>
        </div>
    );
};

export default AddAToy;