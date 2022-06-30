const db = require('./connectDB');

async function getMediaTransmission(){
    const rows = await db.query(`SELECT * FROM product`);
    console.log( await rows);
  
    return await rows;
  }
  
  async function getMediaTransmissionId(data){
    const rows = await db.query(`SELECT * FROM product WHERE id_product= ?`,[data.id_product]);
    console.log( await rows);
  
    return await rows;
  }
  
  async function addMediaTransmission(data){
    const rows = await db.query(`INSERT INTO product (id_mediaTransmission, bandwidth, price, description) VALUE (?, ?, ?, ?)`,[data.id_mediaTransmission, data.bandwidth, data.price, data.description]);
    console.log( await rows);
  
    return await rows;
  }
  
  async function updateMediaTransmission(data,productId){
    const rows = await db.query(`UPDATE product SET id_mediaTransmission=?, bandwidth=?, price=?, description=? WHERE id_product= ?`,[data.id_mediaTransmission, data.bandwidth, data.price, data.description, productId]);
    if(rows )
    console.log( await rows);
  
    return await rows;
  }
  
  
  async function deleteMediaTransmission(data){
    const rows = await db.query(`DELETE FROM product WHERE id_product= ?`,[data.id_product]);
    console.log( await rows);
  
    return await rows;
  }
  
  
module.exports = {
    getMediaTransmission,
    getMediaTransmissionId,
    addMediaTransmission,
    updateMediaTransmission,
    deleteMediaTransmission
}