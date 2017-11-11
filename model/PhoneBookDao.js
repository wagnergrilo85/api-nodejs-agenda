
function PhoneBookDao(connection) {
    this._connection = connection;
}

PhoneBookDao.prototype.listAll = function (callback) {
    this._connection.query("SELECT * FROM contacts", callback);
}

PhoneBookDao.prototype.save = function (contact, callback) {
    this._connection.query("INSERT INTO contacts SET ?", contact, callback);
};

PhoneBookDao.prototype.update = function (contact, callback) {
    this._connection.query("UPDATE contacts SET name = ?, cellphone = ?," +
        "typeCellphone = ?, operator = ? WHERE id = ?",
        [contact.nome, contact.telefone, contact.tipoTelefone, contact.operadora, contact.id], callback);
}


module.exports = function () {
    return PhoneBookDao;
}