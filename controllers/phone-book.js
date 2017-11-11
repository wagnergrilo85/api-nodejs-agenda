

module.exports = function (app) {

    var routeSuffix = "/api/v1/phonebook";

    //------------------------------------------------------------------------------------------------------------------
    app.get(routeSuffix + "/list-all", function (req, res) {

        console.log("--> Listing all calendar contacts...");

        //*** get a connection
        var connection = app.model.ConnectionFactory();

        // *** create instance of PhoneBookDao
        var phoneBook = new app.model.PhoneBookDao(connection);

        phoneBook.listAll(function (error, result) {

            if(error){
                console.log('--> Error to linting all contacts: ' + error);
                res.status(500).send(error);
            }else{
                console.log('--> Linting all contacts with succefuly!');
                res.status(200).json(result);
            }
        });
    });

    //------------------------------------------------------------------------------------------------------------------
    //*** Save a new contact in database
    app.post(routeSuffix + "/save", function (req, res) {

        var contact = req.body;

        console.log('contact:' + contact);

        //*** get a connection
        var connection = app.model.ConnectionFactory();

        // *** create instance of PhoneBookDao
        var phoneBook = new app.model.PhoneBookDao(connection);

        phoneBook.save(contact, function (error, result) {
            if(error){
                console.log('--> Error to save contact. Error: ' + error);
                res.status(500).send(error);
            }else{
                console.log('--> contact saved successfully!');
                contact.id = result.insertId;
                res.status(201).json(contact);
            }
        });
    });

    //------------------------------------------------------------------------------------------------------------------
    //*** Update a contact in database
    app.put(routeSuffix + "/update", function (req, res) {

        var contact = req.body;

        var connection = app.model.ConnectionFactory();

        // *** create instance of PhoneBookDao
        var phoneBook = new app.model.PhoneBookDao(connection);

        phoneBook.update(contact, function (error, result) {
            if(error){
                console.log("--> Erro to update contact!");
                res.status(500).send(error);
            }else{
                console.log("--> contact updated successfully!!");
                res.status(200).send(contact);
            }
        });

    });


}