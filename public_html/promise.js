function task(x) { 
    const checkAge = new Promise((res, rej) => age < 18 ? rej('no') : res('yes'));
    return checkAge(x);
}