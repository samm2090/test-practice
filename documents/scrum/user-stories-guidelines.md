C) How to write User Stories/Technical Tasks 
——————————————————————
1- Mandatory: Title, epic and effort estimation in point
2- Any related task should be linked
3- Proper DoD checklists should be appended and code quality (urls maybe)
4- Reference what this story is blocking
5- Reference what this story is being blocked by
6- List as many tags as possible, the more the better but has to be related or could tagged items could affect each other in the future. (Status Change, Invoice, Account, Investor, Admin, Client, Bank Account, Transaction, Withdraw, Deposit, Bug-Fix, Regression, Boilerplate)
7- Think about fields (label en and spanish and desc, validation rules), authorization, buttons/actions, URI/location, what end-points to call and if there is any specific responses to expect, any actions to be done after the main action like login you need to save the JWT, Any specific APIs we will use like AWS SES or AWS S3, Success scenario, what could fail (validation, error, exception, wrong input)
8- Link to the API story if API doesn’t exist or link to it anyway maybe?
9- Epics are for the root API resource (/users) and tags could include the full API url (GET /user/:id) so we can see the history of the api
10- Maybe 8 and 10 for existing API doesn’t matter and user should just look for the API implementation if exists and if not then link user story
