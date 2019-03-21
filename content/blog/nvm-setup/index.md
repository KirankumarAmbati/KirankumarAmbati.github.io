---
title: NVM To The Rescue
date: "2019-02-26T11:31:52.169Z"
tags: ["Node", "NVM", "NodeJS","Node Version Manager"]
---

Node has become a part of most of our coding lives. But if we are working on latest technologies like React and at the same time working on your legacy code, you might have noticed that you have switch between two versions of Node. For instance, I was working with node v6.10.2 for my company project and node v10.15.0 for my personal learnings. I used to uninstall and install those versions based on my requirements until I found NVM.

## NVM - Node Version Manager

NVM stands for "Node Version Manager". NVM helps us to handle multiple versions of node very easily by giving us the ability to switch between them based on our requirement.

#### Let us look at the setup

-  __Installing nvm__

    For installing _nvm_, head over [here](https://github.com/coreybutler/nvm-windows/releases) and download the latest stable nvm setup file (`nvm-setup.zip`). At the time of writing this article, the stable version is ___1.1.7___

    Download the .zip file and extract .exe from it and proceed with installation.
    
-  __Installing nodejs__

    We have done with the installation of nvm. Now we have to install our required node versions. For example, if we need latest node version along with v6.10.2, we have to do:

    For istalling latest nodejs version, run 

    __```$ nvm install latest```__

    For istalling specific version of nodejs, run 

    __```$ nvm install 6.10.2```__

    restart your Command Prompt.

-  Usage:

    Now we have both the versions of node installed on to our system. To verify which versions are present, run 
    __```$ nvm list```__

    which lists down all your versions oresent on your syaytem.

    To switch between versions, just run __```$ nvm use <node_version_you_want_to_use>```__. For eg,

    __```$ nvm use 10.15.0```__

    We are now switched to Node v10.15.0. To verify, try running

    __```$ node -v```__

    that should return you the version we have choosen.

-  That's all folks ! Now we are good to keep rocking with our coding.

__NOTE:__ One important thing to remember when we are using nvm, the global space of each node version is different. i.e., if you have some node modules installed globally for one version of node, they won't be accessible to other versions. You have to install them seperately on those versions too.

[edit this page on github](https://github.com/KirankumarAmbati/KirankumarAmbati.github.io/tree/master/content/blog/nvm-setup/index.md)