import { MongoClient } from 'mongodb'
const url = "mongodb+srv://lolihan12:12341234@auth.6rj43hy.mongodb.net/?retryWrites=true&w=majority";
const options = {  } //useNewUrlParser: true
let connectDB :any
let global :any
if (process.env.NODE_ENV === 'development') {
    connectDB = new MongoClient(url, options).connect()

//   if (!global._mongo) {
//     global._mongo = new MongoClient(url, options).connect()
//   }
//   connectDB = global._mongo_
// } else {
//   connectDB = new MongoClient(url, options).connect()
}
export { connectDB }