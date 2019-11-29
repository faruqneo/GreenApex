const Department = require('../model/department');

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

const departUpdate = async(req, res) => {
    const {name, status} = req.body;
    
    try {
        
        const departdate = await Department.updateOne({name}, {status, updatedAt : Date.now});
        //const departdate = await Department.find({name});
        res.json({msg: 'Department is updated.', response: departdate});

    } catch (error) {
        
        console.error(error);
        res.statusCode(500).send(error);
    }
}

const departGetActive = async(req, res) => {

    try {

        if(req.query.departName)
        {
            const departdate = await Department.find({name: req.query.departName});
            console.table(departdate)
            res.send(departdate);
        }
        else
        {
            const departdate = await Department.find({status: 'Active'});
            //res.send(departdate);
            console.table(departdate)

            if(departdate.length)
            res.send(departdate);

            else
            res.send("No department are active");
    
        }
        

    } catch (error) {
        
        console.error(error);
        res.statusCode(500).send(error);
    }
}

const departdelete = async(req, res) => {
    const {name} = req.body;

    try {
        
        const departdeleted = await Department.updateOne({name}, {status: "Deleted", updatedAt : Date.now});
        res.json({msg: "department has been deleted.", response: departdeleted});

    } catch (error) {
        
        console.error(error);
        res.statusCode(500).send(error);

    }

}

module.exports = {departCreate, departUpdate, departdelete, departGetActive}