const events=[

{event: "full moon", date: "January 6, 2023", sign:"sign name here"},
{event: "full moon", date: "January 6, 2023", sign:"sign name here"},
{event: "full moon", date: "January 6, 2023", sign:"sign name here"},
]

module.exports = {
    getEvent: (req, res)=> {
        console.log(req.params)
        let searchTerm = req.params.event_Name
        let filteredEvents = events.filter(e=>
            e.event===searchTerm.toLowerCase()
        )
        res.status(200).send(filteredEvents) 
        console.log(searchTerm.toLowerCase())
    }
}