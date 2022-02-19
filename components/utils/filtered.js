import moment from "moment";

// 'FROM(01/31/2022-02/04/2022)'
function getDates(data, startDate, stopDate) {
  let ndata = [];

  for (let i = 0; i < data.length; i++) {
    if (
      moment(data[i].createdAt.slice(0, 10)).isSameOrAfter(startDate) &&
      moment(data[i].createdAt.slice(0, 10)).isSameOrBefore(stopDate)
    ) {
      ndata.push(data[i]);
    }
  }

  return ndata;
}

function getDatesInTime(data, startDate, stopDate) {
  let ndata = [];
  // console.log(data[4]);
  // console.log(moment('02/04/2022').isSameOrBefore(stopDate));
  for (let i = 0; i < data.length; i++) {
    if (
      moment(data[i].date2.slice(0, 10)).isSameOrAfter(startDate) &&
      moment(data[i].date2.slice(0, 10)).isSameOrBefore(stopDate)
    ) {
      ndata.push(data[i]);
    }
  }

  return ndata;
}

// moment().format('L');
export const getFiltered = (data, filter) => {
  // console.log(data)
  if (filter === null) {
    return data;
  } else if (filter.slice(0, 4) == "FROM") {
    let ndata = getDates(data, filter.slice(5, 15), filter.slice(16, 26));
    return ndata;
  } else {
    return data.filter((item) => {
      return Object.values(item).some((value) => {
        if (value)
          return JSON.stringify(value)
            .toLowerCase()
            .includes(filter.toLowerCase());
      });
    });
  }
};

export const getFilteredByTime = (data, filter) => {
  if (filter === null) {
    return data;
  } else if (filter.slice(0, 4) == "FROM") {
    // console.log(data)
    let ndata = getDatesInTime(data, filter.slice(5, 15), filter.slice(16, 26));
    return ndata;
  } else {
    return data.filter((item) => {
      if (item.date.slice(0, 3) == 202) {
        return (item.date = moment(item.date).format("LLLL"));
      }

      return Object.values(item).some((value) => {
        if (value)
          return value.toString().toLowerCase().includes(filter.toLowerCase());
      });
    });

    //return each value of item equal to filter
  }
};

export const paginationData = (data, page, perPage) => {
  const start = (page - 1) * perPage;
  const end = page * perPage;
  return data.slice(start, end);
};
