import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../providers/AuthProviders";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { Button, TextInput, Textarea } from "flowbite-react";
import useTitle from "../../hooks/useTitle";


const EditToy = () => {
    const { register, handleSubmit } = useForm();
    const [toy, setToy] = useState({});
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const { id } = useParams();
    useTitle('Edit Toy');

    const onSubmit = (value, e) => {
        const form = e.target;
        const updatedInfo = {
            email: form.email.value,
            sellerName: form.sellerName.value,
            toyName: form.toyName.value,
            subCategory: form.subCategory.value,
            price: form.price.value,
            availableQuantity: form.availableQuantity.value,
            rating: form.rating.value,
            photoURL: form.photoURL.value,
            details: form.details.value
        }
        fetch(`https://toy-land-server-delta.vercel.app/toys/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedInfo)
        })
            .then(res => res.json())
            .then(data => {
                if (data.status === 'success') {
                    Swal.fire({
                        title: "Good job!",
                        text: data.message,
                        icon: "success"
                    });
                    navigate('/my-toys')
                }
            })
    }

    useEffect(() => {
        fetch(`https://toy-land-server-delta.vercel.app/all-toys/${id}`)
            .then(res => res.json())
            .then(data => {
                if (data.status === 'success') {
                    setToy(data.data)
                }
            })
    }, [id]);
    return (
        <div className=' flex justify-center mt-6'>
            <div className='border p-6 w-full md:w-1/2'>
                <h3 className='font-bold text-3xl mb-6'>Edit a Toy</h3>
                <form onSubmit={handleSubmit(onSubmit)} className="flex  flex-col gap-4">
                    <div className="grid md:grid-flow-col justify-stretch md:space-x-4 space-y-4 md:space-y-0">
                        <TextInput name='sellerName' defaultValue={user?.displayName}  {...register("sellerName")} type="text" placeholder="Seller Name" required />
                        <TextInput name='email' defaultValue={user?.email}  {...register("email")} type="email" placeholder="Seller Email" required />
                    </div>
                    <div className="grid md:grid-flow-col justify-stretch md:space-x-4 space-y-4 md:space-y-0">
                        <TextInput name='toyName'   {...register("toyName")} type="text" placeholder="Toy Name" required defaultValue={toy?.toyName} />
                        <TextInput name='subCategory' {...register("subCategory")} type="text" placeholder="Sub category" required defaultValue={toy?.subCategory} />
                    </div>
                    <div className="grid md:grid-flow-col justify-stretch md:space-x-4 space-y-4 md:space-y-0">

                        <TextInput name='price' defaultValue={toy.price}  {...register("price")} type="text" placeholder="Price" required />
                        <TextInput name='availableQuantity' defaultValue={toy.availableQuantity}  {...register("availableQuantity")} type="text" placeholder="Available quantity" required />

                    </div>
                    <div className="grid md:grid-flow-col justify-stretch md:space-x-4 space-y-4 md:space-y-0">
                        <TextInput name='rating' defaultValue={toy?.rating}  {...register("rating")} type="text" placeholder="Rating" required />
                        <TextInput name='photoURL' defaultValue={toy?.photoURL}   {...register("photoURL")} type="text" placeholder="PhotoURL" required />

                    </div>
                    <div className="grid md:grid-flow-col justify-stretch md:space-x-4 space-y-4 md:space-y-0">
                        <Textarea name='details' defaultValue={toy?.details}  {...register("details")} placeholder="Details about toy" required rows={4} />
                    </div>
                    <Button type="submit">Update</Button>
                </form>
            </div>
        </div>
    );
};

export default EditToy;