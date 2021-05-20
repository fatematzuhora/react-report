# react-report
An interactive web app to generate a financial report to analyse profitability of the practitioners on each month.

The Front-End application is build using the [ReactJS](https://reactjs.org/), [TypeScript](https://www.typescriptlang.org/), and [Redux](https://redux.js.org/).

And [Antd](https://ant.design/) is using to develop UI.

### Live URL
`react-report` is running as a website hosted on

👉 [https://react-report-fatematzuhora.netlify.app/](https://react-report-fatematzuhora.netlify.app/)

## Quick Start (Option #1)
* Clone the repo:
```
https://github.com/fatematzuhora/react-report.git
```
* Go inside the folder:
```
cd react-report
```
* Install necessary libraries:
```
npm i
```
* Run the project:
```
npm run start
```

## Build Docker Image (Option #2)
* Go inside the folder:
```
cd react-report
```
* Build a **docker image**:
```
sudo docker build -t fatematzuhora/react-report .
```
Now you can see the following message on your terminal:

**Successfully tagged fatematzuhora/react-report:latest**

This means the docker image has built successfully.

* Run the docker image:
```
sudo docker run -it -p 3000:3000 fatematzuhora/react-report
```

## Pull from [Docker Hub](https://hub.docker.com/r/fatematzuhora/react-report) (Option #3)

* Simply just pull the docker image from the docker hub:
```
docker pull fatematzuhora/react-report
```
* Run the docker image:
```
sudo docker run -it -p 3000:3000 fatematzuhora/react-report
```

**Now go to the browser and browse http://localhost:3000**