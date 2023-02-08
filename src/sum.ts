const sum = (...args) => {

  if(args.length < 2 ) throw new Error('INVALID_ARGUMENTS_COUNT')
 
  let result = 0;

  for (let arg of args) {
    if(typeof(arg) !== 'number') {
      throw new Error('INVALID_ARGUMENT')
    } else { 
      result = result + arg;
    }
  } 

  return result;
};

export default sum;
