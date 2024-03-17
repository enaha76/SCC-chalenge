const ChallengeServices = require('../services/challengesService');

async function getAllChallenges(req, res) {
  try {
    const challenges = await ChallengeServices.getAllChallenges();
    res.json(challenges);
  } catch (error) {
    console.error('Erreur :', error);
    res.status(500).json({ error: 'Erreur interne du serveur' });
  }
}

async function createChallenges(req, res) {
  try {
    const challengeData = req.body;
    const challenge = await ChallengeServices.createChallenges(challengeData);
    res.status(201).json(challenge);
  } catch (error) {
    console.error('Erreur lors de la création de utilisateur :', error);
    res.status(500).json({ error: 'Erreur interne du serveur' });
  }
}
async function getChallengesById(req, res) {
  const challengesId = req.params.id;
  try {
    const challenge = await ChallengeServices.getChallengesById(challengesId);
    res.json(challenge);
  } catch (error) {
    console.error(`Erreur ${challengesId} :`, error);
    res.status(500).json({ error: 'Erreur interne du serveur' });
  }
}
async function updateChallenges(req, res) {
  const challengesId = req.params.id;
  const challengeData = req.body;
  try {
    const challenge = await ChallengeServices.updateChallenges(challengesId, challengeData);
    res.json(challenge);
  } catch (error) {
    console.error(`Erreur ${challengesId} :`, error);
    res.status(500).json({ error: 'Erreur interne du serveur' });
  }
}
async function deleteChallenges(req, res) {
  const challengesId = req.params.id;
  try {
    const challenge = await ChallengeServices.deleteChallenges(challengesId);
    res.json(challenge);
  } catch (error) {
    console.error(`Erreur lors de la suppression ${challengesId} :`, error);
    res.status(500).json({ error: 'Erreur interne du serveur'});
  }
}
module.exports = {
  getAllChallenges,
  getChallengesById,
  createChallenges,
  updateChallenges,
  deleteChallenges
};
