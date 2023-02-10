const sort = (s) => {
  if(typeof(s) !== 'string') throw new Error('INVALID_ARGUMENT');
 
  let str = s.toLowerCase();
  let arr = str.split(' ');
  
  arr.sort((a, b) => a.length < b.length ? -1 : a > b ? 1 : 0);

  let newArr = arr.map((i) => i.split('').sort((a, b) => a < b ? -1 : a > b ? 1 : 0).join(''))

  return newArr.join(' ');
};

export default sort;


