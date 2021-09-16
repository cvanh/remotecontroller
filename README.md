# motivation

play games together remote from 1000's of miles.

# todo

server
[] server side check if player number is unused
[] unfuck the giant ass switch statement fucking gore mess
[] fix that the sliders activates the slider event

client
[] make css controller
[x] make a button event
[] on keydown make it send all the buttons via ws
[] make it so you can see the current player number

### setting it up

in ./client/main.js change the websocket url to the current ip of the machine

# server

1. `cd server`
2. Please ensure you have the required dependencies before installing:

- Windows
  - windows-build-tools npm package (`npm install --global --production windows-build-tools` from an elevated PowerShell or CMD.exe)
- Mac
  - Xcode Command Line Tools.
- Linux
  - Python (v2.7 recommended, v3.x.x is not supported).
  - make.
  - A C/C++ compiler like GCC.
  - libxtst-dev and libpng++-dev (`sudo apt-get install libxtst-dev libpng++-dev`).

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

#wijze woorden
mevrouw bosboom ik wil niet blijven zitten.
dan gaan we er bij liggen!
