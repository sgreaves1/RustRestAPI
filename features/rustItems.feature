Feature: Rust Items
  As the Rust API
  I want to query the db
  So that I can return Item Information

  Scenario: Return all the durability information for the item
    Given The database has 2 durability fields for the sheet metal door
    When I go to the /durability/sheetmetaldoor endpoint
    Then it should return OK
    And the body should contain a list of items that destroy the sheet metal door item

  Scenario: Return amount of explosive ammo to destroy sheet metal door
    Given The database has explosivebullets durability field with a cost of 63 for the sheetmetaldoor item
    When I go to the /durability/sheetmetaldoor/explosivebullets endpoint
    Then it should return OK
    And the body should contain the cost of 63