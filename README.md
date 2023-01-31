# Yu-Gi-Oh! Virtual Scoreboard

Remote controllable Life Points calculator to be used as a widget on your Remote Duel video source or real-time score on videos and livestreams.

![Screen](https://user-images.githubusercontent.com/16104013/117220372-7c511b80-addd-11eb-887c-77de5b4c9396.png)

You can use a software like OBS or Streamlabs to build a composition with your video camera and the web component.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

To run development server and build to production, you must install and configure:

```
Node.JS
```

Moreover, you must create an [Ably](https://ably.com) account in order to use realtime messages.

And finally, you'll need an API with the following schema:

```
[
  {
    "uid": "12345",
    "name": "Deck Name",
    "images": ["https://link.to/deck-images/deck-image.png"]
  },
  ...
]
```
### Installing

This will help you to get a development env running.

- Install dependencies

```
npm install
```

- Configure environment variables

Create a `.env.local`

```
REACT_APP_ABLY_API_KEY='YOUR_ABLY_API_KEY'
REACT_APP_DECKS_URL='http://your-own-decks-list-api.host/path/to/decks'
```

- Start project

```
npm start
```

## Deployment

You can build the app for production using `build` script.
It correctly bundles React in production mode and optimizes the build for the best performance.

```
npm build
```

This build is minified and filenames include the hashes.
You can deploy `/build` folder on a static file hosting.

## Built With

* [React](https://reactjs.org) - Frontend library
* [SemanticUI](https://semantic-ui.com) - User Interface
* [Ably Realtime](https://ably.com) - Realtime provider

## Authors

* **[Guilherme Eiras](https://github.com/guieiras)** - *Concept and initial work*
