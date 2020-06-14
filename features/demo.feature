Feature: I am going to validate Calculator App
    @calculatortesting
    Scenario Outline: Calculator Add functionality testing
        Given I login to the 'calc' site
        When  I add '<num1>' and  '<num2>'
        Then the output displayed should be '<output>'

        Examples:
            | num1 | num2 | output |
            | 3    | 5    | 8      |
            | 1    | -1   | 0      |

    @angulartesting
    Scenario Outline: Angular Website functionality testing
        Given I login to the 'angularJS' site
        When  I clicked on the header link  and enter to the Angular Page
        Then you will enter '<text>'  in the search box

        Examples:
            | text    |
            | hello   |
            | binding |