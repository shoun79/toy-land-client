import { Button, Table } from 'flowbite-react';
import React from 'react';
import { Link } from 'react-router-dom';

const ToySingle = ({ toy }) => {
    const { _id, price, toyName, availableQuantity, sellerName, subCategory } = toy;
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
                <Link to={`/toy-details/${_id}`} >
                    <Button>Details</Button>
                </Link>
            </Table.Cell>
        </Table.Row>
    );
};

export default ToySingle;