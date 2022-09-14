const db = require('../config/db.config');

class Posts {
  constructor(title, body, createdBy){
    this.title = title;
    this.body = body;
    this.createdBy = createdBy
  }
  
   save(){
    let d = new Date();
    let yyyy = d.getFullYear();
    let mm = d.getMonth()+1;
    let dd = d.getDate();
    let createdAt = `${yyyy}-${mm}-${dd}`;

    let sql = `
    INSERT into posts(
      title,
      body,
      createdAt,
      createdBy,
      activeInd
    )
    VALUES(
      '${this.title}',
      '${this.body}',
      '${createdAt}',
      '${this.createdBy}',
      1
    )
    `;
    return db.execute(sql);
  }

  static getAllPosts(){
    let sql = "SELECT * from posts where activeInd = 1;"
    return db.execute(sql);
  }

  static getPostById(id){
    let sql = `SELECT * from posts WHERE id = ${id}`;
    return db.execute(sql);
  }

  static edit(title,body,id){
    let d = new Date();
    let yyyy = d.getFullYear();
    let mm = d.getMonth()+1;
    let dd = d.getDate();
    let modifiedAt = `${yyyy}-${mm}-${dd}`;

    let sql = `
    UPDATE posts
    SET title = '${title}',
    body = '${body}',
    modifiedAt = '${modifiedAt}'
    WHERE id = '${id}';`;
    return db.execute(sql);
  }
}

module.exports = Posts;