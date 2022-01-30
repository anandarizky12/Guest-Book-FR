import React from 'react'
import CardEditGuest from '../../../components/card/CardEditGuest';
import withAuth from '../../../components/utils/privateRoutes';
import { useDispatch, useSelector } from "react-redux";
import { getGuest } from "../../../actions/guest";
import { useRouter } from "next/router";
import Loader from '../../../components/loader/FadeLoader';
function Addguest() {
  
    const dispatch = useDispatch();
    const data = useSelector(state => state.getGuestReducer);
    const { guest, loading } = data
    const router = useRouter();
    const id = router.query.index;

    React.useEffect(() => {    
        dispatch(getGuest(id));
    }, [id]);

    return (
        <div className="flex flex-wrap items-center w-full">
    
            {guest && loading == false ? 
            (<CardEditGuest id={id} data={guest.guest}/>)
            :   (<Loader/>)
            }
       </div>
    )
}

export default  withAuth(Addguest);
