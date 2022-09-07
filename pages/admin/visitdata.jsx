import React from "react";
import withAuth from "../../components/utils/privateRoutes";
import MainBar from "../../components/graph/Bar";
import { useDispatch, useSelector } from "react-redux";
import { getTotalGuest } from "../../actions/guest";
import ButtonPrint from "../../components/print/ButtonPrint";
import Loader from "../../components/loader/FadeLoader";
import VisitDataPrint from "../../components/print/VisitDataPrint";

function VisitData() {
  const [year, setYear] = React.useState({ year: new Date().getFullYear() });
  const dispatch = useDispatch();
  const data = useSelector((state) => state.getTotalGuestReducer);
  const { guest, loading } = data;

  const componentRef = React.useRef();

  React.useEffect(() => {
    dispatch(getTotalGuest(year));
  }, [year]);

  return (
    <>
      {guest ? (
        <>
          <div className="mb-2 flex justify-between">
            <div name="select">
              <label className="text-gray-800" htmlFor="year">
                Tahun
              </label>
              <select
                className="ml-2 p-2 rounded-md text-gray-500"
                onChange={(e) => setYear({ year: e.target.value })}
                name="year"
                id="year"
              >
                {guest.yearExist.map((n) => (
                  <option selected={n == year.year} key={n} value={n}>
                    {n}
                  </option>
                ))}
              </select>
            </div>
            <ButtonPrint componentRef={componentRef} />
          </div>
          <div className="hidden">
            <div ref={componentRef}>
              <VisitDataPrint
                year={year}
                total={guest.month}
                totalGuest={guest.totalGuest}
              />
            </div>
          </div>
          <div className="flex flex-col h-full justify-center items-center text-gray-100 bg-white p-2 rounded-md">
            <MainBar year={year} report={guest.month} />
            <div className="flex items-start justify-end w-full">
              <p className="mr-7 font-semibold text-xs md:text-sm text-gray-500 p-2 float-right">
                Total Kunjungan Tahun {year.year} : {guest.totalGuest} orang
              </p>
            </div>
          </div>
        </>
      ) : (
        <Loader />
      )}
    </>
  );
}

export default withAuth(VisitData);
