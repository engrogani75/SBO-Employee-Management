import Swal from "sweetalert2";
import useAxiosPublic from "../../Hooks/useAxiosPublic";


const Condact = () => {


  const axiosPublic = useAxiosPublic()

    const condactHanlde = (event) =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const message = form.message.value;
        const userMessage = {
            name, email, message
        }

        console.log(userMessage);
        axiosPublic.post('/user-message', userMessage)
        .then((res) =>{
          if(res.data.insertedId){
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'your info has been successfully.',
              showConfirmButton: false,
              timer: 1500
          });
        
          }


        })

    }


  return (
    <div className="flex justify-center items-center">
      <div className="lg:my-10">
        <h1 className="lg:text-2xl lg:mt-24 md:my-5 my-3 text-center text-blue-800">
          Company address
        </h1>

        <div className="flex flex-col justify-center items-center italic my-4">
          <p>123 Main Street</p>
          <p> Cityville, State 54321</p>
          <p>Countryland</p>
          <h2 className="text-blue-800 font-bold mt-4">
            If you any asked or opnion pls send us message
          </h2>
        </div>

        <form className="max-w-md mx-auto mt-10 border-2 shadow-2xl shadow-gray-900 border-gray-300  md:px-5 py-1" onSubmit={condactHanlde}>
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="name"
              id="name"
              className="block py-2.5 
      px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 
      appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 
      focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="floating_email"
              className="peer-focus:font-medium absolute text-sm
       text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] 
       peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600
        peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 
        peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Name
            </label>
          </div>

          <div className="relative z-0 w-full mb-5 group">
            <input
              type="email"
              name="email"
              id="floating_email"
              className="block py-2.5 px-0 w-full text-sm
       text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white
        dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="floating_email"
              className="peer-focus:font-medium absolute text-sm text-gray-500 
      dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0
       rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500
        peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Email address
            </label>
          </div>

          <div className="relative z-0 w-full mb-5 group">
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Leave a comment..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Condact;
