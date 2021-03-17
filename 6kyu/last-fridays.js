// write a function that will receive 2 parameters. Both are years, and indicates a range.

// Your work is to return the number of times a month ends with a Friday.

// If there is only one year provided, return the number of times a month ends on Friday on that year. Range bounds are inclusive in every case!

function lastDayIsFriday(initialYear, endYear) {
    let lastFridays = 0;
      if (endYear === undefined) {
        endYear = initialYear
      }
       for (let year = initialYear; year <= endYear; year++) {
        for (let month = 1; month <= 12; month++) {
        // set the date as the last day of the year
          let lastDay = new Date(year, month, 0);
          //check if the last day is Friday
          if (lastDay.getDay() === 5) {
            lastFridays++;
          }
        }
      }
      
      return lastFridays;
    }