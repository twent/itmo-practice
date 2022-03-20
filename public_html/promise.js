async function task(x) { 
    const checkAge = age => new Promise((res, rej) => age < 18 ? rej('no') : res('yes'));
    checkAge(x)
        .then(result => { return result } )
        .catch(error => { return error});
}