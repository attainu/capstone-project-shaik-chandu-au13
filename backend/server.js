const app = require('./app')
const connectdb = require('./config/database')
const dotenv =require('dotenv');

dotenv.config({path:'backend/config/config.env'})

connectdb()

app.listen(process.env.PORT,()=>{
    console.log(`server started at ${process.env.PORT} in ${process.env.NODE_ENV} mode`)
})