
WpfWindow("Micro Focus MyFlight Sample").Move 592,269
WpfWindow("Micro Focus MyFlight Sample").WpfComboBox("fromCity").Select "London"
WpfWindow("Micro Focus MyFlight Sample").WpfComboBox("toCity").Select "San Francisco"
WpfWindow("Micro Focus MyFlight Sample").WpfImage("WpfImage_2").Click 11,12
WpfWindow("Micro Focus MyFlight Sample").WpfCalendar("Mo").SetDate "30-Oct-2021"
WpfWindow("Micro Focus MyFlight Sample").WpfComboBox("Class").Select "Business"
WpfWindow("Micro Focus MyFlight Sample").WpfComboBox("numOfTickets").Select "2"
WpfWindow("Micro Focus MyFlight Sample").WpfButton("FIND FLIGHTS").Click
WpfWindow("Micro Focus MyFlight Sample").WpfTable("flightsDataGrid").SelectCell 3,1
WpfWindow("Micro Focus MyFlight Sample").WpfButton("SELECT FLIGHT").Click
WpfWindow("Micro Focus MyFlight Sample").WpfEdit("passengerName").Set "Ivan Petrov"
WpfWindow("Micro Focus MyFlight Sample").WpfButton("ORDER").Click

