const db = require('./connectDB');

async function getAboutMeViewSetting(){
    const rows = await db.query(`SELECT * FROM aboutMeViewSetting`);
    console.log( await rows);
  
    return await rows;
}

async function getAboutMeViewSettingId(data){
  const rows = await db.query(`SELECT * FROM aboutMeViewSetting WHERE id_content= ?`,[data]);
  console.log( await rows);

  return await rows;
}

async function addAboutMeViewSetting(data){
  const rows = await db.query(`INSERT INTO aboutMeViewSetting (content, image_url) VALUE (?, ?)`,[data.content, data.image_url]);
  console.log( await rows);

  return await rows;
}

async function updateAboutMeViewSetting(data,idAboutMeView){
  const rows = await db.query(`UPDATE aboutMeViewSetting SET content=?, image_url=? WHERE id_content= ?`,[data.content, data.image_url, idAboutMeView]);
  if(rows )
  console.log( await rows);

  return await rows;
}


async function deleteAboutMeViewSetting(data){
  const rows = await db.query(`DELETE FROM aboutMeViewSetting WHERE id_content= ?`,[data]);
  console.log( await rows);

  return await rows;
}
  
  
module.exports = {
  getAboutMeViewSetting,
  getAboutMeViewSettingId,
  addAboutMeViewSetting,
  updateAboutMeViewSetting,
  deleteAboutMeViewSetting
}