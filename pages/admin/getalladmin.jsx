import React from 'react'
import TableAdmin from '../../components/table/TableAdmin'
import withAuth from "../../components/utils/privateRoutes";
import { useDispatch, useSelector } from 'react-redux'
import { getAllAdmin } from '../../actions/admin';
import Pagination  from '../../components/pagination/Pagination'
import { getFiltered } from '../../components/utils/filtered';
import Search from '../../components/search/Search';
import ButtonPrint from '../../components/print/ButtonPrint';
import AdminDataPrint from '../../components/print/AdminDataPrint';
import Loader from '../../components/loader/FadeLoader';

function Getalladmin() {
    const dispatch = useDispatch()
    const { data }= useSelector(state => state.getAllAdmin);
    const [filter, setFilter] = React.useState(null)
    const [activePage, setActivePage] = React.useState(1)
   
    const componentRef = React.useRef()
    
    React.useEffect(() => {
        dispatch(getAllAdmin())
    }, [dispatch]);

  
    return (
        <div className='flex-col h-full flex items-center justify-center font-sans overflow-hidden'>
             <div className="flex justify-between flex-row items-center w-full">
                <p className='text-gray-800 font-light md:text-3xl'>Data Admin</p>
                <div className="flex flex-wrap ">
                  
                    <Search filter={filter} setFilter={setFilter}/>
                    <ButtonPrint componentRef={componentRef} />
                </div>
             
            
            </div>
        {data ? 
            <>
              <div className="hidden">
                  <div  ref = {componentRef} >
                      <AdminDataPrint
                          filter={filter}
                          setFilter={setFilter}
                          admin={data}
                          activePage={activePage}
                          setActivePage={setActivePage}
                      />
                  </div>
              
              </div>
              <TableAdmin 
                  filter={filter}
                  setFilter={setFilter}
                  admin={data}
                  activePage={activePage}
                  setActivePage={setActivePage}
              />
            
                  {getFiltered(data.adminData , filter).length > 10 && <Pagination data={data.adminData} activePage={activePage} setActivePage={setActivePage} />}
            </>
            :
            <Loader/>
           }
        </div>
    )
}


export default  withAuth(Getalladmin)

