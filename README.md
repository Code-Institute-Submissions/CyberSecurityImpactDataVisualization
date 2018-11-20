# Cyber Security Breaches and their Impact - a Data Dashboard

## Project Two - Interactive Frontend Development

This is my second project - a data dashboard that visualizes a dataset of cybersecurity breaches from the US Department of Health and Human Services, between the years 2009 and 2015. 

The project highlights key facts and figures about the data, such as the most used methods of attack, and the most unsecure company items. This will be in the form of a single page application, using D3.js and dc.js to visualize the data.

The purpose of the project is to demonstrate my frontend JavaScript skills.

### Demo:

A live demo can be found here: https://sarahcrosby.github.io/CyberSecurityImpactDataVisualization/

### Technology and Languages:

* [DC.js (2.1.8)](https://dc-js.github.io/dc.js/) - Dimensional Charting JavaScript Library, for analysis and visalization of my data set.
* [D3 (v5)](https://d3js.org/) - a JavaScript for manipulating HTML documents based on my data set. 
* [Crossfilter 1.3.12](http://square.github.io/crossfilter/) - a JavaScript library for exploring my data set.
* [Javascript (1.8.5)](https://en.wikipedia.org/wiki/JavaScript) - the language and logic of the interactive webpage.
* [HTML5](https://en.wikipedia.org/wiki/HTML) - the language used to write and create the web page.
* [CSS3](https://en.wikipedia.org/wiki/Cascading_Style_Sheets) - the language used to customise and present the web page, including CSS3 media queries.
* [Bootstrap (4.1.3)](https://getbootstrap.com/) - to build a responsive and visually appealing site.
* [CSV](https://en.wikipedia.org/wiki/Comma-separated_values) - Comma Separated Values, used to store my data set
* [Jasmine (2.7.0)](https://jasmine.github.io/) - used to create automated tests for JavaScript.

### UX:

The specification for the project was a Single-Page Application (SPA), so this was the driving factor behind the design of the data dashboard. I wanted the page to flow, which is why I decided to align the visualizations on the left, and have an aligned column of text on the right side of the page. This is because I wanted the visualizations to stand out, but I wanted the explanation of what the data represents next to add context to the graphs. 

Due to the nature of the project using D3.js, this is not optimised for viewing on smaller screens, so the project is best viewed on a laptop or desktop computer.

I also wanted to encorporate the following user stories: 

* As a user, I want to learn something from the data dashboard, which means I have to understand what the graphs mean.
* As a user, I want to be able to navigate the website easily, which requires a user-friendly design.
* As a user, I don't want there to have unanswered questions about the data dashboard, which requires a full explanation of features.
* As a user, I want to be able to customise the graphs, which requires interactive coding.
* As a user, I don't want to be confused or overloaded, which requires a simple and not over-complicated user experience.

### Features

I added a title and simple opening paragraph to the beginning of the dashboard, in order to explain what the following data visualizations were focused on. I made this introduction short but informative, so the user was informed, but not overloaded with information.

Under this, I added three selectors, designed to make the page interactive. I also realised that I had not implemented a way to reset the whole page, because the graphs themselves are customisable by clicking on a specific category, for example, breaches by hacking. This would have meant that the user would have to refresh the page every time they wanted to see the data overall. I resolved this by adding selectors at the top of the page, so the user could either click on a specific category on a graph, or at the top of the page, and they would also have the option to "select all" - which would refresh the data instead of refreshing the page. I wanted to cut down on the number of page refreshes, as we are working with a large amount of data, each refresh could use MB of the user's internet data.

I then added the data visualizations, which represent three different areas. These begin with the number of attacks, split into the type of breach and the origin of the breach. I started with this asI believed it would introduce the rest of the data, as this involved a straightforward 'total number of..' attacks. I used a bar chart and pie chart for each part, as I believed this would help the user the visualize the information, because the pie chart shows the data as a whole 100%, and the bar chart breaks this down into the specific numbers. 

I followed this with a bar chart that plots the type of breach against the origin of the breach. This was to show the user what methods cuber criminals use to attack certain items, for example, the leading cause of breach for laptops is theft. I believe this graph flows from the two previous.

The final bar chart represents the average impact of each type of attack. So, for example, every report that was linked back to the loss of an item and resulted in a security breach, impacted, on average, over 70,000 people. This graph represents the final part of the dashboard, and attempts to conclude the previous two sections. 

Each graph is interactive, and users can customsie the page by selecting a specific criteria. 

I added key facts and figures next to the graphs, which highlight key information, and were designed to explain what the graphs represented if any user could not immediately see this. I did not want the user to have any unasnwered questions about what the graphs represented.

I used Bootstrap columns and CSS3 media queries to make the website responsive, and to enhance the user's experience.

I did attempt to create a scatter graph of the data plotting number of people affected by an attack, and the date of the attacks, to see if there was any particular time of year when attacks occurred the most. Due to the nature of the data, the graph took up too much space on the page, and it was very difficult to see any correlation. This is a feature I would look at implementing on the future.

### Deployment:

My code is deployed to GitHub, at: https://github.com/sarahcrosby/CyberSecurityImpactDataVisualization

To run the code locally, clone the repository by entering the following code into your terminal: 
> $ git clone https://github.com/sarahcrosby/CyberSecurityImpactDataVisualization

You will then be able to run the code by running the 'index.html'.

### Testing:
 
I have written automated tests with Jasmine, for the following JavaScript functions: add_item, remove_item and initialise. This is important for the 'average impact' graphs, as the average number of people affected by each type and method of security attack is calculated. The automated tests ensure the data is iterated through by adding and removing items, and the counts are returned to zero after the counts are calculated for the graphs.

I manually tested the graphs themselves, by ensuring the information was correctly loaded. For example, I compared the numbers that appear when you hover over the different categories in the maps, to ensure they were the same across the graphs.

While I was calculating the numbers for the explanations next to the graphs, I spent some time with other calculations, for example manually testing that the average impact numbers on the bar chart, corresponded with the total impact numbers on the pie chart in the final section of the dashboard.

To test my media queries, columns and to ensure the layout worked on different size screens, I used the emulator on developer tools on Internet Explorer, to replicate the page on different devices. I also loaded the page on my mobile, laptop, large desktop screen and iPad - all the ensure the different page elements were optimised. Although I am aware that the graphs are designed to be viewed on larger screens.

I also used the developer tools to write the custom CSS, as I tested which looked best before writing it into my 'custom.css'.


### Version Control:
1. Initial commit. Added dataset, Bootstrap template, index.html.
2. Added first bar chart to trial data.
3. Added state selector, types of breach and breached information bar charts, type of attack distribution charts.
4. Added average impact graphs.
5. Added attack type and attack item pie charts. Started automatic testing with Jasmine.
6. Added custom CSS, content and formatting to 'index.html'. Also added pie charts.
7. Final code edits, including automated testing. Updated README file.

### Credits

I sourced my dataset from the following GitHub:
* https://github.com/vincentarelbundock/Rdatasets/blob/master/csv/Ecdat/HHSCyberSecurityBreaches.csv