let d;
d = new Date();                       // current date and time

d = d.toString();                     // convert to string

d = new Date(2021, 0, 10, 12, 30, 0); // 10 Jan 2021 12:30:00 PM (month is 0-based)

d = new Date('2023-07-01T12:30:00');  // 1 July 2023 12:30:00 PM

d = new Date('2023-07-01T12:30:00+05:30'); // 1 July 2023 12:30:00 PM (timezone is +5:30)

d = new Date('July 01 2023 12:30:00'); // 1 July 2023 12:30:00 PM   

d = new Date('08/20/2023 12:30:00');   // 20 Aug 2023 12:30:00 PM (MM/DD/YYYY format)

d = new Date('2023-09-11');            // 11 Sep 2023

d = new Date('08-12-2023');            // 12 Aug 2023

d = Date.now();                        // current timestamp in milliseconds since 1 Jan 1970

d = new Date(1628582400000);           // 10 Aug 2021 12:00:00 AM 
d = new Date('08-15-2023 13:46:37:8'); // 15 Aug 2023
x = d.getTime();                       // convert to timestamp

x = d.getMonth();                      // 0-11 (0 is Jan, 11 is Dec)    
x = d.getFullYear();                   // 4-digit year
x = d.getDate();                       // 1-31 dates
x = d.getDay();                        // 0-6 (0 is Sun, 6 is Sat)  
x = d.getHours();                      // 0-23
x = d.getMinutes();                    // 0-59  
x = d.getSeconds();                    // 0-59
x = d.getMilliseconds();               // 0-999
x = Intl.DateTimeFormat('en-US').format(d); // 8/15/2023 (MM/DD/YYYY format)
x = d.toLocaleString('en-US');         // 8/15/2023, 1:46:37 PM (MM/DD/YYYY, HH:MM:SS format)

console.log(x);