
//Remove an item from an array: 
  "use strict";
  const names = [
    "Peter",
    "Ahmad",
    "Yana",
    "kristina",
    "Rasmus",
    "Samuel",
    "katrine",
    "Tala",
  ];
  
const nameToRemove = "Ahmad"
  function searchIndex(nameToRemove) { 
  for(let i=0; i < names.length; i++) {
      if (names[i]===nameToRemove) {
          return i;
      }
  }
}
const nameIndex = searchIndex("Ahmad");
names.splice(nameIndex,1);
console.log(names);




//When will we be there?? -----------Counting Time


const travelInformation = {
    speed: 50,
    destinationDistance: 432,
  };
  

  function timeCount(travelInformation){
      const time = travelInformation.destinationDistance/travelInformation.speed;
      const hours = Math.floor(time);
    
    console.log(time)
    console.log(hours)
    const minutes = Math.floor((time-hours)*60)
    console.log(minutes)
      
      return `${hours} hours and ${minutes} minutes`
  }
  const travelTime = timeCount(travelInformation);
  console.log(travelTime);




  //Series duration of my life


  const seriesDurations = [
    {
      title: "Game of thrones",
      days: 3,
      hours: 1,
      minutes: 0,
    },
    {
      title: "Sopranos",
      days: 3,
      hours: 14,
      minutes: 0,
    },
    {
      title: "The Wire",
      days: 2,
      hours: 12,
      minutes: 0,
    },
  ];
  const myAge = 35;
  function lifeSeries(myAge, seriesDurations) {
    ageInHours = myAge*8760; 
    for (let i=0; i < seriesDurations.length; i++) {
      const seriesInHours = seriesDurations[i].days * 24 + seriesDurations[i].hours;
      const num = (seriesInHours/ageInHours)*100
      const lifeDeal = num.toFixed(2)
      
      console.log(`${seriesDurations[i].title} took ${lifeDeal}% of my life.\n`)

    }
    

  }

  lifeSeries(myAge, seriesDurations);



//Note taking app
  //Save The Notes
 

  const notes = [];
  function saveNote(content, id){
    if(content !== '') {
    notes.push({content,id})
    }

  }

saveNote("Pick up groceries", 1);
saveNote("Do laundry", 2);

console.log(notes);


//Get A Note


function getNote(id) {
for (let i=0; i < notes.length; i++) {
  if(notes[i].id === id) {
    return notes[i].content
  }
}

}
const firstNote = getNote(1)
console.log(firstNote)

//Read The Notes

function logOutNotesFormatted() {
  for (let i=0; i < notes.length; i++) {
    console.log(`The note with id: ${notes[i].id}, has the following note text: ${notes[i].content} \n`)
  }
}

logOutNotesFormatted(); 


//Unique feature----------------Delete a Note
 
let noteIndex;
function deleteNote(notes, id) {
  for(let i=0; i< notes.length; i++) {
    const notesArr = notes[i];
    if(notesArr.id === id) {
      const noteIndex = i;
    }
  }
  removedNotes = notes.splice(noteIndex, 1)
  console.log(removedNotes)
}


deleteNote(notes, 2);







