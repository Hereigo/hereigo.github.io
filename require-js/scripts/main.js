console.log('1 - html body loaded')

console.log('2 - main.js started')

requirejs(["helper/util"], function (util) {
    console.log('4 - util.js called by requirejs(["util"]')

    // This function is called when scripts/helper/util.js is loaded.
    // If util.js calls define(), then this function is not fired until
    // util's dependencies have loaded, and the util argument will hold
    // the module value for "helper/util".

    console.log('5 - requirejs(["util"] loaded')

});

console.log('3 - main.js loaded')