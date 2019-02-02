Feature: Rust Items
  As the Rust API
  I want to query the db
  So that I can return Item Information

  Scenario: Return amount of explosive ammo to destroy sheet metal door
    When I go to the /durability/sheetmetaldoor/explosivebullets endpoint
    Then it should return OK
    And the body should contain the cost