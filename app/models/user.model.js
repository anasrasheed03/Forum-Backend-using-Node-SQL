const db = require('../config/db.config');

class Users {
  constructor(email, password, name, username){
    this.email = email;
    this.password = password;
    this.name = name
    this.username = username
  }
  
   save(){
    let d = new Date();
    let yyyy = d.getFullYear();
    let mm = d.getMonth()+1;
    let dd = d.getDate();
    let createdAt = `${yyyy}-${mm}-${dd}`;

    let sql = `
    INSERT into users(
      email,
      password,
      name,
      username,
      createdAt
    )
    VALUES(
      '${this.email}',
      '${this.password}',
      '${this.name}',
      '${this.username}',
      '${createdAt}'
    )
    `;
    return db.execute(sql);
  }

}

module.exports = Users;