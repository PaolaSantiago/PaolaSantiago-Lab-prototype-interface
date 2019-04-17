let appoinment1Structure = ['frank','Kylie','Markus','Ronald','Emily'];
 console.log(appoinment1Structure);

 let appointments = [
   {
     id: 101,
     name: 'Frank',
     location: 'downtown',
     date: {
       year: 2019,
       month: 2,
       day: 1,
       time: '9:00',
     }
   },


   {
     id: 102,
     name: 'Kylie',
     location: 'ajax',
     date: {
       year: 2019,
       month: 2,
       day: 2,
       time: '10:00',
     }
   },

     {
       id: 103,
       name: 'Markus',
       location: 'downtown',
       date: {
         year: 2019,
         month: 2,
         day: 6,
         time: '11:00',
       }
     },

     {
       id: 104,
       name: 'Ronald',
       location: 'ajax',
       date: {
         year: 2019,
         month: 2,
         day: 8,
         time: '13:00',
        }
      },

       {
           id: 105,
           name: 'Emily',
           location: 'downtown',
           date: {
             year: 2019,
             month: 2,
             day: 11,
             time: '15:00',
           }
         }
     ];


// Loop that runs 31 times
for (var d = 1; d <= 31; d++) {
 var apptHTML = appointments.filter(apt => apt.date.day == d).map(apt => `<span class="apt" data-id="${apt.id}">${apt.name}</span>`).join('');
 if (apptHTML != '')
   document.querySelector(`[data-day="${d}"]`).innerHTML += apptHTML;
}


var info1 = document.getElementById("101");


document.getElementById('appoinment1Structure').addEventListener('click', function({target}) {
  if (!target.matches('span')) return;

  const clickedId = parseInt(target.dataset.id);
  // Was an appointment!
  const aptClicked = appointments.find(apt => apt.id == clickedId);
  info1.innerHTML = aptClicked.name + " HAS APPOINTMENT TODAY AT " + aptClicked.location;

  // Name has an appointment at location at time
  console.log(`${aptClicked.name} has an appointment at ${aptClicked.location} at ${aptClicked.date.time}`);

});
