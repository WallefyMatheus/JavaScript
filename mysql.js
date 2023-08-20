let mysql = require('mysql2');

let con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Admin@123'
});

let sql = "INSERT INTO coursejdbc.seller "+
          " (Name,Email,BirthDate,BaseSalary,DepartmentId) "+ 
          "VALUES ('Gesonel','gesonel.mestre@gmail.com','2001-05-06 00:00:00',10000,3)";

  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");

    try{
        con.query(sql, function (err, result) {
          if (err) throw err;
          console.log("Result: " + JSON.stringify(result));
        });
    }
    catch(e){
      throw "Ocorreu um erro: " + e;
    }
    finally{
      con.end();
      console.log("Disconecting...");
    }
  });

  // con.end();