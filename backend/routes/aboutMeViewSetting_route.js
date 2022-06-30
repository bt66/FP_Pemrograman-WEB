const express = require('express');

const router = express.Router();
const aboutMeViewSetting = require('../services/aboutMeViewSetting_service')


router.get('/', async function(req, res, next) {
    try {
      result = await aboutMeViewSetting.getAboutMeViewSetting();
      res.json(await result[0]);
    } catch (err) {
      console.error(`Error when get AboutMeView`, err.message);
      res.json(err.message)
      next(err);
    }
});

router.get('/byId/:idAboutMeView', async function(req, res, next) {
  try {
    console.log(req.params.idAboutMeView)
    result = await aboutMeViewSetting.getAboutMeViewSettingId(req.params.idAboutMeView);
    res.json(await result[0]);
  } catch (err) {
    console.error(`Error when get AboutMeView`, err.message);
    res.json(err.message)
    next(err);
  }
});

router.post('/', async function(req, res, next) {
  try {
    result = await aboutMeViewSetting.addAboutMeViewSetting(req.body);
    res.json(await result[0]);
  } catch (err) {
    console.error(`Error when add AboutMeView`, err.message);
    res.json(err.message)
    next(err);
  }
});

router.put('/:idAboutMeView', async function(req, res, next) {
  try {
    result = await aboutMeViewSetting.updateAboutMeViewSetting(req.body,req.params.idAboutMeView);
    res.json(await result[0]);
  } catch (err) {
    console.error(`Error when update AboutMeView`, err.message);
    res.json(err.message)
    next(err);
  }
});

router.delete('/:idAboutMeView', async function(req, res, next) {
  try {
    result = await aboutMeViewSetting.deleteAboutMeViewSetting(req.params.idAboutMeView);
    res.json(await result[0]);
  } catch (err) {
    console.error(`Error when delete AboutMeView`, err.message);
    res.json(err.message)
    next(err);
  }
});

module.exports = router;