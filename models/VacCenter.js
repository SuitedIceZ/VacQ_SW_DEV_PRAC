const sql = require("../config/vacCenterDB.js");

// constructor
const vacCenter = function (vacCenter) {
  this.id = vacCenter.id;
  this.name = vacCenter.name;
  this.address = vacCenter.tel;
};

vacCenter.getAll = (result) => {
  sql.query("SELECT * FROM vacCenters", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("VacCenter: ", res);
    result(null, res);
  });
};

module.exports = vacCenter;
