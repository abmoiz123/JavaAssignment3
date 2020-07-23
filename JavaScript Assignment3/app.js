// Chapter 38 to 42
// Q1
// function power(a, b) {
//     var c = a+b;
//     document.write(c)
// }
// power(3, 5);
// Q2
// function leapyear() {
//     var year = +prompt("Enter Year");
//     var check = year % 100 === 0 ? year % 400 === 0 : year % 4 === 0;
//     if (check === true) {
//         alert(year + " is leap");
//     }else {
//         alert(year + " is not leap");
//     }
// }
// leapyear();
// Q3
// function area(a, b, c) {
//     var s = (a+b+c)/2;
//     var area = Math.sqrt(s*(s-a)*(s-b)*(s-c));
// document.write(area)
// }
// area(5, 7, 8)
// Q4
// function main() {
//     var a = new function (percentage) {
//         var sub1 = +prompt("Enter Math Marks:");
//         if (sub1 <= 100) {
//             var sub2 = +prompt("Enter English Marks:");
//             if (sub2 <= 100) {
//                 var sub3 = +prompt("Enter Urdu Marks:");
//                 if (sub3 <= 100) {
//                     var ob_marks = 300;
//                     var total = sub1 + sub2 + sub3;
//                     var percentage1 = (total * 100) / ob_marks;
//                     document.write("Your Percentage is: " + percentage1 + "%");
//                 } else {
//                     alert("Enter Marks Less Then 100")
//                 }
//             } else {
//                 alert("Enter Marks Less Then 100")
//             }
//         } else {
//             alert("Enter Marks Less Then 100")
//         }
//         var b = new function(average) {
//             var average1 = percentage1 / 3;
//             document.write("<br>" + "Your Average is: " + average1)
//         }
//     }
// }
// main()
// Q5
// function check() {
//     var a = ["blue", "green", "red"]
//     var b = a.indexOf("blue")
//     document.write(b)
// }
// check()
// Q6
// function Q6_38() {
//     var string = " Assume that the sentence is not more than 25 characters long";
//     string = string.replace(/[aeiou]/g, '');
//     document.write(string);
// }
// Q6_38()
// Q7
// function findOccurrences() {
//     var str = "Pleases read this application and give me gratuity";
//     var count = 0;
//     let haveSeenVowel = false;
//     for (const letter of str.toLowerCase()) {
//         switch (letter) {
//             case 'a':
//             case 'e':
//             case 'i':
//             case 'o':
//             case 'u':
//                 {
//                     if (haveSeenVowel) {
//                         count++;
//                         haveSeenVowel = false;
//                     } else {
//                         haveSeenVowel = true;
//                     }
//                     break;
//                 }
//             default:
//                 haveSeenVowel = false
//         }
//     }

