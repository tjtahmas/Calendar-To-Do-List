// TJ Tahmassebi's Work Day Scheduler Code
//10/13: Created outline for project, put appropriate API links in HTML, began on moment.js work

//NEED TO: compare to other acitivities that used repetitive added elements, create bootstrap template for item, develop input fields

//current day is displayed at top (moment.js)

function clock() {
    var today = moment();
    today = today.add(14, 'h'); //Tester for different times of day
    //console.log(today);
    var currentTime = today.format('MMMM Do YYYY, h:mm:ss a');
    $('#timer').text(currentTime)


    //timeblocks color coded to indicate past,present,future (gray for past, red for present, green for future)
    //Need if statements to check timeblock ids. If today is past, on, or not to the time block's hour then change to the appropriate class

    var hour = today.format('h');
    var AMorPM = today.format('a');
    if (hour == 9 && AMorPM == 'am') { //9AM conditions
        $('#9AM').addClass("present");
    } else if (hour < 9 && AMorPM == 'am') {
        $('#9AM').addClass("future");
    } else if (hour > 9 && AMorPM == 'am' || AMorPM == 'pm') {
        $('#9AM').addClass("past");
    }
    if (hour == 10 && AMorPM == 'am') {
        $('#10AM').addClass("present");
    } else if (hour < 10 && AMorPM == 'am') {
        $('#10AM').addClass("future");
    } else if (hour > 10 && AMorPM == 'am' || AMorPM == 'pm') {
        $('#10AM').addClass("past");
    }
    if (hour == 11 && AMorPM == 'am') {
        $('#11AM').addClass("present");
    } else if (hour < 11 && AMorPM == 'am') {
        $('#11AM').addClass("future");
    } else if (hour > 11 && AMorPM == 'am' || AMorPM == 'pm') {
        $('#11AM').addClass("past");
    }
    if (hour == 12 && AMorPM == 'pm') {
        $('#12PM').addClass("present");
    } else if (hour < 12 && AMorPM == 'am') {
        $('#12PM').addClass("future");
    } else if (hour < 12 && AMorPM == 'pm') {
        $('#12PM').addClass("past");
    }
    if (hour == 1 && AMorPM == 'pm') {
        $('#1PM').addClass("present");
    } else if (hour == 12 && AMorPM == 'pm' || AMorPM == 'am') {
        $('#1PM').addClass("future");
    } else if (hour > 1 && AMorPM == 'pm') {
        $('#1PM').addClass("past");
    }
    if (hour == 2 && AMorPM == 'pm') {
        $('#2PM').addClass("present");
    } else if (hour == 12 && AMorPM == 'pm' || hour < 2 && AMorPM == 'pm' || AMorPM == 'am') {
        $('#2PM').addClass("future");
    } else if (hour > 2 && AMorPM == 'pm') {
        $('#2PM').addClass("past");
    }
    if (hour == 3 && AMorPM == 'pm') {
        $('#3PM').addClass("present");
    } else if (hour == 12 && AMorPM == 'pm' || hour < 3 && AMorPM == 'pm' || AMorPM == 'am') {
        $('#3PM').addClass("future");
    } else if (hour > 3 && AMorPM == 'pm') {
        $('#3PM').addClass("past");
    }
    if (hour == 4 && AMorPM == 'pm') {
        $('#4PM').addClass("present");
    } else if (hour == 12 && AMorPM == 'pm' || hour < 4 && AMorPM == 'pm' || AMorPM == 'am') {
        $('#4PM').addClass("future");
    } else if (hour > 4 && AMorPM == 'pm') {
        $('#4PM').addClass("past");
    }
    if (hour == 5 && AMorPM == 'pm') {
        $('#5PM').addClass("present");
    } else if (hour == 12 && AMorPM == 'pm' || hour < 5 && AMorPM == 'pm' || AMorPM == 'am') {
        $('#5PM').addClass("future");
    } else if (hour > 5 && AMorPM == 'pm') {
        $('#5PM').addClass("past");
    }
}
setInterval(clock, 1000);

//timeblocks display below
//In HTML

//click on the timeblock to enter event

var inputSwitch = false;

$(function () {
    $(".description").bind("click", function (event) {
        openText(event);
    });
});

function openText(event) { //opens up the textbox inside the correct div
    if (inputSwitch === false){
        var value = event.target.id;

        // // First create a DIV element.
        // var txtNewInputBox = document.createElement('input');

        // // Then add the content (a new input box) of the element.
        // txtNewInputBox = "<input type='text' id='InputBox' name='InputBox'>";

        // // Finally put it where it is supposed to appear.
        // //console.log(document.getElementById("" + value))
        var input = document.createElement("input");
        input.type = 'text';
        input.id = 'InputBox';

        document.getElementById("" + value).appendChild(input);
        inputSwitch = true;
    }
}

//can click save for that timeblock
$(function () {
    $(".saveBtn").bind("click", function (event) {
        getChars(event);
    });
});

function getChars(event) { //Gets number of characters from textbox
    var match = event.target.id;
    match = match.slice(0, -1);
    var descrip = document.getElementById("" + match);
    // First create a DIV element.
    var newP = document.createElement('li');
    var x = document.getElementById("InputBox").value;
    console.log(x)
    newP.innerHTML = x;
    // newP.innerHTML = document.getElementById("InputBox").value;
    // console.log(document.getElementById("InputBox").)
    // console.log(newP.innerHTML);
    descrip.lastChild.remove();
    myStorage = window.localStorage;
    
    descrip.appendChild(newP);
    inputSwitch = false;

}

//text is saved in local storage

//refresh and the page persists

