Feature: delete user
    In order to delete user

  Scenario Outline: User is deleted
    Given user id is "<id>"
    When I try to delete existing user
    Then The response code should be "<code>" after delete

  Examples:
    | id | code |
    | 1 | 200 |
    | 2 | 403 |
  