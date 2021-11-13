# Lab 8 - Starter

## Questions
*1. Where would you fit your automated tests in your Recipe project development pipeline? Select one of the following and explain why.*

The automated tests should be configured within a Github action that runs whenever code is pushed. This is necessary to ensure that the behavior of the code remains as expected throughout the development process, and eliminates the need of manually running the tests every time the code is to be pushed to the repository.

*2. Would you use an end to end test to check if a function is returning the correct output? (yes/no)*

No, to check the behavior of a specific function, it would be more appropriate to use a unit test. An end to end test involves emulating user actions, hence tests the behavior of the application in response to user input.