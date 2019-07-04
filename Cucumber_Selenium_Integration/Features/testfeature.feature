
##
#Author: your.email@your.domain.com
#Keywords Summary :
#Feature: List of scenarios.
#Scenario: Business rule through list of steps with arguments.
#Given: Some precondition step
#When: Some key actions
#Then: To observe outcomes or validation
#And,But: To enumerate more Given,When,Then steps
#Scenario Outline: List of steps for data-driven as an Examples and <placeholder>
#Examples: Container for s table
#Background: List of steps run before each of the scenarios
#""" (Doc Strings)
#| (Data Tables)
#@ (Tags/Labels):To group Scenarios
#<> (placeholder)
#""
## (Comments)
#Sample Feature Definition Template
##

# Without Examples Keyword
#Feature: FreeCRM Login

 #  Scenario: FreeCRM Login Test
  #   Given user is on login page
   #  When user enters username and password
   #  And user clicks on login button
   #  Then user is on home page
  
    
    
    
 Feature: FreeCRM Login

 Scenario Outline: FreeCRM Login Test
  Given user is on login page
  When user enters "<username>" and "<password>"
  And user clicks on login button
  Then user is on home page
  
  
  Examples:
  	| username | password |
  	| naveenk    | test@123|
  
  
  
  
    
    
      
