# motivation
play games together remote from 1000's of miles. 

# todo
server
[] 

client
[] make css controller
[x] make a button event
[] on keydown make it send all the buttons via ws

### setting it up

# server
1. `cd server`
2. Please ensure you have the required dependencies before installing:

* Windows
  * windows-build-tools npm package (`npm install --global --production windows-build-tools` from an elevated PowerShell or CMD.exe)
* Mac
  * Xcode Command Line Tools.
* Linux
  * Python (v2.7 recommended, v3.x.x is not supported).
  * make.
  * A C/C++ compiler like GCC.
  * libxtst-dev and libpng++-dev (`sudo apt-get install libxtst-dev libpng++-dev`).

Install node-gyp using npm:

```
npm install -g node-gyp
```

Then build:

```
node-gyp rebuild
```
3. `npm i`
4. `node server.js`

#client 
1. `cd client`
2. `npm i`
3. load the page in your browser of choice
