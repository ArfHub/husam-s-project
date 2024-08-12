//
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [event, setEvent] = useState(false);

  const navigate = useNavigate();

  const handleCheck = () => {
    setEvent(true);
  };

  useEffect(() => {
    if (event) {
      if (email !== '' && password !== '') {
        setIsLoading(true);
        axios
          .get('https://665736ae9f970b3b36c86600.mockapi.io/Hproject')
          .then((res) => {
            const result = res.data;
            const user = result.find(
              (el) => el.email === email && el.password === password
            );
            if (user) {
              localStorage.setItem('loggedIn', 'true');
              navigate('/');
            } else {
              setError(
                'البريد الإلكتروني أو كلمة المرور غير صحيحة، يرجى المحاولة مرة أخرى'
              );
            }
          })
          .catch((err) => {
            setError('.يرجى المحاولة مرة أخرى');
          });
      } else {
        setError('.كلا الحقلين مطلوبان ');
        setEvent(false);
      }
    }
  }, [event, email, password, navigate]);

  return (
    <>
      <section className="bg-[#6d6e70] min-h-screen flex box-border justify-center items-center">
        <div className="bg-white rounded-2xl flex max-w-3xl pl-5 items-center">
          <div className="md:block hidden w-1/2">
            <img
              className="rounded-2xl max-h-[1600px]"
              src="https://images.pexels.com/photos/5483070/pexels-photo-5483070.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="login form image"
            />
          </div>
          <div className="md:w-1/2 px-8">
            <div className="mt-12 flex flex-col">
              <div className="flex justify-end">
                <Link to={'/'}>
                  <button className="bg-[#1f285d] hover:bg-[#324094] text-white px-4 py-2 rounded transform transition-transform duration-300 hover:scale-105">
                    العودة{' '}
                  </button>
                </Link>
              </div>

              <div className="w-full flex-1 mt-8">
                <div className="mx-auto max-w-xs">
                  <label className="m-1 block text-[#1f285d] text-end">
                    أدخل الإيميل
                  </label>
                  <input
                    className="w-full px-4 py-4 rounded-lg font-medium text-end bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-[#1f285d] focus:bg-white mb-4"
                    type="email"
                    placeholder="الإيميل"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                  />
                  <label className="m-1 block text-[#1f285d] text-end">
                    أدخل كلمة المرور
                  </label>
                  <input
                    className="w-full px-4 py-4 text-end rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-[#1f285d] focus:bg-white mb-4"
                    type="password"
                    placeholder="أدخل كلمة المرور"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                  />
                  <a
                    href="#"
                    className="text-xs text-gray-600 hover:text-[#1f285d] text-end block"
                  >
                    نسيت كلمة المرور ؟
                  </a>
                  {error && (
                    <div className="text-red-500 text-sm mt-4 mb-4 text-center">
                      {error}
                    </div>
                  )}
                  <button
                    onClick={handleCheck}
                    className="mt-5 tracking-wide font-semibold text-white w-full py-4 rounded-lg bg-[#1f285d] hover:bg-[#324094] transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                  >
                    <svg
                      className="w-6 h-6 -ml-2"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></svg>
                    <span className="ml-2">تسجيل الدخول</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="mt-6 items-center text-[#1f285d]">
              <p className="text-center text-sm">أو</p>
            </div>
            <button className="bg-white border py-2 w-full rounded-xl mt-5 flex justify-center items-center text-sm hover:scale-105 duration-300 text-gray-500 hover:bg-[#60a8bc4f] font-medium">
              <svg
                className="mr-3"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
                width="25px"
              >
                <path
                  fill="#FFC107"
                  d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                ></path>
                <path
                  fill="#FF3D00"
                  d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                ></path>
                <path
                  fill="#4CAF50"
                  d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                ></path>
                <path
                  fill="#1976D2"
                  d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                ></path>
              </svg>
              Google سجل دخول باستخدام
            </button>
            <p className="mt-6 mb-6 text-center text-gray-500 ">
              ليس لديك حساب؟
              <Link
                to="/Signin"
                className="text-m text-gray-800 hover:text-[#1f285d]"
              >
                أنشئ حساب جديد
              </Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;
