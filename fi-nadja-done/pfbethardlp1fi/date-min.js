var mydate=new Date,year=mydate.getYear();if(1e3>year){year+=1900;var day=mydate.getDay(),month=mydate.getMonth(),daym=mydate.getDate()}if(10>daym){daym="0"+daym;var dayarray=new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"),montharray=new Array("January","February","March","April","May","June","July","August","September","October","November","December"),newdate=dayarray[day]+", "+montharray[month]+" "+daym+", "+year;$(".current-date").text(newdate)}var mydate=new Date,year=mydate.getYear();if(1e3>year){year+=1900;var day=mydate.getDay()-1,month=mydate.getMonth(),daym=mydate.getDate()-1}if(10>daym){daym="0"+daym;var dayarray=new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"),montharray=new Array("January","February","March","April","May","June","July","August","September","October","November","December"),newdate2=dayarray[day]+", "+montharray[month]+" "+daym+", "+year;$(".current-date-minus").text(newdate2)}var mydate=new Date,year=mydate.getYear();if(1e3>year){year+=1900;var day=mydate.getDay()+2,month=mydate.getMonth(),daym=mydate.getDate()+2}if(10>daym){daym="0"+daym;var dayarray=new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"),montharray=new Array("January","February","March","April","May","June","July","August","September","October","November","December"),newdate3=dayarray[day]+", "+montharray[month]+" "+daym+", "+year;$(".current-date-plus2").text(newdate3)}