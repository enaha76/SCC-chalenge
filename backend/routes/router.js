const userController = require('../controllers/userController'); // Assurez-vous de spécifier le chemin correct vers votre contrôleur
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
module.exports = router;
