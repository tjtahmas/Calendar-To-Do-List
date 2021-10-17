// TJ Tahmassebi's Work Day Scheduler Code
//10/13: Created outline for project, put appropriate API links in HTML, began on moment.js work

//NEED TO: compare to other acitivities that used repetitive added elements, create bootstrap template for item, develop input fields

//current day is displayed at top (moment.js)

renderText();

function clock() {
    var today = moment();
    //today = today.add(14, 'h'); //Tester for different times of day
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
    newP.innerHTML = x;
    // newP.innerHTML = document.getElementById("InputBox").value;
    // console.log(document.getElementById("InputBox").)
    // console.log(newP.innerHTML);
    descrip.lastChild.remove();

    descrip.appendChild(newP);
    saveText();
    inputSwitch = false;

}

//text is saved in local storage

function saveText() {
    // Save related form data as an object
    var time9 = document.getElementById('9').children;
    var time10 = document.getElementById('10').children;
    var time11 = document.getElementById('11').children;
    var time12 = document.getElementById('12').children;
    var time1 = document.getElementById('1').children;
    var time2 = document.getElementById('2').children;
    var time3 = document.getElementById('3').children;
    var time4 = document.getElementById('4').children;
    var time5 = document.getElementById('5').children;

    var text9 = [''];
    var text10 = [''];
    var text11 = [''];
    var text12 = [''];
    var text1 = [''];
    var text2 = [''];
    var text3 = [''];
    var text4 = [''];
    var text5 = [''];

    for (var i=0;i < time9.length;i++){
        text9[i] = time9[i].textContent;
    }
    for (var i=0;i < time10.length;i++){
        text10[i] = time10[i].textContent;
    }
    for (var i=0;i < time11.length;i++){
        text11[i] = time11[i].textContent;
    }
    for (var i=0;i < time12.length;i++){
        text12[i] = time12[i].textContent;
    }
    for (var i=0;i < time1.length;i++){
        text1[i] = time1[i].textContent;
    }
    for (var i=0;i < time2.length;i++){
        text2[i] = time2[i].textContent;
    }
    for (var i=0;i < time3.length;i++){
        text3[i] = time3[i].textContent;
    }
    for (var i=0;i < time4.length;i++){
        text4[i] = time4[i].textContent;
    }
    for (var i=0;i < time5.length;i++){
        text5[i] = time5[i].textContent;
    }

    var textItems = {
      element9: text9,
      element10: text10,
      element11: text11,
      element12: text12,
      element1: text1,
      element2: text2,
      element3: text3,
      element4: text4,
      element5: text5,
    };

    // Use .setItem() to store object in storage and JSON.stringify to convert it as a string
    localStorage.setItem("textItems", JSON.stringify(textItems));
  }
  
function renderText() {
    // Use JSON.parse() to convert text to JavaScript object
    var textItems = JSON.parse(localStorage.getItem("textItems"));
    // Check if data is returned, if not exit out of the function
    if (textItems.element9 !== undefined) {
        var descript9 = document.getElementById("9");
        for (var i = 0; i < textItems.element9.length; i++) {
            var newli = document.createElement('li');
            newli.innerHTML = textItems.element9[i];
            descript9.appendChild(newli);
        }
    } if (textItems.element10 !== undefined) {
        var descript10 = document.getElementById("10");
        for (var i = 0; i < textItems.element10.length; i++) {
            var newli = document.createElement('li');
            newli.innerHTML = textItems.element10[i];
            descript10.appendChild(newli);
        }
    } if (textItems.element11 !== undefined) {
        var descript11 = document.getElementById("11");
        for (var i = 0; i < textItems.element11.length; i++) {
            var newli = document.createElement('li');
            newli.innerHTML = textItems.element11[i];
            descript11.appendChild(newli);
        }
    } if (textItems.element12 !== undefined) {
        var descript12 = document.getElementById("12");
        for (var i = 0; i < textItems.element12.length; i++) {
            var newli = document.createElement('li');
            newli.innerHTML = textItems.element12[i];
            descript12.appendChild(newli);
        }
    } if (textItems.element1 !== undefined) {
        var descript1 = document.getElementById("1");
        for (var i = 0; i < textItems.element1.length; i++) {
            var newli = document.createElement('li');
            newli.innerHTML = textItems.element1[i];
            descript1.appendChild(newli);
        }
    } if (textItems.element2 !== undefined) {
        var descript2 = document.getElementById("2");
        for (var i = 0; i < textItems.element2.length; i++) {
            var newli = document.createElement('li');
            newli.innerHTML = textItems.element2[i];
            descript2.appendChild(newli);
        }
    } if (textItems.element3 !== undefined) {
        var descript3 = document.getElementById("3");
        for (var i = 0; i < textItems.element3.length; i++) {
            var newli = document.createElement('li');
            newli.innerHTML = textItems.element3[i];
            descript3.appendChild(newli);
        }
    } if (textItems.element4 !== undefined) {
        var descript4 = document.getElementById("4");
        for (var i = 0; i < textItems.element4.length; i++) {
            var newli = document.createElement('li');
            newli.innerHTML = textItems.element4[i];
            descript4.appendChild(newli);
        }
    } if (textItems.element5 !== undefined) {
        var descript5 = document.getElementById("5");
        for (var i = 0; i < textItems.element5.length; i++) {
            var newli = document.createElement('li');
            newli.innerHTML = textItems.element5[i];
            descript5.appendChild(newli);
        }
    } else {
        return;
    }
}

//refresh and the page persists

