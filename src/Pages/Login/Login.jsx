
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import useUsers from "../../Hooks/useUsers";

const Login = () => {
    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const [users] = useUsers()
    const finddata = users.filter(firedEmail =>firedEmail.status === 'Fired')

    const { register, handleSubmit, reset, formState: { errors } } = useForm();

  

    const onSubmit = data => {
  
      const fierdData = (finddata.filter(fired => fired.status === 'Fired') && 
      finddata.filter(fired => fired.email === data.email))

      if(fierdData[0]?.email === data?.email){
        return  Swal.fire({
          title: 'You are Fired By Admin, pls condact admin.',
          showClass: {
              popup: 'animate__animated animate__fadeInDown'
          },
          hideClass: {
              popup: 'animate__animated animate__fadeOutUp'
          }
      });
      }


   signIn(data.email, data.password)
   .then(result => {
    const user = result.user;
    console.log(user);
    Swal.fire({
        title: 'User Login Successful.',
        showClass: {
            popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
        }
    });
    navigate(from, { replace: true });
})
       
    };


    return (
        <div className="flex justify-center items-center bg-brown-600">
      <div className="lg:my-10">
        <h1 className="lg:text-2xl lg:my-10 md:my-5 my-3 text-center">Pls give correct  Email and Password</h1>
        
        <form className="max-w-xl mx-auto border-2 shadow-xl p-4 bg-brown-900" onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4 flex flex-col gap-6">
     
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
        })}
        
        />
        <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
          Password
        </label>

        {errors.password?.type === 'required' && <p className="text-red-600">Password did not match</p>}
                                
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
      New Comer Pls Registation?
      <Link to="/signUp"
        className="font-medium text-pink-500 transition-colors hover:text-blue-700 ml-2">
        Registation
      </Link>
    </p>

        </form>

        

      </div>
      </div>
    );
};

export default Login;