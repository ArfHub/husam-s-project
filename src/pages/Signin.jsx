import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Signin() {
  //useSate
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  //navigate
  const navigate = useNavigate();

  //Functions CheckAccount .
  const handleSubmit = async (e) => {
    e.preventDefault();

    let hasError = false;

    if (!name) {
      hasError = true;
      setError('الرجاء إدخال اسمك ويجب أن يتكون من 4 أحرف على الأقل');
    } else if (!email) {
      hasError = true;
      setError('يرجى إدخال عنوان بريدك إلكتروني');
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      hasError = true;
      setError('.يرجى إدخال عنوان بريد إلكتروني صالح');
    } else if (!password) {
      hasError = true;
      setError('.الرجاء إدخال كلمة المرور الخاصة بك');
    }

    if (hasError) return;

    setIsLoading(true);

    try {
      const uniqueId = Math.floor(Math.random() * 1000000);

      const response = await axios.post(
        'https://665736ae9f970b3b36c86600.mockapi.io/Hproject',
        {
          name: name,
          email: email,
          password: password,
          id: uniqueId,
        }
      );

      setError(null);
      setIsLoading(false);

      console.log('created successfully:', response.data);

      navigate('/Login');
    } catch (error) {
      console.error(error);
      setError('فشل إنشاء، يرجى المحاولة مرة أخرى');
      setIsLoading(false);
    }
  };
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
                <form className="mx-auto max-w-xs" onSubmit={handleSubmit}>
                  <label className="m-1 block text-[#1f285d] text-end">
                    أدخل اسم المستخدم
                  </label>
                  <input
                    className="w-full px-4 py-4 rounded-lg font-medium text-end bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-[#1f285d] focus:bg-white mb-4"
                    type="text"
                    placeholder="اسم المستخدم"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                  />

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

                  {error && (
                    <div className="text-red-500 text-sm mt-4 mb-4 text-center">
                      {error}
                    </div>
                  )}
                  <button
                    onClick={handleSubmit}
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
                    <span className="ml-2">أنشئ حسابك </span>
                  </button>
                </form>
              </div>
            </div>

            <p className="mt-6 mb-6 text-center text-gray-500 ">
              لديك حساب؟
              <Link
                to="/Login"
                className="text-m text-gray-800 hover:text-[#1f285d]"
              >
                سجل الدخول{' '}
              </Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Signin;
