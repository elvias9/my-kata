// Write a function, which takes a non-negative integer (seconds) as input 
//and returns the time in a human-readable format (HH:MM:SS)

// my solution:

function humanReadable(seconds) {
    let hours = Math.floor(seconds / 3600)
    //modulo 1 to find the decimal part of the result of the division and then multiply it per 60 to have the minutes
    let minutes = Math.floor((seconds/3600 % 1).toFixed(4) *60)
    //same as I did for minutes
    let readableSeconds= Math.round((((seconds/3600 % 1).toFixed(4) *60) % 1).toFixed(4) * 60)

    if (hours <9) hours = `0${hours.toString()}`
    if (minutes <9) minutes = `0${minutes.toString()}`
    if (readableSeconds <9) readableSeconds = `0${readableSeconds.toString()}`

    let readableTime = `${hours}:${minutes}:${readableSeconds}`
    return readableTime
  }

  //faster and better solution

  function humanReadable(seconds) {
    let hours = parseInt( seconds / 3600 ) ;
    let minutes = parseInt( seconds / 60 ) % 60;
    let seconds = seconds % 60;
    
    let pad = function(val){
      return val < 10 ? "0"+val : val;
    }
    
    return pad(hours) + ":" +pad(minutes) + ":" + pad(seconds);
    }