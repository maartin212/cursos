interfazGrafica: ROBOMONGO

show dbs

use misclientes

db.dropDatabase()

show collections

db.[collection].drop()



db.createUser({
    user: 'Tincho',
    pwd: '123',
    roles: ['readWrite', 'dbAdmin'],
})



db.clientes.insert({
    firstName: 'Isaac',
    lastName: 'Asimov',
})

db.clientes.insert([
    {
        firstName: 'Helena',
        lastName: 'Soraya',
    },
    {
        firstName: 'Joe',
        lastName: 'Mcmillan',
    },
    {
        firstName: 'Isaac',
        lastName: 'Delahaye',
    }
])

db.clientes.insert([
    {
        firstName: 'Alejandro',
        age: 20,
    },
    {
        firstName: 'Maria',
        age: 30,
    },    {
        firstName: 'Jose',
        age: 81,
    },
])

db.clientes.insert([
    {
        firstName: 'Zack',
        address: {
            city: 'Londres',
        }
    }
])



db.clientes.find()

db.clientes.find().pretty()

db.clientes.find({ firstName: 'Isaac' })

db.clientes.find({ _id: ObjectId("5ecb1cda55f659a97fbf26a1") })

db.clientes.find({ $or: [{ firstName: 'Joe'}, { firstName: 'Elena' }] })

db.clientes.find({ age: {$gt: 30}})

db.clientes.find({ age: {$lt: 30}})

db.clientes.find({ age: {$gt: 18, $lt: 30}})

db.clientes.find({ 'address.city': 'Londres' })

db.clientes.find({ firstName: { $regex: 'jandro' } })



db.clientes.find().sort({lastName: 1})

db.clientes.find().sort({lastName: -1})



db.clientes.count()



db.clientes.update(
    { lastname: 'soraya' },
    {
        firstName: 'Elena',
        lastName: 'No',
        gender: 'female'
    }
)

db.clientes.update(
    { _id: ObjectId("5ecb1cda55f659a97fbf26a1") },
    {
        $set: { age: 45 }
    }
)

db.clientes.update(
    { _id: ObjectId("5ecb1cda55f659a97fbf26a1") },
    {
        $inc: { age: 5 }
    }
)

db.clientes.update(
    { _id: ObjectId("5ecb1cda55f659a97fbf26a1") },
    {
        $unset: { age: 1 }
    }
)

db.clientes.update(
    { _id: ObjectId("5ecb1cda55f659a97fbf26a1") },
    {
        firstName: 'Elena',
        lastName: 'Delahaye',
    },
    {upsert: true}
)

db.clientes.update(
    { firstName: 'Aaron' },
    {
        firstName: 'Aaron',
        lastName: 'Delahaye',
    },
    {upsert: true}
)

db.clientes.update(
    { firstName: 'Aaron' },
    {
        $rename: {firstName: 'primerNombre'}
    }
)



db.clientes.remove(
    {primerNombre: 'Aaron'}
)

db.clientes.remove(
    {firstName: 'Isaac'},
    {justOne: true}
)



db.clientes.find().count()

db.clientes.find().limit(3)

db.clientes.find().limit(3).sort({lastName: -1})

db.clientes.find({age: {$gt: 18}}).count()

db.clientes.find().forEach(el => {
    print(el.firstName)
})
