# Weather-API-Homework


https://anotherarod.github.io/Weather-API-Homework/



HTML(step 1):

Lines 1-11: Set up standard HTML template along with fontawesome link and bootstrap. This is placed all within the head tag and with a title tag.
<------------------------------------------------------------------------>
Lines 13-14: We have a Navbar with styling and a H1 tag to display Weather Dashboard.
<------------------------------------------------------------------------>
Lines 17-31: A div tag with a class of "container" to wrap all the sunsequent rows for the remainding HTML.
<------------------------------------------------------------------------>

Lines 18-25: Within these rows we will have div tags with classes for styling, input tags with ids for elements we will call in the script.js file and buttons for the search bar and clear history input. we will also incorporate some font awesome touches.
<------------------------------------------------------------------------>

Lines 32-40: Here we have a class of columns with a couple rows. This space on the page will be used to hold the city and temperature with UVindex from the API calls.

Now this was especially challenging. During the HTML validation process I encountered an error that just would not go aware because there was an img tag without a src= in the tag, however there was, it was just a placeholder.(example: src="placeholder"), I tried src=(""),src="//:0", and about:blank.

Nothing worked, after freaking out and having an anxiety attack I gave it one last shot and found this src="data:," which allowed me to have a img tag with an empty src. #winning:)
<------------------------------------------------------------------------>

Lines 41-62: This part in the body is comprised of the divs and rows that will hold the temp, wind speed, humidity, and UVindex.
<------------------------------------------------------------------------>

Lines 63-77: I have placed a the final row with 5 classes of column to hold the 5-day forecast. 

Lines 79-84 The final touch to the HTML was the script tag to link to my script.js file. A jquery link. To be honest, I am somewhat weak with Jquery and need more practice.  During the research process and me figuring out how I was even gonna approach this assignment I came across an interesting technology and after trying out a couple snippets of code I learned it was rather simple to use axios.get for requests instead of the $.ajax() function. I pulled the script tag link from this website https://blog.logrocket.com/how-to-make-http-requests-like-a-pro-with-axios/


Really cool stuff!
<------------------------------------------------------------------------>

Javascript (Step 2) Generally I would say css is second but in this case not too much styling is necessary and alot can be done within the tages in the HTML.
<------------------------------------------------------------------------>

Line 1: I have created a renderpage function which I will complete at the end of the page.
<------------------------------------------------------------------------>

Lines 2-12: This area will hold the var global variables which i will call through the script.js.
<------------------------------------------------------------------------>

Line 12: A search history variable with a JSON parse to local storage.
<------------------------------------------------------------------------>

Line 13: A console.log for (searchHistory) and to check for errors.
<------------------------------------------------------------------------>

Moving forward the challenge for me specifically was doing multiple get requests. Thank god for th tutor that I signed up for because he helped me understand what I was missing and gave me confidence that I wasn't far off.

After I did the first one, the rest kind of fell into place, albeit with a couple hurdles here and there.

Next came a getWeather function with curly braces and within them were 3 main get requests. The main query URL, Forecasts, and UVIndex.

Each of those were followed by console.log(response)
<------------------------------------------------------------------------>

Lines 91-99: I set up and event listener for my input element and search element with local storage.

As part of this I used a "keydown" function to acknowledge when the user presses the "enter" button on the keyboard when they input a city to forecast.

<------------------------------------------------------------------------>

Lines 120-121: I made a function to convert kelvin to fahrenheit and used math.floor method to make sure the populated temp would be without decimals and rounded down to the nearest integer.

Line 124: Lastly I created a render search history function to keep users past city forecast choices in the history coloumn under the search bar.





















