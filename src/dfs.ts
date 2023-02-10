const dfs = (tree) => {

if (typeof tree !== 'object' || tree === null) throw new Error('INVALID_ARGUMENT');

const res: string[] = [];

const fillRes = (i) => {
    res.push(i);

    tree[i].forEach(fillRes);

};

fillRes(Object.keys(tree)[0]);
return res;

};

export default dfs;

