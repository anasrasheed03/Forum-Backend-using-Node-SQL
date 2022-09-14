const db = require('../config/db.config');

class Comments {
  constructor(comment, postId, createdBy){
    this.comment = comment;
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
    INSERT into comments(
      comment,
      createdAt,
      createdBy,
      activeInd,
      postId
    )
    VALUES(
      '${this.comment}',
      '${createdAt}',
      '${this.createdBy}',
      1,
      '${this.postId}'
    )
    `;
    return db.execute(sql);
  }

  static edit(comment,postId,commentId){
    let d = new Date();
    let yyyy = d.getFullYear();
    let mm = d.getMonth()+1;
    let dd = d.getDate();
    let modifiedAt = `${yyyy}-${mm}-${dd}`;

    let sql = `
    UPDATE comments
    SET comment = '${comment}',
    modifiedAt = '${modifiedAt}'
    WHERE id = '${commentId}' and postId = '${postId}';`;
    return db.execute(sql);
  }

  static getAllCommentsByPost(postId){
    console.log(postId)
    let sql = `SELECT * from comments WHERE postId = '${postId}' and activeInd = 1;`
    return db.execute(sql);
  }

  static deleteComment(id){
    let d = new Date();
    let yyyy = d.getFullYear();
    let mm = d.getMonth()+1;
    let dd = d.getDate();
    let modifiedAt = `${yyyy}-${mm}-${dd}`;
    let sql = `
    UPDATE comments
    SET activeInd = 0,
    modifiedAt = '${modifiedAt}'
    WHERE id = '${id}';`;
    return db.execute(sql);
  }
}

module.exports = Comments;