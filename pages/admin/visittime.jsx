import React from "react";
import TableTime from "../../components/table/TableTime";
import withAuth from "../../components/utils/privateRoutes";
import { useDispatch, useSelector } from "react-redux";
import { getAllGuests } from "../../actions/guest";
import Pagination from "../../components/pagination/Pagination";
import { getFilteredByTime } from "../../components/utils/filtered";
import Search from "../../components/search/Search";
import ButtonPrint from "../../components/print/ButtonPrint";
import Loader from "../../components/loader/FadeLoader";
import VisitTimePrint from "../../components/print/VisitTimePrint";

function Visittime() {
  const dispatch = useDispatch();
  const { guest } = useSelector((state) => state.allGuests);
  const [filter, setFilter] = React.useState(null);
  const [activePage, setActivePage] = React.useState(1);

  const componentRef = React.useRef();

  React.useEffect(() => {
    dispatch(getAllGuests());
  }, [dispatch]);

  return (
    <div className="flex-col h-full flex items-center justify-center font-sans overflow-hidden">
      <div className="flex justify-between flex-row items-center w-full">
        <p className="text-gray-800 font-light md:text-3xl">
          Data Waktu Kunjungan Tamu
        </p>
        <div className="flex flex-wrap ">
          <Search filter={filter} setFilter={setFilter} />
          <ButtonPrint componentRef={componentRef} />
        </div>
      </div>
      {guest ? (
        <>
          <div className="hidden">
            <div ref={componentRef}>
              <VisitTimePrint
                filter={filter}
                setFilter={setFilter}
                guest={guest}
                activePage={activePage}
                setActivePage={setActivePage}
              />
            </div>
          </div>
          <TableTime
            filter={filter}
            setFilter={setFilter}
            guest={guest}
            activePage={activePage}
            setActivePage={setActivePage}
          />

          {guest && getFilteredByTime(guest.guest, filter).length > 10 && (
            <Pagination
              data={guest.guest}
              activePage={activePage}
              setActivePage={setActivePage}
            />
          )}
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
}

export default withAuth(Visittime);
