import { Button, Table } from 'flowbite-react';
import React, { useEffect, useRef, useState } from 'react';
import ToySingle from './ToySingle';
import useTitle from '../../hooks/useTitle';

const AllToys = () => {
    const [toys, setToys] = useState([]);
    const [asc, setAsc] = useState(true);
    const searchRef = useRef(null);
    const [search, setSearch] = useState('');
    useTitle('All Toys');

    useEffect(() => {
        getAllToys();

    }, [asc, search])

    const getAllToys = async () => {
        const result = await fetch(`https://toy-land-server-delta.vercel.app/toys?search=${search}&sort=${asc ? 'asc' : 'desc'}`);
        const data = await result.json();
        if (data) {
            setToys(data.data)
        }
    }

    const hendleSearch = async () => {
        setSearch(searchRef.current.value);
        // if (e.target.value) {
        //     const result = await fetch(`https://toy-land-server-delta.vercel.app/search/${e.target.value}`)
        //     const data = await result.json();
        //     if (data) {
        //         setToys(data.data)
        //     }
        // }
        // else {
        //     getAllToys();
        // }
    }
    return (
        <div>
            <div className=" rounded-md shadow-sm lg:w-[400px] sm:w-[300px] w-full mx-auto">
                <input ref={searchRef} onChange={hendleSearch} className="flex h-10 w-full rounded-md border  px-3 py-2 text-sm focus:outline-none" placeholder="Search" />
            </div>
            <div className=" flex justify-center mt-4">
                <Button onClick={() => setAsc(!asc)} pill>
                    {
                        asc ? 'Price High to Low' : 'Price Low to High'
                    }
                </Button>

            </div>

            <div className="overflow-x-auto my-14">
                <Table striped>
                    <Table.Head>
                        <Table.HeadCell>Toys Name</Table.HeadCell>
                        <Table.HeadCell>Seller Name</Table.HeadCell>
                        <Table.HeadCell>Available Quantity</Table.HeadCell>
                        <Table.HeadCell>Price</Table.HeadCell>
                        <Table.HeadCell>Sub Category</Table.HeadCell>
                        <Table.HeadCell>
                            Details
                            <span className="sr-only">Edit</span>
                        </Table.HeadCell>
                    </Table.Head>
                    <Table.Body className="divide-y">
                        {
                            toys.map(toy => <ToySingle
                                key={toy._id}
                                toy={toy}
                            >

                            </ToySingle>)
                        }

                    </Table.Body>
                </Table>
            </div>
        </div>
    );
};

export default AllToys;