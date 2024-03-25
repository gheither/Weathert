function formatEpochToReadableDate(epochTimestamp) {
    // Convert to milliseconds and create a new Date object
    var date = new Date(epochTimestamp * 1000);

    // Format the date and time
    var formattedDate = date.toLocaleDateString("en-US"); // Output format: MM/DD/YYYY
    
    var formattedTime = date.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: false // Use hour12: true if you want AM/PM notation
  }); // Output format: HH:MM:SS AM/PM

    // Return the formatted date and time
    return formattedTime;
}

// Example usage:
//var readableDate = formatEpochToReadableDate(1609459200);
//console.log(readableDate); // Output: "12:00"
