const router = require('express').Router();

//Controller modules
const {departCreate, departUpdate, departdelete, departGetActive} = require('../controller/departmentController');
const {skillCreate, skillUpdate, skillGetActive, skilldelete, skillGetAll} = require('../controller/skillController');

/*
     @des Route for deparment.
*/
router
    .route('/department')
        .get(departGetActive)
        .post(departCreate)
        .put(departUpdate)
        .delete(departdelete)

/*
     @des Route for skill.
*/
router
    .route('/skill')
        .get(skillGetActive)
        .post(skillCreate)
        .put(skillUpdate)
        .delete(skilldelete)

/*
     @des Route for all skills.
*/
router
    .route('/skill/All')
        .get(skillGetAll)

module.exports = router;