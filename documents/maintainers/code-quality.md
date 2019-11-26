
            DIVIDE INTO SECTIONS (LOGGING, NAMING CONVENTION, ETC)

B) Code Quality (Used by Devs to ensure a perfect QPass and Used by Reviewer for Code Reviews)
—————————
* Any feature should start from master branch into it’s own branch named fsw/fsa-#-title-here
* Any commit must be linked to a subtask (if the it’s too simple like bump version of x package, then commit can link to the task directly)
* commit and branch names should include the title of the task
* files and folder should only reflect the task requirements (e.g: no unnecessary version changes, IDE or temp files committed)
* if the version or file changes are only blocking the current task, then separate subtask can be created, otherwise (if it’s a general blocker) this should be a different main task and then after done and merged the developer can pull and resume working on the feature/task.
* We might consider ditching sub-tasks and just create a table to tackle the main points/checklist to achieve this task

* Followed naming conventions
* Use barrel (index.ts) inside of features 
* Make your commits as small as possible (do remove scss and spec and any file that doesn’t relate to the commit), if a component html file is very small, inline the html
* Use POST to Create, PUT to Update the whole object and PATCH to adjust some properties of an entity
* Do use margins and paddings in css, instead of using line-breaks and spaces in HTML
* Don’t use inline css
* Do use meaningful file and class names that describes the content and function
* Don’t import a whole library, instead import the whole things you will use
* Don’t leave spaces inside HTML tags (Only between properties)
* Do use double quotes `“[value]”` in HTML for consistency.
* For consistency, in layouts in css, always apply top margins/paddings instead of bottom (specially for uneven margins/paddings)
* Watch out for deprecated packages and migrate to proper ones (e.g joi has been moved to @hapi and joi is no longer maintained)
* Consistency: Always terminate your statements with a semicolon
* Consistency: Always use ES6 arrow functions (exception: mongoose)
* Consistency: Always wrap your arrow function param between brackets even if it’s only one
* Always use logger instead of console.log (if you used it during debugging for some reason, make sure to remove all console.logs before submits)
* Always use a scope.
* define multiple vars, constants in one line.
* Use ES6 let instead of var and const 
* Require modules without file extention so require (‘../module’) instead of (‘’../module.js), it helps the application to remain intact when paths or structure changes
* Only return/select the fields/properties you need from DAL and nothing more
* Use   timestamps: true when creating models to get automatic createdAt and updatedAt
* Make sure logs are not saving passwords (we could use an interceptor to finds any password or secret or api key or think of anything that could go wrong and replace it with a *removed* .. we could create npm packages as wrappers around error handlers and loggers that already knows what are all the possible words/values/keys/properties/vars to blacklist
* Add to our quality and check list, make sure logs are not logging any sensitive data
