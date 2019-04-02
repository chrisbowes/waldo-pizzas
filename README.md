This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Notes on Architecture

The app is built using GraphQL and the APolloClient library to load data into an initialState, which is then managed by Redux.

As I do not have a great deal of Apollo experience I chose thisa approach as I am familiar with Redux. However, having read and experimented further with Apollo, in hindsight I believe it may have been better and cleaner to manage the entire state with Apollo. In the interests of best demonstrating my current abilities I stuck with Redux. 

I have bnot written front end unit tests for the app due to time contraints, but have tried to keep the components small and lightweight and easily testable. Proptypes are used in the lower level ui components.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


