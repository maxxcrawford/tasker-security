#Tasker Security

###Problem:

Using [Tasker](http://tasker.dinglisch.net/), a automation application for Android, I toggle my phone's pin lock based on where I am. There are four states:

+ Home (WiFi) - **UNLOCKED**
+ Pebble (Bluetooth LE) - **UNLOCKED**
+ Car (Ford SYNC Blutooth) - **UNLOCKED**
+ Away - **LOCKED**

If any of the first three states are active, my phone needs to be unlocked. However, if I exit any of these, it triggers Tasker to lock down my phone.

#### Your goal is set up the code so that if enter/exit one these states while the other is engaged, it does not activate my pin lock.
