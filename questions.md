The aim of these exercises is to develop a react application where we can display the data of the top 5 cryptocurrency in the market. This package contains some code that can be used as a starting point to develop the application. You are expected to enhance this starter package to produce a working application. To develop the application, you'll need to install nodejs which can be downloaded from https://nodejs.org/en/download/. Please send the completed solution in a zip file including all the solution files and folders without the node_modules folder.

After we receive your completed solution, to assess the solution, we'll do the followings:
    1. Unzip the zip file containing your solution to a folder
    2. From command prompt, we'll cd to the folder above
    3. Execute yarn install or npm install
    4. Execute yarn start or npm start to test your solution

Please make sure before you send your final solution, you've tried the above steps and your application is working properly.

Exercise 1.
After you install nodejs, run npm install to install the dependencies from the folder where package.json resides.
To start the development server, you can run npm start from the folder where package.json resides.
When you start the development server, you'll see a compile error. Please see if you can fix the code and have the starter application running.

Once you have fixed the compile error, you should see a page displaying a cryptocurrency, its price and the percentage change in the last 24 hours using a mock test data.

Exercise 2.
Now that you've the application running with mock test data, the next exercise is to have the application retrieving & displaying live data. An api to retrieve the live data is already provided in src/api folder. You can use `getCryptoData` function in `src/api/api.js` to fetch real time data and display the full list in a similar design.

Please modify the starter application to get the data using the above function and display the top 5 cryptocurrency in the market.

When updating/creating the react component(s) to achieve the above, please demonstrate that you're following react's best practices.

Exercise 3.
By this stage, you should've an application that's able to retrieve live data from live url and display the top 5 cryptocurrency in the market in SGD.

Please enhance the application to add a dropdown to the page with the following currency options "SGD", "AUD", "EUR", "GBP", "USD", "VND". Changing the value of this dropdown should change the display currency of the cryptocurrencies price.

Again when updating/creating the react component(s) to achieve the above, please demonstrate that you're following react's best practices.

Exercise 4.
Now that you've a working application where users can see the top 5 cryptocurrency in the market and able to change the currency, it's time to improve the look & feel of the application.

Improve the UI using CSS. For example, change the percentage box background to green if the value is positive and to red if negative and other improvements that you can think of to make the application stands out from the rest.

Again when updating/creating react component(s) to achieve the above, please demonstrate that you're following react's best practices.

Exercise 5.
By now you should've a fully working application with style that stands out against the rest. So far you probably manage the state inside the components directly. In real life application, we probably use redux or some sort of flux architecture to manage the state of the application. For the last exercise, could you please enhance your solution to use redux to manage the state of the application?

When incorporating redux, please demonstrate that you're following redux/react best practices. Also for the side-effect, you can use any redux middleware that you're comfortable with (redux-thunk, redux-saga, etc).