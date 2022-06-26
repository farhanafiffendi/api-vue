const express = require('express')

const router = express.Router()

const { register, login, checkLogin } = require('../controllers/auth')

const { auth } = require('../middlewares/auth')

const { getUsers, getUser, getUserTrans } = require('../controllers/user')
const { getMember, updateMember, addMember, deleteMember } = require('../controllers/member')
const { getGroup, updateGroup, addGroup, deleteGroup } = require('../controllers/group')

// route
router.post('/register', register)
router.post('/login', login)
router.get('/check', auth, checkLogin)

router.post('/member', addMember)
router.get('/members', getMember)

router.post('/group', addGroup)
router.get('/groups', getGroup)

router.get('/users', getUsers)
//

router.get("/user/:id", getUser);

router.get("/userTrans", auth, getUserTrans);


module.exports = router