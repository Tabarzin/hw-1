// @ts-nocheck

const patchArrays = (): void => {


  Array.prototype.count = function() {
    let res = 0;
    for(let i = 0; i < this.length; i++){
      res++
    }
    return res
}
  
 Array.prototype.insert = function(index) {
    if(typeof index !== 'number') throw new Error('INVALID_ARGUMENT');
    if(index < 0) index = 0;
    this.splice.apply(this, [index, 0].concat(
        Array.prototype.slice.call(arguments, 1)));
    return this;
};
    
Array.prototype.remove = function(a) {
  for (let i = 0; i < this.length; i++) {
    if(a === this[i]) {this.splice(i, 1);
    return this;
    }
    if(!(this.includes(a))) return this
  } 
  return this
  
}



};

export default patchArrays;
