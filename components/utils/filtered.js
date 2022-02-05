import moment from 'moment'

export const getFiltered = (data, filter) => {
    if(filter === null){
        return data;
    }else{
        return data.filter(item => {
          return Object.values(item).some(value => {
            if(value) return JSON.stringify(value).toLowerCase().includes(filter.toLowerCase());
          });
        });
        
          //return each value of item equal to filter 
            
    };
};



export const getFilteredByTime = (data, filter) => {
  if(filter === null){
      return data;
  }else{
      return data.filter(item => {
        if(item.date.slice(0,3) == 202){
           return item.date =moment(item.date).format('LLLL');;
        }
     
        return Object.values(item).some(value => {
          if(value) return value.toString().toLowerCase().includes(filter.toLowerCase());
        });
      });
      
        //return each value of item equal to filter 
          
  };
};


export const paginationData = (data, page, perPage) => {    
    const start = (page - 1) * perPage;
    const end = page * perPage;
    return data.slice(start, end);
}