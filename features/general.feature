Feature: Health endpoints
  As the Rust API
  I need to have health endpoints
  So that I am a valid service

  Scenario: Root endpoint
    When I go to the / endpoint
    Then it should return OK

