import { Button, TextInput } from 'flowbite-react';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProviders';
import Swal from 'sweetalert2';
import useTitle from '../../../hooks/useTitle';

const Login = () => {
    const { register, handleSubmit } = useForm();
    const { loginUser } = useContext(AuthContext);
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const navigate = useNavigate();
    useTitle('Login');

    const onSubmit = (value) => {
        loginUser(value.email, value.password)
            .then(result => {
                console.log(result.user);
                Swal.fire({
                    title: "Good job!",
                    text: "Successfully Login",
                    icon: "success"
                });
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <div className=' flex justify-center mt-6'>
            <div className='border p-6 w-full md:w-1/3'>
                <h3 className='font-bold text-3xl mb-6'>Login</h3>
                <form onSubmit={handleSubmit(onSubmit)} className="flex max-w-md flex-col gap-4">
                    <div>
                        <TextInput  {...register("email")} type="email" placeholder="Email" required />
                    </div>
                    <div>
                        <TextInput  {...register("password")} type="password" placeholder="Password" required />
                    </div>
                    <Button type="submit">Login</Button>
                </form>
                <p className='mt-2 text-center'>Do not have an account? <Link className='text-blue-600 font-bold' to='/register' >Create an account</Link> </p>
            </div>
        </div>
    );
};

export default Login;