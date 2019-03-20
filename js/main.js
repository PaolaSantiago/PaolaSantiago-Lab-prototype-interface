

  let appoinment1Structure = ['frank','Kylie','Markus','Ronald','Emily'];
  console.log(appoinment1Structure);

  let appointments = [
    {
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
  var apptHTML = appointments.filter(apt => apt.date.day == d).map(apt => `<div class="apt">${apt.name}</div>`).join('');
  if (apptHTML != '')
    document.querySelector(`[data-day="${d}"]`).innerHTML += apptHTML;
}
