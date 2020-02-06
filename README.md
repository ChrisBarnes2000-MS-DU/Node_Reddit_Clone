# PROJECT TITLE: Redit.js Tutorial

## HOW TO START THIS PROJECT

> $ node server.js

### AUTHORS: Chris Barnes

#### USER INSTRUCTIONS :

PURPOSE OF PROJECT: 



Notes learn during project:
How can we use nested routes to break down categorical information into smaller parts?
- use nested route to make it seperated by topic i.e albums get a separate route than instruments

How can we use the .use() function to re-route a request from one router to another?
- use the .use to go deeper into a route i.e use(albums)  then user(song)  giving albums/1/song/5

If I visit the /albums/1/track/2 URL, which middleware and route functions are called?
- middleware used is routes/use()  --> routes used would be use(albums) and use(track)  