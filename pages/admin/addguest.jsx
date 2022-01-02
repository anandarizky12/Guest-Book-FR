import React from 'react'
import CardAddGuest from '../../components/card/CardAddGuest';
import withAuth from '../../components/utils/privateRoutes';

function Addguest() {
    return (
        <div className="flex flex-wrap">
              <CardAddGuest/>
       </div>
    )
}


export default  withAuth(Addguest);
