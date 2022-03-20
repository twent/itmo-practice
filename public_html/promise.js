async function task(x) { 
    const checkAge = age => new Promise((res, rej) => age < 18 ? rej('no') : res('yes'));
    return checkAge(x);
}