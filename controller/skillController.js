const Skill = require('../model/skill');

/*
     @des Creating a skill.
*/
const skillCreate = async(req, res) => {
    const skill = req.body;

    try {

        const skillSave = await Skill.create(skill);
        res.send(skillSave);

    } catch (error) {

        console.error(error);
        res.statusCode(500).send(error);
    }
}

/*
     @des Updating a skill.
*/
const skillUpdate = async(req, res) => {
    const {name, status, department} = req.body;
    
    try {
        const skilldate = await Skill.updateOne({name}, req.body);
        //const departdate = await Department.find({name});
        res.json({msg: 'Skill is updated.', response: skilldate});

    } catch (error) {
        
        console.error(error);
        res.statusCode(500).send(error);
    }
}

/*
     @des Fatching of skills.
*/
const skillGetActive = async(req, res) => {

    let skilldata = null;
    try {

        if(req.query.skillName)
            skilldata = await Skill.find({name: req.query.skillName});
            // console.table(skilldata)
            // res.send(skilldata);
        
        else
            skilldata = await Skill.find({status: "Active"});


            //res.send(skilldata);
    
        console.table(skilldata)

        if(skilldata.length)
            res.send(skilldata);

        else
        res.send("No skills are active");
        

    } catch (error) {
        
        console.error(error);
        res.statusCode(500).send(error);
    }
}

/*
     @des Deleting a skill.
*/
const skilldelete = async(req, res) => {

    const {name} = req.body;

    try {
        
        const skilldeleted = await Skill.updateOne({name}, {status: "Deleted", updatedAt : Date.now()});
        res.json({msg: "skill has been deleted.", response: skilldeleted});

    } catch (error) {
        
        console.error(error);
        res.statusCode(500).send(error);

    }

}

/*
     @des Fatching data of all skills.
*/
const skillGetAll = async(req, res) => {

    try {
        const skilldata = await Skill.find({status: 'Active'}).populate('department');
        console.table(skilldata);
        res.send(skilldata);
    } catch (error) {
        
        console.error(error);
        res.statusCode(500).send(error);

    }

}

module.exports = {skillCreate, skillUpdate, skillGetActive, skilldelete, skillGetAll}