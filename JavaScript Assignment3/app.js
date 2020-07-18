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
// var studentdata = document.getElementById("studentdata");
// var ind = 0;
// var ind2 = 0;
// var ind3 = 0;
// function t1() {
//     var tr = document.createElement('tr')
//     var td = document.createElement('td')
//     tr.appendChild(td)
//     ind += 1;
//     var tx = document.createTextNode(ind);
//     td.appendChild(tx);
//     var td2 = document.createElement('td')
//     tr.appendChild(td2)
//     ind2 += 1;
//     var tx2 = document.createTextNode(ind2);
//     td2.appendChild(tx2);
//     var td3 = document.createElement('td')
//     tr.appendChild(td3)
//     ind3 += 1;
//     var tx3 = document.createTextNode(ind3);
//     td3.appendChild(tx3);
//     var td4 = document.createElement('td');
//     tr.appendChild(td4);
//     var button = document.createElement('input');
//     button.setAttribute('type', 'button');
//     button.setAttribute('value', 'Delete');
//     button.setAttribute('onclick', 'removeRow(this)');
//     button.style.width = '100%'
//     td4.appendChild(button);
//     var studentdata = document.getElementById("studentdata");
//     studentdata.appendChild(tr)
//     studentdata.appendChild(td)
//     studentdata.appendChild(td2)
//     studentdata.appendChild(td3)
//     studentdata.appendChild(td4)
// }
// function removeRow(oButton) {
//     var empTab = document.getElementById('studentdata');
//     empTab.removeRow(oButton);
// }