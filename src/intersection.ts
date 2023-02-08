function intersection (array1, array2) {
   const notNum = (elem) => typeof(elem) !== 'number';
  
 if(arguments.length < 2) throw new Error('INVALID_ARGUMENTS_COUNT');
 else if(!Array.isArray(array1) ||  !Array.isArray(array2)) throw new Error('INVALID_ARGUMENT')
   else if (array1.some(notNum) || array2.some(notNum)) throw new Error('INVALID_ELEMENT_IN_ARRAY')

   let inter = array1.filter(x => array2.includes(x));
  let res = new Set(inter)
  return Array.from(res)
  
};

export default intersection;
