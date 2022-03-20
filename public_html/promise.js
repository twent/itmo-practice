// const task = x => {
//     return new Promise((res, rej) => x < 18 ? rej('no') : res('yes'));
// };

function task(x) { 
    return new Promise((res, rej) => x < 18 ? rej('no') : res('yes'));
};
