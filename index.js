function formatDate(date, month, year) {
   
    const formattedDate = new Date(year, month - 1, date);
  
    const monthNames = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
  
    const formattedMonth = monthNames[formattedDate.getMonth()];
    const formattedDay = formattedDate.getDate();
    const formattedYear = formattedDate.getFullYear();
  
    console.log(`${formattedMonth} ${formattedDay}, ${formattedYear}`);
  }

  module.exports = formatDate
  
 
 
  