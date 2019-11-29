const router = require('express').Router();

//Controller import
const {departCreate, departUpdate, departdelete, departGetActive} = require('../controller/departmentController');
const {skillCreate, skillUpdate, skillGetActive, skilldelete, skillGetAll} = require('../controller/skillController');

router
    .route('/department')
    .get(departGetActive)
    .post(departCreate)
    .put(departUpdate)
    .delete(departdelete)


router
    .route('/skill')
    .get(skillGetActive)
    .post(skillCreate)
    .put(skillUpdate)
    .delete(skilldelete)

router
    .route('/skill/All')
    .get(skillGetAll)

module.exports = router;