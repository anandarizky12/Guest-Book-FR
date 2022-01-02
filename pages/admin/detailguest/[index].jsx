import React from 'react'
import withAuth from '../../../components/utils/privateRoutes';
import { useDispatch, useSelector } from "react-redux";
import { getGuest } from "../../../actions/guest";
import { useRouter } from "next/router";
import MLoader from '../../../components/loader/MoonLoader';
import CardDetailGuest from '../../../components/card/CardDetailGuest';

function DetailGuest() {
   
    const dispatch = useDispatch();
    const data = useSelector(state => state.getGuestReducer);
    const { guest } = data
    const router = useRouter();
    const id = router.query.index;

    React.useEffect(() => {    
        dispatch(getGuest(id));
    }, [id]);


    return (
        <div className="flex flex-wrap items-center w-full">
    
        {guest ?<CardDetailGuest id={id} data={guest.guest}/>
        : <MLoader/>
        }
   </div>
    )
}

export default withAuth(DetailGuest);
