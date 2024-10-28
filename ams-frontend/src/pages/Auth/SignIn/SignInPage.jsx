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
      if (intendedUrl && intendedUrl !== '/signin') {
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
      toast.error(error.response.data);
      setLoading(false);
    }

  };


  return (
    <React.Fragment>

      {loading && (
        <Loading />
      )}

      <div className="flex items-center justify-center h-screen bg-[#FFFFFF] sm:bg-[#edeaf1]">

        <div className="grid md:grid-cols-2 gap-10 bg-[#FFFFFF] p-10 sm:border-[1px] sm:border-[#f4e8ff] md:rounded-[20px]">

          <div>
            <img src={logo} alt="svad" />
            <h1 className="text-3xl font-bold text-slate-900 font-light mt-6 text-[35px]" style={{ fontFamily: 'Poppins, sans-serif' }}>Sign In</h1>
            <p className="text-slate-600 mt-3">Use your Lansuwa.lk account to sign in</p>
            <p className="text-slate-600 mt-10">Sign in via social</p>
            <div className="flex mt-2 ms-[-2px]">
              <img src={google} alt="google" className="pe-3" />
              <img src={facebook} alt="facebook" className="pe-3" />
              <img src={microsoft} alt="microsoft" />
            </div>
          </div>

          <form onSubmit={handleSignin}>

            <div>
              <div htmlFor="">Email</div>
              <input type="email" required className="w-[300px] h-[35px] p-2 mt-2 border-[1px] border-[#cccccc] rounded-[8px]" onChange={(e) => setEmail(e.target.value)} />
            </div>

            <div className="pt-5">
              <div htmlFor="">Password</div>
              <input type="password" className="w-[300px] h-[35px] p-2 mt-2 border-[1px] border-[#cccccc] rounded-[8px]" onChange={(e) => setPassword(e.target.value)} />
            </div>

            <div className="pt-5 mt-2">
              <a href="/forgot-password" className="text-[#4B5563] hover:underline">Forgot Password?</a>
              <button type="submit" className="w-[120px] h-[35px] leading-[18px] float-end p-2 bg-[#480C7B] text-white rounded-[10px]">Sign In</button>
            </div>

            <div className="pt-[60px]">
              <p>Don&apos;t have an account? &nbsp;<a href="/signup" className="text-[#4B5563] hover:underline">Sign Up</a></p>
            </div>

          </form>

        </div>

      </div>
    </React.Fragment>
  );
};

export default SignInPage;