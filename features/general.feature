Feature: Health endpoints
  As the Rust API
  I need to have health endpoints
  So that I am a valid service

  Scenario: Root endpoint
    When I go to the / endpoint
    Then it should return OK

  Scenario: Liveness endpoint
    When I go to the /liveness endpoint
    Then it should return OK
    And the body should say Alive

    Scenario: Readiness endpoint
      When I go to the /readiness endpoint
      Then it should return OK
      And the body should display connection status

  Scenario: Swagger endpoint
    When I go to the /openapi endpoint
    Then it should return OK
    And it should have the correct title

  Scenario: Service metadata endpoint
    When I go to the /metadata endpoint
    Then it should return OK
    And the body should not be empty

  Scenario: Version endpoint
    When I go to the /version endpoint
    Then it should return OK
    And the text should say the version info