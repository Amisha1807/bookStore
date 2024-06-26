// import React from 'react'
// import { Link } from 'react-router-dom'


// const Login = () => {
//   return (
//     <div>
        

// <dialog id="my_modal_3" className="modal">
//   <div className="modal-box">
//     <form method="dialog">
//       {/* if there is a button in form, it will close the modal */}
//       <Link to='/' className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
//     </form>
//     <h3 className="font-bold text-lg">Login</h3>
//     <div className='mt-4 space-y-3'>
//         <span>Email</span><br/>
//         <input type="email" placeholder='Enter your email' className='w-80 px-3 py-1 border rounded-md outline-none' /><br/>
//         </div>
//         <div className='mt-4 space-y-3'>
//         <span>Password</span><br/>
//         <input type="password" placeholder='Enter your password' className='w-80 px-3 py-1 border rounded-md outline-none'/>
//         </div>
//         <div className='flex justify-around mt-4'>
//         <button className='bg-pink-500 text-white py-1 hover:bg-pink-700 duration-300 rounded-md px-3'>Login</button>
//         <p>Not registered? <Link to='/signup' className='underline text-blue-500 cursor-pointer'>Signup</Link></p>
//       </div>
//       </div>
      
// </dialog>
//     </div>
//   )
// }

// export default Login

// import React from 'react'
// import { Link } from 'react-router-dom'
// import { useForm } from "react-hook-form";

// const Login = () => {
//     const { register,handleSubmit, formState: { errors } } = useForm();
//     const onSubmit = data => console.log(data);
//   return (
//     <div>
        

// <dialog id="my_modal_3" className="modal">
//   <div className="modal-box">
//     <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
//       {/* if there is a button in form, it will close the modal */}
//       <Link to='/' className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
//     </form>
//     <h3 className="font-bold text-lg">Login</h3>
//     <div className='mt-4 space-y-3'>
//         <span>Email</span><br/>
//         <input type="email" placeholder='Enter your email' className='w-80 px-3 py-1 border rounded-md outline-none'
//         {...register("email", { required: true })} />
//         <br/>
//         {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
//         </div>
//         <div className='mt-4 space-y-3'>
//         <span>Password</span><br/>
//         <input type="password" placeholder='Enter your password' className='w-80 px-3 py-1 border rounded-md outline-none'
//         {...register("password", { required: true })}/>
//         {errors.password && <span>This field is required</span>}
//         </div>
//         <div className='flex justify-around mt-4'>
//         <button className='bg-pink-500 text-white py-1 hover:bg-pink-700 duration-300 rounded-md px-3'>Login</button>
//         <p>Not registered? <Link to='/signup' className='underline text-blue-500 cursor-pointer'>Signup</Link></p>
//       </div>
//       </div>
      
// </dialog>
//     </div>
//   )
// }

// export default Login

import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const modalRef = useRef(null);

  const onSubmit = data => {
    console.log(data);
    if (modalRef.current) {
      modalRef.current.close();
    }
  };

  const closeModal = () => {
    if (modalRef.current) {
      modalRef.current.close();
    }
  };

  return (
    <div>
      <dialog id="my_modal_3" className="modal" ref={modalRef}>
        <form onSubmit={handleSubmit(onSubmit)} className="modal-box">
          {/* Close button */}
          <Link to='/'
            type="button"
            onClick={closeModal}
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          >
            ✕
          </Link>
          <h3 className="font-bold text-lg">Login</h3>
          <div className="mt-4 space-y-3">
            <label htmlFor="email">Email</label>
            <br/>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              className="w-80 px-3 py-1 border rounded-md outline-none"
              {...register("email", { required: true })}
            />
            {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
          </div>
          <div className="mt-4 space-y-3">
            <label htmlFor="password">Password</label>
            <br/>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              className="w-80 px-3 py-1 border rounded-md outline-none"
              {...register("password", { required: true })}
            />
            {errors.password && <span className='text-sm text-red-500'>This field is required</span>}
          </div>
          <div className="flex justify-around mt-4">
            <button type="submit" className="bg-pink-500 text-white py-1 hover:bg-pink-700 duration-300 rounded-md px-3">Login</button>
            <p>Not registered? <Link to='/signup' className='underline text-blue-500 cursor-pointer'>Signup</Link></p>
          </div>
        </form>
      </dialog>
    </div>
  );
};

export default Login;
