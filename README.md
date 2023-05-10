# 05 Third-Party APIs: Work Day Scheduler



## User Story

```md
AS AN employee with a busy schedule
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively
```

## Acceptance Criteria

```md
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with timeblocks for standard business hours
WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
WHEN I click into a timeblock
THEN I can enter an event
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist
```

### Current Day:
jquery syntax was used to call the paragraph element with the id currentDay. the current date was assigned to this variable and formatted into a string to show only the month, day and year.

### Timeblocks:
Business hours were hard coded into the HTML. However, each div element that was in the row time-block class was assigned an id which was the 24 hour conversion of the standard business hour.

### Color Coding:
Color coding classes were set up in CSS, and then applied dynamically in javascript. The current hours were pulled out from the new Date() constructor. These hours were returned as a string and were able to be compared to the timeblock ids. If the current time was greater than the id, it was assigned to the past class. If the current hour was equal to the id, it was assigned to the present class. And if it was smaller, it was assigned to the future class. The CSS styling was applied according to the class assigned. 

### Save and Local Storage:
A click event was used to save user input into local storage. The time block ids were used as the key name, and the corresponding input was the value of the key. A for loop was created in order for the user input to persist after a refresh. Userinput persisted, post refresh, by displaying the content saved in local storage.


https://user-images.githubusercontent.com/127250721/236540918-3dc69532-a401-4b22-8845-f805fdbff602.mp4

Deploy Link: https://haileyraehughes89.github.io/challenge-5-Third-Party-APIs/

