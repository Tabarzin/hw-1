const removeAnagrams = (arr) => {
    if(!(Array.isArray(arr))) throw new Error('INVALID_ARGUMENT');


 const obj = {};
  
    for (const word of arr) {
        if(typeof word !== 'string') throw new Error('INVALID_ELEMENT_IN_ARRAY');
        let sorted = word.toLowerCase().split("").sort().join("");
        obj[sorted] = sorted in obj ? undefined : word;
    }

    return Object.values(obj).filter(Boolean);

};

export default removeAnagrams;



