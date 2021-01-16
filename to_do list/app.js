const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const date = require(__dirname + "/date.js"); /// importing the module;
var items = ["Heena", "Aditya", "Mayank"];
var worklistitems = [];
app.set('view engine', 'ejs');
console.log(date);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("public"));
app.get("/", function(req, res) {
    // simple call the render function
    res.render("list", { listtytle: date.getdate(), items: items }); // WE HAVE TO WRITE THE THINGS, OR THE VARIALBES WHICH ARE CHANGING IN THE TEMPLATING;
});
// every time you use the render we have to providee the all changing variables.


//newlistitem
app.post("/", function(req, res) {


    // This is the logic on the server, that seprate the listes from other list.
    var item = req.body.newItem;
    // list is the name of the button
    if (req.body.list == "Work-List") {
        worklistitems.push(item);
        res.redirect("/work"); // again back to that page.
    } else {
        items.push(item);
        res.redirect("/"); // again back to this page.
    }

});



/// work route
app.get("/work", function(req, res) {

    // work-list is the predefined bab..
    res.render("list", { listtytle: "Work-List", items: worklistitems });

});

app.post("/work", function(req, res) {
    console.log(req.body);
    // var item = req.body.newItem;
    // worklistitems.push(item);
    res.redirect("/work"); // it will redirect again to this page;

});


app.get("/about", function(req, res) {
    res.render("about");
})

app.listen(3003, function() {
    console.log("Server is running");
});