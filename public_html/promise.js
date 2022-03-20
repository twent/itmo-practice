function task(x) { 
    return checker = x = new Promise((res, rej) => x < 18 ? rej('no') : res('yes'));
};
