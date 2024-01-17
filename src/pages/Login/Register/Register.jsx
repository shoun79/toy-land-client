import { Button, TextInput } from 'flowbite-react';
import { useContext } from 'react';

import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProviders';
import Swal from 'sweetalert2';

const Register = () => {
    const { register, handleSubmit } = useForm();
    const { registerUser, updateUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const onSubmit = (value) => {
        registerUser(value.email, value.password)
            .then(result => {
                console.log(result.user);
                hendleUpdateUser(value.name, value.photoURL);
                Swal.fire({
                    title: "Good job!",
                    text: "Register Successful",
                    icon: "success"
                });
                navigate('/')

            })
            .catch(error => {
                console.log(error);
            })
    }
    const hendleUpdateUser = (name, photoURL) => {
        const profile = {
            displayName: name, photoURL: photoURL
        }
        updateUser(profile)
            .then(() => {
                // Profile updated!

            }).catch((error) => {
                console.log(error.message);
            });
    }
    return (
        <div className=' flex justify-center mt-6'>
            <div className='border p-6 w-full md:w-1/3'>
                <h3 className='font-bold text-3xl mb-6'>Register</h3>
                <form onSubmit={handleSubmit(onSubmit)} className="flex max-w-md flex-col gap-4">
                    <div>
                        <TextInput  {...register("name")} type="text" placeholder="Full Name" required />
                    </div>
                    <div>
                        <TextInput  {...register("email")} type="email" placeholder="Email" required />
                    </div>
                    <div>
                        <TextInput  {...register("password")} type="password" placeholder="Password" required />
                    </div>
                    <div>
                        <TextInput  {...register("photoURL")} type="text" placeholder="PhotoURL" required />
                    </div>
                    <Button type="submit">Register</Button>
                </form>
                <p className='mt-2 '>Already have an account? <Link className='text-blue-600 font-bold' to='/login' >Login</Link> </p>
            </div>
        </div>
    );
};

export default Register;