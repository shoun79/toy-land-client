import { Table } from 'flowbite-react';
import React, { useContext, useEffect, useState } from 'react';
import MyToySingle from './MyToySingle';
import { AuthContext } from '../../providers/AuthProviders';
import useTitle from '../../hooks/useTitle';

const MyToys = () => {
    const { user } = useContext(AuthContext);
    const [myToys, setMyToys] = useState([]);
    const [refresh, setRefresh] = useState(false);
    useTitle('My Toys');
    useEffect(() => {
        fetch(`https://toy-land-server-delta.vercel.app/my-toys?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setMyToys(data.data);

            })

    }, [user?.email, refresh])
    return (
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
                        myToys.map(toy => <MyToySingle
                            key={toy._id}
                            toy={toy}
                            refresh={refresh}
                            setRefresh={setRefresh}
                        >

                        </MyToySingle>)
                    }

                </Table.Body>
            </Table>
        </div>
    );
};

export default MyToys;