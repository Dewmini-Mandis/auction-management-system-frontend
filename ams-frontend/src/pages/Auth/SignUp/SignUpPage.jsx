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
import logo from "../../../assets/images/logos/logo.png";


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
            toast.error(error.response.data);
            setLoading(false);
        }

    };

    return (
        <React.Fragment>

            {loading && (
                <Loading />
            )}

            <div className="flex items-center justify-center h-screen bg-[#FDFAFF] sm:bg-[#edeaf1]">

                <div className="grid md:grid-cols-2 gap-2 bg-[#FFFFFF] p-10 sm:border-[1px] sm:border-[#f4e8ff] md:rounded-[20px]">

                    <div className='mb-[20px]'>
                        <img src={logo} alt="svad" />
                        <h1 className="text-3xl font-bold text-slate-900 font-light mt-10 text-[35px]" style={{ fontFamily: 'Poppins, sans-serif' }}>Sign Up</h1>
                        {/* welcome message */}
                        <p className="text-slate-600 mt-3">Welcome to Lansuwa.lk ! Bid Win Own</p>
                    </div>

                    <form onSubmit={handleSignup}>

                        <div className="">
                            <div className='flex'>
                                <div className='me-[15px]'>
                                    <div htmlFor="">First name</div>
                                    <input type="text" required className="w-[160px] h-[35px] p-2 mt-2 border-[1px] border-[#cccccc] rounded-[8px]" onChange={(e) => setFirstName(e.target.value)} />
                                </div>
                                <div>
                                    <div htmlFor="">Last name</div>
                                    <input type="text" className="w-[160px] h-[35px] p-2 mt-2 border-[1px] border-[#cccccc] rounded-[8px]" onChange={(e) => setLastName(e.target.value)} />
                                </div>
                            </div>
                        </div>

                        <div className="pt-5">
                            <div htmlFor="">Email</div>
                            <input type="email" required className="w-[335px] h-[35px] p-2 mt-2 border-[1px] border-[#cccccc] rounded-[8px]" onChange={(e) => setEmail(e.target.value)} />
                        </div>

                        <div className="pt-5">
                            <div htmlFor="">Password</div>
                            <input type="password" required className="w-[335px] h-[35px] p-2 mt-2 border-[1px] border-[#cccccc] rounded-[8px]" onChange={(e) => setPassword(e.target.value)} />
                        </div>

                        <div className="pt-5 mt-2">
                            <button type="submit" className="w-[120px] h-[35px] leading-[18px] float-end p-2 bg-[#480C7B] text-white rounded-[10px]" >Sign Up</button>
                        </div>

                        <div className="pt-[60px]">
                            <p>Do you have an account? &nbsp;<a href="/signin" className="text-[#4B5563] hover:underline">Sign In</a></p>
                        </div>

                    </form>

                </div>

            </div>
        </React.Fragment>


    );
}

export default SignUpPage;
