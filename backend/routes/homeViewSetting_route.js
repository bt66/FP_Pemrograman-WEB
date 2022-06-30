const express = require('express');

const router = express.Router();
const homeViewSetting = require('../services/homeViewSetting_service')


router.get('/', async function(req, res, next) {
    try {
      result = await homeViewSetting.getHomeViewSetting();
      res.json(await result[0]);
    } catch (err) {
      console.error(`Error when get contact`, err.message);
      res.json(err.message)
      next(err);
    }
});

router.get('/byId/:idHomeViewSetting', async function(req, res, next) {
  try {
    console.log(req.params.idHomeViewSetting)
    result = await homeViewSetting.getHomeViewSettingId(req.params.idHomeViewSetting);
    res.json(await result[0]);
  } catch (err) {
    console.error(`Error when get contact`, err.message);
    res.json(err.message)
    next(err);
  }
});

router.post('/', async function(req, res, next) {
  try {
    result = await homeViewSetting.addHomeViewSetting(req.body);
    res.json(await result[0]);
  } catch (err) {
    console.error(`Error when add contact`, err.message);
    res.json(err.message)
    next(err);
  }
});

router.put('/:idHomeViewSetting', async function(req, res, next) {
  try {
    result = await homeViewSetting.updateHomeViewSetting(req.body,req.params.idHomeViewSetting);
    res.json(await result[0]);
  } catch (err) {
    console.error(`Error when update contact`, err.message);
    res.json(err.message)
    next(err);
  }
});

router.delete('/:idHomeViewSetting', async function(req, res, next) {
  try {
    result = await homeViewSetting.deleteHomeViewSetting(req.params.idHomeViewSetting);
    res.json(await result[0]);
  } catch (err) {
    console.error(`Error when delete contact`, err.message);
    res.json(err.message)
    next(err);
  }
});

module.exports = router;