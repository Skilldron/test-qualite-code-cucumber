Feature: Modify the password
    In order to have a secure password

  Scenario Outline: User is modified
    Given password is "<password>"
    When I try to edit the password with "<newPassword>"
    Then The response code should be "<code>" after modified

  Examples:
    | email | password | newPassword | code |
    | email@gmail.com | Admin123# | Nathan123# | 200 |
    | test@test.com | Admin123# | troueazldqsdkqs | 404 |
  