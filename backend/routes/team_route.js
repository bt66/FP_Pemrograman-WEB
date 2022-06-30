const express = require('express');

const router = express.Router();
const team = require('../services/team_service')


router.get('/', async function(req, res, next) {
    try {
      result = await team.getTeam();
      res.json(await result[0]);
    } catch (err) {
      console.error(`Error when get team`, err.message);
      res.json(err.message)
      next(err);
    }
});

router.get('/byId', async function(req, res, next) {
  try {
    console.log(req.params.nim)
    result = await team.getTeamId(req.body.nim);
    res.json(await result[0]);
  } catch (err) {
    console.error(`Error when get team`, err.message);
    res.json(err.message)
    next(err);
  }
});

router.post('/', async function(req, res, next) {
  try {
    result = await team.addTeam(req.body);
    res.json(await result[0]);
  } catch (err) {
    console.error(`Error when add team`, err.message);
    res.json(err.message)
    next(err);
  }
});

router.put('/', async function(req, res, next) {
  try {
    result = await team.updateTeam(req.body);
    res.json(await result[0]);
  } catch (err) {
    console.error(`Error when update team`, err.message);
    res.json(err.message)
    next(err);
  }
});

router.delete('/', async function(req, res, next) {
  try {
    result = await team.deleteTeam(req.body.nim);
    res.json(await result[0]);
  } catch (err) {
    console.error(`Error when delete team`, err.message);
    res.json(err.message)
    next(err);
  }
});

module.exports = router;