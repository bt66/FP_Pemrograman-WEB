const db = require('./connectDB');

async function getTask(){
    const rows = await db.query(`SELECT * FROM product`);
    console.log( await rows);
  
    return await rows;
  }
  
  async function getTaskId(data){
    const rows = await db.query(`SELECT * FROM product WHERE id_product= ?`,[data.id_product]);
    console.log( await rows);
  
    return await rows;
  }
  
  async function addTask(data){
    const rows = await db.query(`INSERT INTO product (id_mediaTransmission, bandwidth, price, description) VALUE (?, ?, ?, ?)`,[data.id_mediaTransmission, data.bandwidth, data.price, data.description]);
    console.log( await rows);
  
    return await rows;
  }
  
  async function updateTask(data,productId){
    const rows = await db.query(`UPDATE product SET id_mediaTransmission=?, bandwidth=?, price=?, description=? WHERE id_product= ?`,[data.id_mediaTransmission, data.bandwidth, data.price, data.description, productId]);
    if(rows )
    console.log( await rows);
  
    return await rows;
  }
  
  
  async function deleteTask(data){
    const rows = await db.query(`DELETE FROM product WHERE id_product= ?`,[data.id_product]);
    console.log( await rows);
  
    return await rows;
  }
  
  
module.exports = {
    getTask,
    getTaskId,
    addTask,
    updateTask,
    deleteTask
}