//     return count
// }
// console.log(findOccurrences());
// Q8
// var distance = +prompt("Enter Distance Between Karachi To Hyderabad");
// function meter() {
//     var meter = distance * 1000;
//     return meter;
// }
// function feet() {
//     var feet = distance * 3280.84;
//     return feet;
// }
// function inches() {
//     var inches = distance * 39370.1;
//     return inches;
// }
// function centimeter() {
//     var centimeter = distance * 100000;
//     return centimeter;
// }
// var check = meter();
// var check2 = feet()
// var check3 = inches()
// var check4 = centimeter()
// document.write(check + " Meter in " + distance + " KM ");
// document.write("<br>" + check2 + " Feet in " + distance + " KM ");
// document.write("<br>" + check3 + " Inches in " + distance + " KM ");
// document.write("<br>" + check4 + " Centimeter in " + distance + " KM ");
// Q9
// function overtime() {
//     var hour = 42;
//     if (hour >= 40) {
//         hour = hour - 40;
//         var overtime = 12.00;
//         var overtime_sal = hour * overtime;
//         document.write("Your OverTime Salary = " + overtime_sal);
//     }else if (hour <= 40) {
//         document.write("You have to work for more than 40 hours to get over time pay")
//     }
// }
// overtime()
// Q10
// function findnotes() {
//     var a = 470;
//     var b = a / 100;
//     var c = Math.floor(b)
//     // console.log(c)
//     var d = (a % 100) / 50;
//     var e = Math.floor(d)
//     // console.log(e)
//     var f = ((a % 100) % 50) / 10;
//     var g = Math.floor(f);
//     // console.log(g)
//     document.write("You Will Have " + c + " 100 Notes " + e + " Fifty Notes " + g + " 10 Notes.")
// }
// findnotes()
// Chapter 43 to 48
// Q1
// function Q1_43to48() {
//     alert("Hello World");
// }
// Q2
// function Q2_43to48() {
//     alert("Thanks For Purchasing Phone From Us.")
// }
// Q3
// function deleterow(o) {
//     var p = o.parentNode.parentNode;
//     p.parentNode.removeChild(p);
// }
// Q4
// function changepic(id,src) {
//     var image = document.getElementById(id);
//     image.src = src;
// }
// Q5
// var counter2 = document.getElementById("counter")
// counter2 = 0;
// function incre() {
//     counter2 += 1;
//     document.getElementById("counter").innerHTML = counter2;
// }
// function decre() {
//     counter2 -= 1;
//     document.getElementById("counter").innerHTML = counter2;
// }
// Chapter 49 to 52
// Q1
// function formdata() {
//     var formhide = document.getElementById("form1");
//     formhide.style.display = "none";
//     var name = document.getElementById("f-name").value;
//     document.getElementById("f-name2").innerText = name;
//     var name2 = document.getElementById("L-name").value;
//     document.getElementById("L-name2").innerText = name2;
//     var email = document.getElementById("email").value;
//     document.getElementById("email2").innerText = email;
//     var pass = document.getElementById("pass").value;
//     document.getElementById("pass2").innerText = pass;
//     var c_pass = document.getElementById("c-pass").value;
//     document.getElementById("c-pass2").innerText = c_pass;
//     var data2 = document.getElementById("data2");
//     data2.style.display = "block";
// }
// Q2
// function readmore() {
//     var read = document.getElementById("readmore");
//     read.style.display = "none";
//     var p1 = document.getElementById("p2");
//     p1.style.display = "inline";
// }
// Q3
function stddata() {
    var data = document.getElementById("datahide");
    data.style.display = "block";
}
var ind = 0;
function studentdata() {
    var table = document.getElementById("studentdata");
    var tr = document.createElement('tr');
    table.appendChild(tr);
    var td = document.createElement('td');
    tr.appendChild(td);
    ind += 1;
    td.innerText = ind;
    var td2 = document.createElement('td');
    tr.appendChild(td2);
    var text1 = document.getElementById("stdname");
    td2.innerText = text1.value;
    var td3 = document.createElement('td');
    tr.appendChild(td3);
    var text2 = document.getElementById("class");
    td3.innerText = text2.value;
    var td4 = document.createElement('td');
    tr.appendChild(td4);
    var editbtn = document.createElement('button');
    editbtn.innerText = "Edit";
    editbtn.style.width = "100%";
    editbtn.setAttribute('onclick', 'editbtn(this)');
    editbtn.setAttribute('class', 'editbtn');
    td4.appendChild(editbtn);
    var td5 = document.createElement('td');
    tr.appendChild(td5);
    var dltbtn = document.createElement('button');
    dltbtn.innerText = "Delete";
    dltbtn.style.width = "100%";
    dltbtn.setAttribute('onclick', 'deletebtn(this)');
    dltbtn.setAttribute('class', 'dltbtn');
    td5.appendChild(dltbtn);
    text1.value = "";
    text2.value = "";
    var data = document.getElementById("datahide")
    data.style.display = "none";
}
function deletebtn(i) {
    i.parentNode.parentNode.remove()
}
function editbtn(j) {
    var td1 = j.parentNode.parentNode.firstChild.nextElementSibling.childNodes[0].nodeValue;
    var name = prompt("Enter Your Name:", td1);
    j.parentNode.parentNode.firstChild.nextElementSibling.childNodes[0].nodeValue = name;
    var td2 = j.parentNode.previousElementSibling.childNodes[0].nodeValue;
    var class1 = prompt("Enter Your Name:", td2);
    j.parentNode.previousElementSibling.childNodes[0].nodeValue = class1;
}
// Chapter 52 to 57
// Q1
var modal = document.getElementById('myModal');
var images = document.querySelectorAll(".img-thumbnail");
var modalImg = document.getElementById("img01");
modalImg.style.width = "500px";
var captionText = document.getElementById("caption");
var zoom = document.getElementById("zoom1")
for (let i = 0; i < images.length; i++) {
    images[i].onclick = function () {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    }
}
var span = document.getElementsByClassName("close")[0];
span.onclick = function () {
    modal.style.display = "none";
}
function zoomPlus() {
    var zoomimg = modalImg.width;
    var zoomimg2 = modalImg.height;
    modalImg.style.width = (zoomimg + 10) + "px";
    modalImg.style.height = (zoomimg2 + 10) + "px";
}
function zoomMinus() {
    var zoomimg = modalImg.width;
    var zoomimg2 = modalImg.height;
    modalImg.style.width = (zoomimg - 10) + "px";
    modalImg.style.height = (zoomimg2 - 10) + "px";
}
// Chapter 58 to 67
// Q1
var main_content = document.getElementById("main-content");
var main_content2 = main_content.innerHTML;
var display_content = document.getElementById("display-content");
display_content.innerText = main_content2;



var checkClass = main_content.getElementsByClassName("render");
var eleClass = document.getElementById("eleClass");
for (var i = 0; i < checkClass.length; i++) {
    var insertdata = checkClass[i].innerText;
    // console.log(checkClass[i].innerText);

}



function Q1DataSubmit() {
    var email12 = document.getElementById("email123");
    var firstName = document.getElementById("first-name");
    var lastName = document.getElementById("last-name");
    var data = document.getElementById("name1");
    data.innerHTML = firstName.value;
    var data2 = document.getElementById("name2");
    data2.innerHTML = lastName.value;
    var data3 = document.getElementById("email12");
    data3.innerHTML = email12.value;
    email12.value = "";
    firstName.value = "";
    lastName.value = "";
}
// Q2
var formContent = document.getElementById("form-content");
var olli1 = document.getElementById("olli1"); 
olli1.innerText += formContent.nodeType;
var lastname1 = document.getElementById("lastName");
var olli2 = document.getElementById("olli2");
olli2.innerText += lastname1.nodeType; 
var olli3 = document.getElementById("olli3");
olli3.innerText += lastname1.firstChild.nodeType;
var oll = document.getElementById("main-content");
var olli4 = document.getElementById("olli4");
olli4.innerText += oll.firstElementChild.outerHTML
var olli5 = document.getElementById("olli5");
olli5.innerText += oll.lastElementChild.outerHTML;
var olli6 = document.getElementById("olli6");
olli6.innerText += lastname1.nextElementSibling.outerHTML
var olli7 = document.getElementById("olli7");
olli7.innerText += lastname1.previousElementSibling.outerHTML;
var hemail = document.getElementById("email123");
var olli8 = document.getElementById("olli8");
olli8.innerText += hemail.parentElement.outerHTML;
var olli9 = document.getElementById("olli9");
olli9.innerText += hemail.parentNode.nodeType;