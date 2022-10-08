Feature: Hotel Booking In Adactin  Application 

@Ad1
Scenario Outline: Login Functionality 

Given user Launch The Application 
	
When user Enter The "<Username>" In Username Field 
	
And user Enter The "<password>" In Password Field 
	
Then user Click On The Login Button And It Navigates To "Adactin.com - Search Hotel"  

Examples:

|Username|password|
|ABC|123|
|XYZ|1710|
|SuriyaVeeran17|Music1710|

@Ad1
Scenario: User Search And Select The Room And Details In The Select Hotel Page 
	When User Select The Location 
	And User Select The Hotel 
	And User Select The Room Type 
	And User Select The Number Of Rooms 
	And User Select The Check In Date 
	And User Select The Check Out Date 
	And User Select The Adults Per Room 
	And User Select The Children Per Room 
	Then User Click The Search Button It Navigates To The "Adactin.com - Select Hotel" Page 

@Ad2
Scenario: User Confirm The Room In Search Hotel page 
	When User Click The Select Button 
	Then User Click The Continue Button It Navigates To The "Adactin.com - Book A Hotel" Page 

@Ad3
Scenario: User Book The Room And Payment Details In Search Hotel page 
	When User Enter The Valid First Name 
	And User Enter The Valid Last Name 
	And User Enter The Billing Address 
	And User Enter The Valid Credit Card Number 
	And User Choose The Credit Card Type 
	And User Select The Select Month In The Expiry Date Box 
	And User Select The Select Year In The Expiry Date Box 
	And User Enter The CVV Number 
	Then User Click The Book Now Button It Navigates To The Booking Confirmation Page 

@Ad3
Scenario: User LogOut In The My Itinerary Page 
	Then User Click The Logout Button 
	
	