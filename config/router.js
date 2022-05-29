const express =require('express')
const router = express.Router()
const controller = require('../controllers/controller')


router.get('/feed', controller.getHomepage)
router.all('/feed', controller.postNewMessage)

router.get('/feed/:id', controller.showOneMessage)

router.all('/feed/edit/:id', controller.updateOneMessage)

router.get('/feed/delete-message/:id',controller.deleteOneMessage)
router.get('/editContent', controller.nameAndMessageLengths)

router.get('/*', controller.notFound)


module.exports = router

  