A) DoD 
———
# Common

1- A PR should be open with the title format: Task # - Task Title.
2- Input should always be validated according to the Acceptance Criteria.
3- Acceptance Criteria are 100% covered and manually tested.
4- Any installed npm module should be installed with an exact version.
5- Any related document should be updated to reflect the User-Story/Technical-Task implementation.
6- Any required dependency should be saved in package.json (default behaviour starting npm@5).
7- A complete PR should pass all the checks and any conflicts should be resolved before it can be merged into develop.
8- The architecture document should be revised to make sure 100% compliance and if technical aspects required a change to the architecture document, then the architecture document should be updated to reflect these changes accurately.
9- All text and content are in Spanish
10- Must submit at least 1 room for improvement/alternative design for each point (so if you are working on a 3 point task you must submit at least 3 “ideas”)

# API Specific
1- Failed validation should return at the first error.
2- If the API threw any exceptions it should be logged and only a generic message with a code returned to the front-end.
