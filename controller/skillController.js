const Skill = require('../model/skill');

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

const skillUpdate = async(req, res) => {
    const {name, status, department} = req.body;
    
    try {
        
        const skilldate = await Skill.updateOne({name}, {status, department, updatedAt : Date.now});
        //const departdate = await Department.find({name});
        res.json({msg: 'Skill is updated.', response: skilldate});

    } catch (error) {
        
        console.error(error);
        res.statusCode(500).send(error);
    }
}

const skillGetActive = async(req, res) => {
    try {

        if(req.query.skillName)
        {
            const skilldata = await Skill.find({name: req.query.skillName});
            console.table(skilldata)
            res.send(skilldata);
        }
        else
        {
            const skilldata = await Skill.find({status: 'Active'});

            console.table(skilldata)

            if(skilldata.length)
                res.send(skilldata);

            else
            res.send("No skills are active");
            //res.send(skilldata);
    
        }
        

    } catch (error) {
        
        console.error(error);
        res.statusCode(500).send(error);
    }
}

const skilldelete = async(req, res) => {

    const {name} = req.body;

    try {
        
        const skilldeleted = await Skill.updateOne({name}, {status: "Deleted", updatedAt : Date.now});
        res.json({msg: "department has been deleted.", response: skilldeleted});

    } catch (error) {
        
        console.error(error);
        res.statusCode(500).send(error);

    }

}

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