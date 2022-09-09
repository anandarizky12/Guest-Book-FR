import React from "react";
import withAuth from "../../../components/utils/privateRoutes";
import { useDispatch, useSelector } from "react-redux";
import { getGuest } from "../../../actions/guest";
import { useRouter } from "next/router";
import MLoader from "../../../components/loader/MoonLoader";
import CardDetailGuest from "../../../components/card/CardDetailGuest";

function DetailGuest() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.getGuestReducer);
  const { guest, loading } = data;
  const router = useRouter();
  const id = router.query.index;

  React.useEffect(() => {
    dispatch(getGuest(id));
  }, [id, dispatch]);

  return (
    <div className="flex  items-center h-screen">
      {guest && !loading ? (
        <CardDetailGuest id={id} data={guest.guest} />
      ) : (
        <MLoader />
      )}
    </div>
  );
}

export default withAuth(DetailGuest);
