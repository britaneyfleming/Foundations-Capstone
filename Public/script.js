///data
const months= ["January","February","March","April","May","June","July",
            "August","September","October","November","December"];
const days=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]


let yearEl=document.getElementById("year")
let monthEl=document.getElementById("month")
let nextBtn=document.getElementById("next")
let prevBtn=document.getElementById("prev")


///initial state
let Year=2023;
let indexMonth=0;
///add eventlistener to the buttons
nextBtn.addEventListener("click",next)
prevBtn.addEventListener("click",prev)

///define the event handelers
function next(e){
    e.preventDefault();
indexMonth++;
if(indexMonth>11){///add upper limit to the data
    indexMonth=0;
    Year++;
}
updateView();

}
function prev(e){
    e.preventDefault();
indexMonth--;
if(indexMonth<0){///add lower limit to the data
    indexMonth=11;
    Year--;
}
updateView();
}

function updateView(){

yearEl.innerHTML=Year;
monthEl.innerHTML=months[indexMonth];
clearTable();
fillTable();

}

function clearTable(){
for(let row=2;row<8;row++){
  for(let col=1;col<8;col++){
    $(`tr:nth-of-type(${row}) td:nth-of-type(${col})`).html(``);
    $(`tr:nth-of-type(${row}) td:nth-of-type(${col})`).css("background-color","rgb(100,100,100)")
  
  }
}
}


function fillTable(){
    let date=getFirstDayOfMonth(Year,indexMonth)
    let col=getColOfDate(date);
    let duration= getMonthDays(Year,indexMonth+1);
    let row=2;
    for(let i=1;i<=duration;i++){
    
      $(`tr:nth-of-type(${row}) td:nth-of-type(${col})`).html(i);
      
      $(`tr:nth-of-type(${row}) td:nth-of-type(${col})`).css("background-color","rgb(200,200,200)")
      
      col++;
      if(col>7){
        col=1;
        row++;
      }
    }
 
}




///main code
updateView();

 function getFirstDayOfMonth(year, month) {
      return new Date(year, month, 1);
 }

function getMonthDays(year,month){
    return new Date(year, month, 0).getDate();   
}

function getColOfDate(date){
for(let day =0;day<days.length;day++){
    if(date.toString().indexOf(days[day])>-1){
        return day+1;
    }
}
}





//making Get Request and passing input as parameter
document.getElementById("search").addEventListener("click", getEvent) 
function getEvent(){
    const searchFieldInput = document.getElementById("text").value 
    axios.get(`http://localhost:5500/events/${searchFieldInput}`).then(res=>{
    let thisEvent = []
    res.data.forEach(e=>{
        let event = `${e.event}, ${e.date}, ${e.sign}`
        thisEvent.push(event) 
    })
    alert(thisEvent)
    })

}

