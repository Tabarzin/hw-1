const bfs = (tree) => {
if (typeof tree !== 'object' || tree === null) throw new Error('INVALID_ARGUMENT');

let res: string[] = [];
let arr = [Object.keys(tree)[0]];

  while (arr.length > 0) {
    let i = arr.shift() as string;

    res.push(i);

    if (tree[i].length !== 0) {
      tree[i].forEach((br) => arr.push(br));
    }
  }

  return res;

};

export default bfs;
