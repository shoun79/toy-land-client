import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';

const ToyDetails = () => {
    const { id } = useParams();
    const [toyData, setToyData] = useState({});
    const { _id, photoURL, price, rating, toyName, availableQuantity, sellerName, email, subCategory, details } = toyData;
    useTitle('Toy Details');
    useEffect(() => {
        fetch(`https://toy-land-server-delta.vercel.app/toys-details/${id}`)
            .then(res => res.json())
            .then(data => {
                setToyData(data.data);
            })
    }, [id])

    return (
        <div className="px-4 pb-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pb-20">

            <div className="mx-auto lg:max-w-2xl">
                <div className="relative w-full transition-shadow duration-300 hover:shadow-xl">
                    <img
                        className="object-cover w-full h-56 rounded shadow-lg sm:h-64 md:h-80 lg:h-96"
                        src={photoURL}
                        alt=""
                    />

                </div>
            </div>
            {/* image  */}
            <div className="max-w-xl mt-10 md:mx-auto sm:text-center lg:max-w-2xl md:mt-12">
                <div>
                    <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                        <span className="ml-3 mr-2 rounded bg-cyan-100 px-2.5 py-0.5 text-xs font-semibold text-cyan-800 dark:bg-cyan-200 dark:text-cyan-800">
                            {rating}
                        </span>
                    </p>
                </div>
                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                    {toyName}
                </h2>
                <h4 className="max-w-lg mb-6 font-sans text-2xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                    Price: {price}
                </h4>
                <p className="text-base text-gray-700 md:text-xl">
                    Seller Name: {sellerName}
                </p>
                <p className="text-base text-gray-700 md:text-xl">
                    Seller Email: {email}
                </p>
                <p className="text-base text-gray-700 md:text-xl">
                    Available quantity: {availableQuantity}
                </p>
                <p className="text-base text-gray-700 md:text-xl">
                    Sub Category: {subCategory}
                </p>
                <p className="text-base text-gray-700 md:text-lg mt-4">
                    {details}
                </p>
            </div>

        </div>
    );
};

export default ToyDetails;