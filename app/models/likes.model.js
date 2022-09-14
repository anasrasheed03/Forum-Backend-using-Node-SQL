const db = require('../config/db.config');

class Likes {
  constructor(postId, createdBy){
    this.postId = postId;
    this.createdBy = createdBy;
  }
  
 save(){
    let d = new Date();
    let yyyy = d.getFullYear();
    let mm = d.getMonth()+1;
    let dd = d.getDate();
    let createdAt = `${yyyy}-${mm}-${dd}`;

    let sql = `
    INSERT into likes(
      postId,
      createdBy,
      createdAt,
      activeInd
      
    )
    VALUES(
      '${this.postId}',
      '${this.createdBy}',
      '${createdAt}',
      1
    )
    `;
    return db.execute(sql);
  }
  
  static getAllLikesByPost(postId){
    let sql = `SELECT * from likes WHERE postId = '${postId}' and activeInd = 1;`
    return db.execute(sql);
  }

  static unLike(id){
    let d = new Date();
    let yyyy = d.getFullYear();
    let mm = d.getMonth()+1;
    let dd = d.getDate();
    let modifiedAt = `${yyyy}-${mm}-${dd}`;
    let sql = `
    UPDATE likes
    SET activeInd = 0,
    modifiedAt = '${modifiedAt}'
    WHERE id = '${id}';`;
    return db.execute(sql);
  }
}

module.exports = Likes;