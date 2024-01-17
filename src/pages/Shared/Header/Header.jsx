import { Avatar, Button, Dropdown, Navbar } from 'flowbite-react';
import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from './../../../assets/images/logo.png'
import { AuthContext } from '../../../providers/AuthProviders';
import Swal from 'sweetalert2';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const navigate = useNavigate();
    const hendleLogOut = () => {
        logOut()
            .then(() => {
                Swal.fire({
                    title: "Good job!",
                    text: "Sign-out successful.",
                    icon: "success"
                });
                navigate('/login')
            }).catch((error) => {
                // An error happened.
            });
    }
    return (
        <Navbar fluid rounded >
            <Link to='/'>
                <Navbar.Brand>
                    <img src={logo} className=" w-24 h-20  " alt="Flowbite React Logo" />
                    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">TOYS LAND</span>
                </Navbar.Brand>
            </Link>


            <div className="flex md:order-2">
                {
                    user ? <Dropdown
                        arrowIcon={false}
                        inline
                        label={
                            <Avatar title={user.displayName} alt="User settings" img={user.photoURL} rounded />
                        }
                    >
                        <Dropdown.Header>
                            <span className="block text-sm">{user?.displayName}</span>
                            <span className="block truncate text-sm font-medium">{user?.email}</span>
                        </Dropdown.Header>

                        <Dropdown.Item onClick={hendleLogOut}>Sign out</Dropdown.Item>
                    </Dropdown> :

                        <Dropdown
                            arrowIcon={false}
                            inline
                            label={
                                <Avatar alt="User settings" img="" rounded />
                            }
                        >
                            <Link to='/login'><Dropdown.Item >Login</Dropdown.Item></Link>
                        </Dropdown>

                }
                <Navbar.Toggle />
            </div>
            <Navbar.Collapse>
                <Link to='/'>
                    <Navbar.Link >
                        Home
                    </Navbar.Link>
                </Link>
                <Link to='/all-toys'>
                    <Navbar.Link >All Toys</Navbar.Link>
                </Link>
                {
                    user && <>
                        <Link to='/my-toys'>
                            <Navbar.Link >My Toys</Navbar.Link>
                        </Link>

                        <Link to='/add-toy'>
                            <Navbar.Link >Add a Toy</Navbar.Link>
                        </Link>
                    </>

                }
                <Link to='/blog'>
                    <Navbar.Link >Blog</Navbar.Link>
                </Link>

            </Navbar.Collapse>
        </Navbar>
    );
};

export default Header;