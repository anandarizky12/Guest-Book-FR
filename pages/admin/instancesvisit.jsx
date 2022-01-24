import React from 'react'
import TableInstansi from '../../components/table/TableInstansi'
import withAuth from "../../components/utils/privateRoutes";
import { useDispatch, useSelector } from 'react-redux'
import {  getAllInstace } from '../../actions/guest'
import Pagination  from '../../components/pagination/Pagination'
import { getFiltered } from '../../components/utils/filtered';
import Search from '../../components/search/Search';
import ButtonPrint from '../../components/print/ButtonPrint';
import InstancePrint from '../../components/print/InstancePrint';
import Loader from '../../components/loader/FadeLoader';

function Instancevisit() {
    const dispatch = useDispatch()
    const instansi = useSelector(state => state.getAllInstanceReducer);
    // const { guest, loading } = allguest;
    const [filter, setFilter] = React.useState(null)
    const [activePage, setActivePage] = React.useState(1)

    const componentRef = React.useRef()
    
    React.useEffect(() => {
        dispatch(getAllInstace())
    }, [dispatch]);

    let data;


        if(instansi.data){
            data = instansi.data.total.filter(item => {
            return item.guest_count > 0    
        })}
        
    return (
        <div className='flex-col h-full flex items-center justify-center font-sans overflow-hidden'>
             <div className="flex justify-between flex-row items-center w-full">
                <p className='text-gray-800 font-light md:text-3xl'>Data Kunjunga Instansi</p>
                <div className="flex flex-wrap ">
                  
                    <Search filter={filter} setFilter={setFilter}/>
                    <ButtonPrint componentRef={componentRef} />
                </div>
             
            
            </div>
       
        {data ?
            <>
            <div className="hidden">
                <div  ref = {componentRef} >
                    <InstancePrint
                        filter={filter}
                        setFilter={setFilter}
                        instansi={data}
                        activePage={activePage}
                        setActivePage={setActivePage}
                    />
                </div>
            </div>
            <TableInstansi
                filter={filter}
                setFilter={setFilter}
                instansi={data}
                activePage={activePage}
                setActivePage={setActivePage}
            />
          
                {data && getFiltered(data , filter).length > 10 && <Pagination data={data} activePage={activePage} setActivePage={setActivePage} />}
          </>
         :
         <Loader/> 
        }
        </div>
    )
}

export default  withAuth(Instancevisit)
