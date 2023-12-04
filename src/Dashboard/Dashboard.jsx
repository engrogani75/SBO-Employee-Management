
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';
import useRole from '../Hooks/useRole';
import { FaClipboardList, FaHistory, FaHome } from "react-icons/fa";
import { FaBarsProgress, FaSheetPlastic } from "react-icons/fa6";

const Dashboard = () => {


// const {user} = useContext(AuthContext)

// const [userRole, setUserRole] = useState([])
const location = useLocation();

// useEffect(() =>{

//     axios.get(`https://sbo-employee-management-server.vercel.app/users/${user?.email}`) 
//     .then(res => {
//      const result = res?.data
//      setUserRole(result[0].role)
//     })
//  }, [user.email])

const [userRole, loading] = useRole()



    return (
        <div>
            <h1 className='text-3xl text-center'>Welcome To Deshborad</h1>
           <div>
                
<aside id="default-sidebar" className="fixed mt-10 top-0 left-0 z-40 w-64 h-screen 
 transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
   <div className="h-full px-3 py-4 overflow-y-auto bg-blue-200 font-bold dark:bg-gray-800">
      <ul className="space-y-2 font-bold">


         {/* to do next */}

         {/* For Hr */}

         {
            userRole === 'HR' && (
               <>
                 <li>
            <NavLink to='/' className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
            <FaHome />
               <span className="ms-3">Home</span>
            </NavLink>
         </li>
         <li>
            <NavLink to='employee-list' className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
            <FaClipboardList />
               <span className="ms-3">EmployeList</span>
            </NavLink>
         </li>

         <li>
            <NavLink to='progress' className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
            <FaBarsProgress />
               <span className="ms-3">Progress</span>
            </NavLink>
         </li>
               
               </>
            )
         }

    

         {/* For employee */}


         {
          userRole === 'Employee' &&  (
            <>

<li>
            <NavLink to='/' className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
            <FaHome />
               <span className="ms-3">Home</span>
            </NavLink>
         </li>
            
         <li>
            <NavLink to='payment-history' className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
            <FaHistory />
               <span className="ms-3">Paymnet History</span>
            </NavLink>
         </li>

         <li>
            <NavLink to='work-sheet' className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
            <FaSheetPlastic />
               <span className="ms-3">Work Sheet</span>
            </NavLink>
         </li>
            
            </>
          )
         }


         {/* For Admin */}

         {
            userRole === 'Admin' && (
               <>

<li>
            <NavLink to='/' className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
            <FaHome />
               <span className="ms-3">Home</span>
            </NavLink>
         </li>
         
               <li>
            <NavLink to='all-employee-list' className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
            <FaClipboardList />
               <span className="ms-3">All Employee list</span>
            </NavLink>
         </li>
               
               </>
            )
         }

         



  
      </ul>
   </div>
</aside>

<div className="p-4 sm:ml-64">
   <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
     

<Outlet></Outlet>


     
      
   </div>
</div>

            </div>
        </div>
    );
};

export default Dashboard;