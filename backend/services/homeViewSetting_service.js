const db = require('./connectDB');

async function getHomeViewSetting(){
    const rows = await db.query(`SELECT * FROM homeViewSetting`);
    console.log( await rows);
  
    return await rows;
}

async function getHomeViewSettingId(data){
  const rows = await db.query(`SELECT * FROM homeViewSetting WHERE id_content= ?`,[data]);
  console.log( await rows);

  return await rows;
}

async function addHomeViewSetting(data){
  const rows = await db.query(`INSERT INTO homeViewSetting (content, image_url) VALUE (?, ?)`,[data.content, data.image_url]);
  console.log( await rows);

  return await rows;
}

async function updateHomeViewSetting(data,idHomeView){
  const rows = await db.query(`UPDATE homeViewSetting SET content=?, image_url=? WHERE id_content= ?`,[data.content, data.image_url, idHomeView]);
  if(rows )
  console.log( await rows);

  return await rows;
}


async function deleteHomeViewSetting(data){
  const rows = await db.query(`DELETE FROM homeViewSetting WHERE id_content= ?`,[data]);
  console.log( await rows);

  return await rows;
}
  
  
module.exports = {
  getHomeViewSetting,
  getHomeViewSettingId,
  addHomeViewSetting,
  updateHomeViewSetting,
  deleteHomeViewSetting
}