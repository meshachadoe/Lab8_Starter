# Lab 8

### Name: Meshach Adoe (A15840310)

### Questions
*1. Where would you fit your automated tests in your Recipe project development pipeline? Select one of the following and explain why.*

The automated tests should be configured within a Github action that runs whenever code is pushed. This is necessary to ensure that the behavior of the code remains as expected throughout the development process, and eliminates the need of manually running the tests every time the code is to be pushed to the repository.

*2. Would you use an end to end test to check if a function is returning the correct output? (yes/no)*

No, to check the behavior of a specific function, it would be more appropriate to use a unit test. An end to end test involves emulating user actions, hence tests the behavior of the application in response to user input.

*3. Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.*
No, it would not be appropriate to use a unit test for such a use case since that feature would deal with emulating user input to simulate the conversation. The fact that it deals with input from the user makes it more appropriate to use end to end tests.

*4. Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters.*
Yes, this would be appropriate since it would only pertain to the behavior of a single function, and is not necessarily dependent on the type of input that the user passes in. The unit test would pass in a predefined input and expect the function to return a particular output.