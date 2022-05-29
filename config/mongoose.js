const mongoose = require('mongoose')

const db = 'mongodb+srv://The-Timeline:MongoDBOne@cluster0.gvx5y.mongodb.net/?retryWrites=true&w=majority'

mongoose.connect(db)
.then(() => console.log('connected to DB'))
.catch(err => console.log(err))
