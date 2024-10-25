import React, { useState } from 'react';
import logo from "../../../assets/images/logos/logo.png";
import google from "../../../assets/images/logos/google.png";
import facebook from "../../../assets/images/logos/facebook.png";
import microsoft from "../../../assets/images/logos/microsoft.png";
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../../../utils/axiosInstance';
import Loading from '../../../components/Loading/Loading';


const SignInPage = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    // useState for loading
    const [loading, setLoading] = useState(false);

    const handleSignin = async (event) => {
        event.preventDefault();

        setLoading(true);

        try {
          const response = await axiosInstance.post('/api/Auth/Login', { email, password });
          localStorage.setItem('token', response.data.token);

          // Show a success toast
          toast.success('Login successful!');

          // Check if there's an intended URL
          const intendedUrl = localStorage.getItem('intendedUrl');
          if (intendedUrl) {
            // Navigate to the intended URL and clear it from storage
            localStorage.removeItem('intendedUrl');
            navigate(intendedUrl);
          } else {
            // Default redirection if no intended URL exists
            navigate('/');
          }

          setLoading(false);

        } catch (error) {
          console.error("Login failed:", error);
          // Show an error toast
          toast.error('Login failed!');
          setLoading(false);
        }

      };


    return (
        <React.Fragment>

          {loading && (
            <Loading />
          )}

          <div className="flex items-center justify-center h-screen bg-[#F5F5F5]">
            <div className="bg-[#FDFAFF] grid lg:grid-cols-2 gap-10 p-10 border-[1px] border-[#D1C7D9] ">
                <div className="">
                    <img src={logo} alt="svad" />
                    <h1 className="text-3xl font-bold text-slate-900 font-light mt-6 text-5xl" style={{ fontFamily: 'Poppins, sans-serif'}}>Sign In</h1>
                    <p className="text-slate-600 mt-3">Use your Lansuwa.lk account to sign in</p>
                    <p className="text-slate-600 mt-10">Sign in via social</p>
                    <div className="flex mt-2">
                        <img src={google} alt="google" className="pe-3"/>
                        <img src={facebook} alt="facebook" className="pe-3"/>
                        <img src={microsoft} alt="microsoft" />
                    </div>
                    
                </div>
                <div className="">

                        <div>
                            <div htmlFor="">Username</div>
                            <input type="text" className="w-[350px] p-2 mt-2 border-[1px] border-[#9E9E9E] rounded-[10px]" onChange={(e) => setEmail(e.target.value)}/>
                        </div>

                        <div className="pt-5">
                            <div htmlFor="">Password</div>
                            <input type="password" className="w-[350px] p-2 mt-2 border-[1px] border-[#9E9E9E] rounded-[10px]" onChange={(e) => setPassword(e.target.value)}/>
                        </div>

                        <div className="pt-5">
                            <button className="w-[350px] p-2 bg-[#4B5563] text-white rounded-[10px]" onClick={handleSignin}>Sign In</button>
                        </div>

                        <div className="pt-5">
                            <a href="/forgotpassword" className="text-[#4B5563]">Forgot Password?</a>
                        </div>

                        <div className="pt-5">
                            <p>Don't have an account? <a href="/signup" className="text-[#4B5563]">Sign Up</a></p>
                        </div>                        
                </div>
            </div>
        </div>
    </React.Fragment>
    );
};

export default SignInPage;