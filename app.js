console.log("Demo started");

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://Ankit:123@cluster0.hmx5mxw.mongodb.net/test?authMechanism=SCRAM-SHA-1";

MongoClient.connect(uri, (err, db) => {
    if (err) { console.log(err); }
    //CREATE Collection

    var dbo = db.db("mydb");
    // dbo.createCollection("customers", (err, res) => {
    //     if (err) { console.log(err); }
    //     console.log("Collection created");
    //     dbo.close(); 
    // });

    //INSERT One
    // var user1 = {name: "user1", age: 42, roles: ['a', 'b', 'c']};
    // dbo.collection("customers").insertOne(user1, (err, result) => {
    //     if (err) { console.log(err); }
        
    // });
    //INSERT Many
    // var user2 = {name: "user1", age: 42, roles: ['d']};
    // var user3 = {name: "user1", age: 42, roles: ['g', 'h']};
    // dbo.collection("customers").insertMany([user2,user3], (err, result) => {
    //     if (err) { console.log(err); }
        
    // });
    //FIND One
    // dbo.collection("customers").findOne({}, (err, result) => {
    //     if (err) { console.log(err); }
    //     console.log(result);
    // });
    //FIND All
    // dbo.collection("customers").find({}).toArray( (err, result) => {
    //     if (err) { console.log(err); }
    //     console.log(result);
    // });
    //UPDATE 
    // var whomUpdate = {_id: new ObjectId("63513602fd8bfff0e9da3d2f")};
    // var toUpdate = {name: "user2"};
    // dbo.collection("customers").updateOne( whomUpdate, toUpdate, (err, result) => {
    //     if (err) { console.log(err); }
    //     console.log(result);
    // });
    //DELETE
    var toDelete = {name: "user1"};
    dbo.collection("customers").deleteOne( toDelete, (err, result) => {
        if (err) { console.log(err); }
        console.log("Document deleted successfully");
    });
    dbo.close();
    

});

