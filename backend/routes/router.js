const userController = require('../controllers/userController');
const teamsController = require('../controllers/teamController')
const router = require('express').Router();

router.get("/", (req,res,next)=>{
    res.send("Hello Hadrami")
});

router.get("/soumission", (req,res,next)=>{
    res.send("You can submit your work !");
});
router.get('/users', userController.getAllUsers);
router.post('/users', userController.createUser);
router.get('/users/:id', userController.getUserById);
router.put('/users/:id', userController.updateUser);
router.delete('/users/:id', userController.deleteUser);
router.get('/teams', teamsController.getAllTeams);
router.post('/teams', teamsController.createTeams);
router.get('/teams/:id', teamsController.getTeamsById);
router.put('/teams/:id', teamsController.updateTeams);
router.delete('/teams/:id', teamsController.deleteTeams);
module.exports = router;
