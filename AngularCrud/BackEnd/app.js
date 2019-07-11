var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var connectionStirng = process.env.DATABASE_URL || "pg://postgres:root@localhost:5432/arunDb";
var pg = require("pg");
var client = new pg.Client(connectionStirng);
var port = process.env.PORT || 5000;

client.connect(function (error) {
    if (error) {
        console.log("client problem with postgresql" + error)
    } else {
        console.log("Client connected with database");
    }
});
app.use(bodyParser.json({ limit: '500mb' }));
app.use(bodyParser.urlencoded({ limit: '500mb', extended: true }));

app.listen(port, (err) => {
    if (err) {
        console.log("server not started" + err);
    } else {
        console.log("server started at http://localhost:" + port);
    }
})

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.post('/newemployee', function (req, res, next) {
    // Handle the post for this route
    ename = req.body.ename;
    edesignation = req.body.edesignation;
    esalary = req.body.esalary;
    eemail = req.body.eemail;
    ephone = req.body.ephone;

    console.log("Entered into node new empdetails url" + ename, edesignation, esalary, eemail, ephone);
    var query = "insert into public.employee (ename, edesignation, esalary, eemail, ephone)values ($1,$2,$3,$4,$5)";

    client.query(query, [ename, edesignation, esalary, eemail, ephone], function (error, rows) {
        if (error) {
            console.log("problem while inserting postgresql" + error);
        } else {
            console.log("Inserted sucessfully" + rows)
            res.status(200).send({
                success: true,
                messsage: "insert sucess"
            })
        }
    })

});

app.get('/fetchempdetails', function (req, res, next) {
    var query = "select * from public.employee";
    client.query(query, function (err, rows) {
        if (err) {
            console.log("problem in fetching data from postgresql");
        } else {
            console.log("Data fetched sucessfully");
            res.send(rows.rows)
        }

    })
});


app.get('/getempdetailsbyid/:eid', function (req, res, next) {
    var id = req.params.eid;
    console.log("----------------------")
    var query = "select * from public.employee where id=$1";
    client.query(query, [id], function (err, rows) {
        if (err) {
            console.log("problem while fetching the emplist by id")
        } else {
            console.log("emplist by id sucessfull");
            console.log(rows.rows);
            res.send(rows.rows);
        }
    })
});

app.post('/updateEpmListbyId', function (req, res, next) {
    let id = req.body.eList.id;
    let ename = req.body.eList.ename;
    let edesignation = req.body.eList.edesignation;
    let esalary = req.body.eList.esalary;
    let eemail = req.body.eList.eemail;
    let ephone = req.body.eList.ephone;
    console.log("-------------------->" + id, ename, edesignation, esalary, eemail, ephone);
    var query = "update public.employee set ename=$1,edesignation=$2,esalary=$3,eemail=$4,ephone=$5 where id=$6";
    client.query(query, [ename, edesignation, esalary, eemail, ephone, id], function (err, rows) {
        if (err) {
            console.log("problem while updating the empList by id");
        } else {
            console.log("Employee list by id sucessfully updated");
            res.status(200).send({
                messsage: "updated sucess"
            })
        }
    })
})


app.post('/deleteEmplistbyId/:eid', function (req, res) {
    let id = req.params.eid;
    console.log(id);
    query = "delete from public.employee where id=$1";
    client.query(query,[id], function (err, rows) {
        if (err) {
            console.log("problem in deleting the record by id")
        } else {
            console.log("record deleted sucessfully");
            res.status(200).send({
                messsage: "deleted sucess"
            })
        }
    });
});