Feature: Addition

    Scenario: Add two numbers together
        Given the result display is clear
        And I click on "5"
        And I click on "3"
        And I click on "+"
        And I click on "4"
        And I click on "7"
        When I click on "="
        Then the result display shows "100"

    Scenario: Add three numbers together
        Given the result display is clear
        And I click on "3"
        And I click on "+"
        And I click on "7"
        And I click on "1"
        And I click on "+"
        And I click on "2"
        When I click on "="
        Then the result display shows "76"

    Scenario: Add on to precomputed value
        Given the result display is clear
        And I click on "7"
        And I click on "6"
        And I click on "="
        And I click on "+"
        And I click on "1"
        When I click on "="
        Then the result display shows "77"

    Scenario: Add two numbers together using keyboard
        Given the result display is clear
        And I press "4"
        And I press "+"
        And I press "4"
        When I press "Enter"
        Then the result display shows "8"
    
    Scenario: Add two numbers together using keyboard and mouse
        Given the result display is clear
        And I press "4"
        And I click on "+"
        And I click on "5"
        And I press "0"
        When I press "Enter"
        Then the result display shows "54"