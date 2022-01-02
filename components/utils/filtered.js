export const getFiltered = (data, filter) => {
    if(filter === null){
        return data;
    }else{
        return data.filter(item => {
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