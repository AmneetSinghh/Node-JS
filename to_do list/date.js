module.exports.getday = getday();

function getday() {
    // we are just taking the current date;
    var today = new Date();
    var options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };

    var day = today.toLocaleDateString("en-US", options);
    return day;
}

// what if we have to return the two functions;
function getdate() {
    // we are just taking the current date;
    var today = new Date();
    var options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };

    var day = today.toLocaleDateString("en-US", options);
    return day;
}
module.exports.getdate = getdate();
console.log(module.exports);

// what if we have to return the two functions;



// we can make a different different modules, bro;;