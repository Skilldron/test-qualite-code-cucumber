Feature: Create a new user
  In order to use the application

  Scenario Outline: User is created
    Given email is "<email>"
    And Password is "<password>"
    When I try to create a new user
    Then Return code should be "<code>"

  Examples:
    | email | password | code |
    | admin@admin.com | Admin123* | 201 |
    | test@test.com | est123 | 400 |

