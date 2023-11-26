
  import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import axios from "axios";


const image_hosting_api = `https://api.imgbb.com/1/upload?key=605bc6d064766cdb1185aede7e5b5240`;

const Registation = () => {

  // console.log(image_hosting_api);
 

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();

    const onSubmit = async(data) =>{

    // console.log(data);
    const imgData = new FormData();
    imgData.append("image", data.image[0]);
    const response = await axios.post(image_hosting_api, imgData);
    const photoUrl = response.data.data.url;


    createUser(data.email, data.password)
    .then(result => {
        const loggedUser = result.user;
        // console.log(loggedUser);
        updateUserProfile(data.name, photoUrl)
            .then(() => {
                console.log('user profile info updated')
                reset();
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'User created successfully.',
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate('/');

            })
            .catch(error => console.log(error))
    })
    }
    return (
        <div className="flex justify-center items-center">
      <div className="my-10">
        <h1 className="text-2xl my-10">Pls Input your details for Registation</h1>
        <form className="max-w-xl mx-auto border-2 shadow-xl p-4 bg-brown-900" onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4 flex flex-col gap-6">
      <div className="relative h-11 w-full min-w-[200px]">
        <input
          className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
         placeholder =""
         name="name"
         type="text"
         {...register("name", { required: true })}
        />
        <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
          Name
        </label>
      </div>
      <div className="relative h-11 w-full min-w-[200px]">
        <input
          className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal
           text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200
            placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 
            disabled:border-0 disabled:bg-blue-gray-50"
         placeholder =""
         name="email"
         type="email"
         {...register("email", { required: true })}
        />
        <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
          Email
        </label>
      </div>

      <div className="relative h-11 w-full min-w-[200px]">
        <input
          className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal
           text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200
            placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 
            disabled:border-0 disabled:bg-blue-gray-50"
         placeholder =""
         name="password"
         type="password"
         {...register("password", {
            required: true,
            minLength: 6,
            maxLength: 20,
            pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
        })}
        
        />
        <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
          Password
        </label>

        {errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>}
                                {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be 6 characters</p>}
                                {errors.password?.type === 'maxLength' && <p className="text-red-600">Password must be less than 20 characters</p>}
                                {errors.password?.type === 'pattern' && <p className="text-red-600">Password must have one Uppercase one lower case, one number and one special character.</p>}
      </div>

      <div className="relative h-11 w-full min-w-[200px] my-6">


        <input
          className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal
           text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200
            placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 
            disabled:border-0 disabled:bg-blue-gray-50"
         placeholder =""
         type="file"
         {...register("image", { required: true })}
        />

        {errors.photo && <span className="text-red-600">photo is required</span>}
      </div>

      <div className="relative h-11 w-full min-w-[200px]">
     
      <label>
        Role:
        <select
          className="peer mt-6 h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal
          text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200
           placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 
           disabled:border-0 disabled:bg-blue-gray-50"
          name="role"
          {...register("role", { required: true })}
        >
          <option value="Employee">Employee</option>
          <option value="HR">HR</option>
          <option value="Admin">Admin</option>
          {/* Add other roles as needed */}
        </select>
        {errors.roll && <span className="text-red-600">roll is required</span>}
      </label>
 
 
      </div>

      <input
          className="mt-8 block w-full select-none rounded-lg bg-pink-500 py-3 px-6 text-center 
          align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg
           hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none 
           disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none cursor-pointer"
         placeholder =""
         name="submit"
         type="submit"
        />

      </div>

      <p className="mt-4 block text-center font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
      Already have an account?
      <Link to="/login"
        className="font-medium text-pink-500 transition-colors hover:text-blue-700 ml-2">
        Sign In
      </Link>
    </p>

        </form>

      </div>
      </div>
    );
};

export default Registation;