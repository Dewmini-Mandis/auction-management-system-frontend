// Page for signing up a new user
// This page is only accessible to users who are not logged in
// Request data
// {
//     "firstName": "string",
//     "lastName": "string",
//     "email": "user@example.com",
//     "password": "OO}(z2';0&-"
//   }

import React, { useState } from 'react';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../../../utils/axiosInstance';
import Loading from '../../../components/Loading/Loading';

const SignUpPage = () => {
    
        const [firstName, setFirstName] = useState('');
        const [lastName, setLastName] = useState('');
        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');
        const navigate = useNavigate();
    
        // useState for loading
        const [loading, setLoading] = useState(false);
    
        const handleSignup = async (event) => {
            event.preventDefault();
    
            setLoading(true);
    
            try {
                await axiosInstance.post('/api/Auth/Register', { firstName, lastName, email, password });
    
                // Show a success toast
                toast.success('Please verify your email !');
    
                // Redirect to the Email Verification page with the email address
                navigate('/email-verification', { state: { email } });
    
                setLoading(false);
    
            } catch (error) {
                console.error("Sign up failed:", error);
                // Show an error toast
                toast.error('Sign up failed!');
                setLoading(false);
            }
    
        };

    return (
        <React.Fragment>
            {loading && (
                <Loading />
            )}
            <div className="container mx-auto mt-10">
                <div className="w-96 mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <h1 className="text-2xl font-bold text-center mb-4">Sign Up</h1>
                    <form onSubmit={handleSignup}>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstName">
                                First Name
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="firstName"
                                type="text"
                                placeholder="First Name"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastName">
                                Last Name
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="lastName"
                                type="text"
                                placeholder="Last Name"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                Email
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="email"
                                type="email"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                Password
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none
                                focus:shadow-outline"
                                id="password"
                                type="password"
                                placeholder="******************"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div className="flex items-center justify-between">
                            <button
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                type="submit"
                            >
                                Sign Up
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </React.Fragment>
    );
}

export default SignUpPage;
