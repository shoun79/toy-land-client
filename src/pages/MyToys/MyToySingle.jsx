import { Button, Dropdown, Table } from 'flowbite-react';
import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const MyToySingle = ({ toy, setRefresh, refresh }) => {
    const { _id, price, toyName, availableQuantity, sellerName, subCategory } = toy;


    const hendleDelete = _id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://toy-land-server-delta.vercel.app/toys/${_id}`, {
                    method: 'DELETE'

                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.status === 'success') {
                            setRefresh(!refresh)
                            Swal.fire({
                                title: "Deleted!",
                                text: data.message,
                                icon: "success"
                            });

                        }
                    })

            }
        });

    }

    return (
        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {toyName}
            </Table.Cell>
            <Table.Cell>{sellerName}</Table.Cell>
            <Table.Cell>{availableQuantity}</Table.Cell>
            <Table.Cell>$<span className='text-orange-400 font-bold'>{price}</span> </Table.Cell>
            <Table.Cell>{subCategory}</Table.Cell>
            <Table.Cell>
                <div className="flex flex-wrap items-start gap-1">
                    <Link to={`/edit-toy/${_id}`}>
                        <Button size="xs">EDIT</Button>
                    </Link>
                    <Button onClick={() => hendleDelete(_id)} color="failure" size="xs">DEL</Button>


                </div>
            </Table.Cell>
        </Table.Row>
    );
};

export default MyToySingle;