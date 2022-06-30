const db = require('./connectDB');

async function getTeam(){
    const rows = await db.query(`SELECT * FROM team`);
    console.log( await rows);
  
    return await rows;
  }
  
  async function getTeamId(data){
    const rows = await db.query(`SELECT * FROM team WHERE nim= ?`,[data]);
    console.log( await rows);
  
    return await rows;
  }
  
  async function addTeam(data){
    const rows = await db.query(`INSERT INTO team (nim, name, id_task, photo) VALUE (?, ?, ?, ?)`,[data.nim, data.name, data.id_task, data.photo]);
    console.log( await rows);
  
    return await rows;
  }
  
  async function updateTeam(data){
    const rows = await db.query(`UPDATE team SET name=?, id_task=?, photo=? WHERE nim= ?`,[data.name, data.id_task, data.photo, data.nim]);
    if(rows )
    console.log( await rows);
  
    return await rows;
  }
  
  
  async function deleteTeam(data){
    const rows = await db.query(`DELETE FROM team WHERE nim= ?`,[data]);
    console.log( await rows);
  
    return await rows;
  }
  
  
module.exports = {
    getTeam,
    getTeamId,
    addTeam,
    updateTeam,
    deleteTeam
}