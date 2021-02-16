const myPromise = new Promise((resolve, reject) => {
    if (false) {
        setTimeout(() => {
            resolve('I have succeeded');
        }, 1000);
    } else {
        reject('I have Failed');
    }

});

myPromise
    .then(value => console.log(value))
    .catch(rejectValue => console.log(rejectValue));