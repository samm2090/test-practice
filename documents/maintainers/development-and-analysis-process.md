1. start going over the implementation plan and get the main points or the e2e features needed
3. write e2e/integration tests to cover all scenarios (NEVER UPDATE AN EXISTING WORKING TESTS)
4. write a simple checklist of the tasks you need to implement and 
5. write unit tests for happy path (if there is a very obvious sad path in the tests add it)
6. run nodemon watching test files instead (npm run dev-test) of running the server
7. and start implementing
8. once all is passing, start refractoring
9. commit flow: commit meaningful code and only include related code, tag them with either test or implement
10. rebase at the end and squash test commits with test and squash sub-tasks as per your plan (you can update it along the way) 
11. push and PR (feel free to push and open a draft PR at any of the previous steps if you were asked to, or if you need support)


# Are you working on a bug?

# Are you working on a brand new feature?

# Are you working on enhancing a feature?
* A) Actions: Don't modify the tests for the actions, rather update the action and make sure the test covers all cases because you never know which part of the code you might be affecting, also even better write a new function in actions rather than 