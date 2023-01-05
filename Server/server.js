const express = require('express')
const app = express()
const port = 5500
const cors = require('cors')

const events=[];///database

const {getEvent}=require('./controller')

app.use(cors())

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.post("/addevent",(req,res)=>{
   const event=req.body;
   events.add(event);
   res.statusCode=200
   res.send("event has been added to the database")
})

app.get("/events/:event_Name", getEvent)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
