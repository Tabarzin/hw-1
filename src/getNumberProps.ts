const getNumberProps = (obj) => {
    if(obj === null ) throw new Error('INVALID_ARGUMENT');
    if(typeof obj !== 'object' || Array.isArray(obj) ) throw new Error('INVALID_ARGUMENT');
  
  let str = '';
  
  const updateStr = (obj) => {
    Object.keys(obj).forEach(key => {
      if(typeof obj[key] === 'number')  {str = str + key}
      
      if (typeof obj[key] === 'object' && obj[key] !== null) {
        updateStr(obj[key]) 
      }
    });
  };
  
  updateStr(obj);

  return str.split('').sort();
}


export default getNumberProps;
