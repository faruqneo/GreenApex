const Department = require('../model/department');

/*
     @des Creating a department.
*/
const departCreate = async(req, res) => {
    const depart = req.body;

    try {

        const departSave = await Department.create(depart);
        res.send(departSave);

    } catch (error) {

        console.error(error);
        res.statusCode(500).send(error);
    }
}

/*
     @des Upadting a department.
*/
const departUpdate = async(req, res) => {
    const {name, status} = req.body;
    
    try {
        
        const departdate = await Department.updateOne({name}, req.body);
        //const departdate = await Department.find({name});
        res.json({msg: 'Department is updated.', response: departdate});

    } catch (error) {
        
        console.error(error);
        res.statusCode(500).send(error);
    }
}

/*
     @des Fatching date of departments.
*/
const departGetActive = async(req, res) => {
    let departdate = null;

    try {

        if(req.query.departName)
            departdate = await Department.find({name: req.query.departName});
            // console.table(departdate)
            // res.send(departdate);
        
        else
            departdate = await Department.find({status: 'Active'});
            //res.send(departdate);
        
        
        console.table(departdate)

        if(departdate.length)
        res.send(departdate);

        else
        res.send("No department are active");

    } catch (error) {
        
        console.error(error);
        res.statusCode(500).send(error);
    }
}

/*
     @des Deleting a department.
*/
const departdelete = async(req, res) => {
    const {name} = req.body;

    try {
        
        const departdeleted = await Department.updateOne({name}, {status: "Deleted", updatedAt : Date.now()});
        res.json({msg: "department has been deleted.", response: departdeleted});

    } catch (error) {
        
        console.error(error);
        res.statusCode(500).send(error);

    }

}

module.exports = {departCreate, departUpdate, departdelete, departGetActive}