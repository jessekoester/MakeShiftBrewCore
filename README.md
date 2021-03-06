BrewCore
========

[ ![Codeship Status for brewfactory/BrewCore](https://codeship.com/projects/111a2f30-4fac-0132-6675-12c8946411a5/status)](https://codeship.com/projects/47904)  

SparkCore edition of the [Brewberry][1] homebrew solution.

**DEMO: [http://brewcore-demo.herokuapp.com](http://brewcore-demo.herokuapp.com)**

Read more about the project [here](http://blog.risingstack.com/brewfactory-full-stack-homebrew-with-iot/).


What is this?
-------------
[SparkCore][2] powered BIAB brewing system. Brew your own beer.

 - You can set and schedule the temperature steps
 - Collect logs from your brew into a MongoDB
 - Visualize your previous brew logs
 - iOS client what you can find here [BrewMobile](https://github.com/brewfactory/BrewMobile)

**The front-end:**

![Brew scheduler][3]

![Logs][4]

Used technologies
-----------------

* Node.js (with KOA and SocketIO)
* React
* MongoDB
* Isomorphic

This project uses: https://github.com/brewfactory/BrewUI

The SparkCore side
-----------------
You need to flash your SparkCore with the [spark-core-pid-temperature][5] firmware.

*You can use it with a mocked device in the following way:*

```MOCK=spark npm start```

Install
-------

### Prerequisites ###

* Node.js >= v0.11.0 (install with [NVM](https://github.com/creationix/nvm))
* Bower (install with: ```npm install -g bower``)

### Setting up the project ###

Installing dependencies from NPM:
```
npm install -g bower
npm install
```

### Running the project ###

This project requires least `v0.11.0` version of the Node.  

```
npm start
```
or
```
node --harmony app.js
```
you can mock the SparkCore the following way:
```
MOCK=spark npm start
```

// TODO
-------

 - cover with tests
 - flash SparkCore from this code
 - authentication


  [1]: https://github.com/brewfactory/Brewberry
  [2]: https://www.spark.io/
  [3]: https://www.dropbox.com/s/fr43wy29lvuuvku/Screen%20Shot%202014-06-30%20at%2009.00.33.png?dl=1
  [4]: https://www.dropbox.com/s/zuq4uum6gsx1595/Screen%20Shot%202014-06-30%20at%2009.01.04.png?dl=1
  [5]: https://github.com/brewfactory/spark-core-pid-temperature
