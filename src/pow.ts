const curry =(fn) =>{
    let curried;
    return curried = (...args) => {
        if (fn.length !== args.length){
            return curried.bind(null, ...args)
        }
    return fn(...args);
    };
}




const doPow = (base, exponent) => {
  if(typeof(base) !== 'number' || typeof(exponent) !== 'number') {
    throw new Error('INVALID_ARGUMENT')
  }
   return Math.pow(base, exponent)
  }

const pow = curry(doPow);



export default pow;
