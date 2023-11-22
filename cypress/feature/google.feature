Feature: google.com
    Scenario: visiting the frontpage
        When I visit 'https://google.com'
        Then I should see a search bar

    Scenario: should search cypress
        When I visit 'https://google.com'
        And Type in the search bar cypress
        Then I should see references about cypress