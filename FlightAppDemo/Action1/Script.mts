SystemUtil.Run "C:\UFT\samples\Flights Application\FlightsGUI.exe"
WpfWindow("Micro Focus MyFlight Sample").WpfEdit("agentName").Set "John" @@ hightlight id_;_1986780064_;_script infofile_;_ZIP::ssf104.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfEdit("password").SetSecure "61530847cbe8a728d3f7" @@ hightlight id_;_2102241504_;_script infofile_;_ZIP::ssf106.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfButton("OK").Click @@ hightlight id_;_2102244336_;_script infofile_;_ZIP::ssf105.xml_;_
WpfWindow("Micro Focus MyFlight Sample").Move 592,269 @@ hightlight id_;_329424_;_script infofile_;_ZIP::ssf107.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfComboBox("fromCity").Select "London" @@ hightlight id_;_2102246064_;_script infofile_;_ZIP::ssf109.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfComboBox("toCity").Select "San Francisco" @@ hightlight id_;_2102246256_;_script infofile_;_ZIP::ssf111.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfImage("WpfImage_2").Click 11,12 @@ hightlight id_;_2102247216_;_script infofile_;_ZIP::ssf112.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfCalendar("Mo").SetDate "30-Oct-2021" @@ hightlight id_;_2102248128_;_script infofile_;_ZIP::ssf113.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfComboBox("Class").Select "Business" @@ hightlight id_;_2102250576_;_script infofile_;_ZIP::ssf117.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfComboBox("numOfTickets").Select "2" @@ hightlight id_;_2102250288_;_script infofile_;_ZIP::ssf119.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfButton("FIND FLIGHTS").Click @@ hightlight id_;_2079670312_;_script infofile_;_ZIP::ssf120.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfTable("flightsDataGrid").SelectCell 3,1 @@ hightlight id_;_2102249280_;_script infofile_;_ZIP::ssf121.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfButton("SELECT FLIGHT").Click @@ hightlight id_;_2102252208_;_script infofile_;_ZIP::ssf122.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfEdit("passengerName").Set "Ivan Petrov" @@ hightlight id_;_2102252112_;_script infofile_;_ZIP::ssf123.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfButton("ORDER").Click @@ hightlight id_;_2102256672_;_script infofile_;_ZIP::ssf124.xml_;_
WpfWindow("Micro Focus MyFlight Sample").Close @@ hightlight id_;_329424_;_script infofile_;_ZIP::ssf125.xml_;_
 @@ hightlight id_;_265036_;_script infofile_;_ZIP::ssf103.xml_;_

