import React from "react";
import CardEditProfile from "../../components/card/CardEditProfile";
import withAuth from "../../components/utils/privateRoutes";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../components/loader/FadeLoader";
import { getAdmin } from "../../actions/admin";

const Editprofile = () => {
  const admin = useSelector((state) => state.getAdmin);
  const { data } = admin;
  const auth = useSelector((state) => state.auth);
  const { adminInfo } = auth;

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getAdmin(adminInfo.adminData.id));
  }, [dispatch]);

  return <div>{data ? <CardEditProfile data={data} /> : <Loader />}</div>;
};

export default withAuth(Editprofile);
