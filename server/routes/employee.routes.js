// get dependencies
const express = require('express'); // call express
const router = express.Router(); // get an instance of express router
const ObjectId = require('mongoose').Types.ObjectId;

// get files
const Employee = require('../model/employee');

// employee list route
router.get('/', (req, res) => {
    Employee.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in retriving employees: ' + JSON.stringify(err, undefined, 2)); }
    });
});

// add employee route
router.post('/', (req, res) => {
    var emp = new Employee({
        name: req.body.name,
        position: req.body.position,
        office: req.body.office,
        salary: req.body.salary
    });

    emp.save((err, doc) => {
        if (!err) res.send(doc);
        else console.log('Error in saving employee: ' + JSON.stringify(err, undefined, 2));
    });
});

// get employee by id route
router.get('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send('No record with given id: ${req.params.id}');

    Employee.findById(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else {console.log('Error in retrving employee :' + JSON.stringify(err, undefined, 2));}
    });
});

// edit employee by id route
router.put('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send('No record with given id: ${req.params.id}');

    var emp = {
        name: req.body.name,
        position: req.body.position,
        office: req.body.office,
        salary: req.body.salary
    };

    Employee.findByIdAndUpdate(req.params.id, { $set: emp }, { new: true }, (err, doc) => {
        if (!err) { res.send(doc); }
        else {console.log('Error in updating employee :' + JSON.stringify(err, undefined, 2));}
    });
});

// delete employee by id route
router.delete('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send('No record with given id: ${req.params.id}');

    Employee.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else {console.log('Error in updating employee :' + JSON.stringify(err, undefined, 2));}
    });
});

module.exports = router;