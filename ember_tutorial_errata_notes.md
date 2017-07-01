Ember Tutorial notes:

### Lesson 3 

Homework - option2 sucks. missing answers to suggestions
values are being passed by reference not by value.

so you need a new item in the chain.

```$xslt
isDisabled: Ember.computed.not('isValidForm'),
```

ember g route contact

responseMessage and model connections refactored inside contact.hbs

model call added to routes/contact.js (note singular)

### Lesson 4
Homework correction: "and add a createRecord in the model method of app/routes/index.js" no such file

### Lesson 5 
Q.What is an ember componet?
A.An Ember.Component is a view that is completely isolated

### Lesson 6
Short summery of route hooks
need more fleshed out examples. 
Can probably wait until after main tutorial

YOU WILL NEED 
kill -9 pid
restart ember server
to display changes

### Lesson 7
Seeder instructions on original are incorrect.
Books page: Author / Library crud code to be done same as Title crud

