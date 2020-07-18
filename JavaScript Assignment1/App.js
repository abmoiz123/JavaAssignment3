// Chapter#1
// Q1
function c1ans1() {
    alert("Hello World!");
}
// Q2
function c1ans2() {
    alert("Error! Please enter a valid password");
}
// Q3
function c1ans3() {
    alert("Welcome to JS Land\nHappy Coding!");
}
// Q4_A
function c1ans4_a() {
    alert("Welcome to JS Land");
}
// Q4_B
function c1ans4_b() {
    alert("Happy Coding!\nPrevent this page from creating additional dialogs.");
}
// Q5
console.log("Hello..I can run JS through my web browser's console.");
// Chapter#2
// Q1
var username;
// Q2
var myname = ("Muhammad Moiz");
// Q3
var message = ("Hello World");
function c2ans3() {
    alert(message);
}
// Q4_A
var student = ("Student Name: M.Moiz");
function c2ans4_a() {
    alert(student);
}
// Q4_B
var studentAge = ("Student Age: 20 years Old");
function c2ans4_b() {
    alert(studentAge);
}
// Q4_C
var certification = ("Certification: Certified Mobile Application Development");
function c2ans4_c() {
    alert(certification);
}
// Q5
var pizza = ("PIZZA\nPIZZ\nPIZ\nPI\nP");
function c2ans5() {
    alert(pizza);
}
// Q6
var email = ("My Email Address is ");
var eaddress = ("abdulmoiz328@gmail.com");
var emailaddress = (email + eaddress);
function c2ans6() {
    alert(emailaddress);
}
// Q7
var book = ("A Smarter way to learn JavaScript");
function c2ans7() {
    alert("I am trying to learn from the book " + book);
}
// Q8
var doc = ("Yah! I can write HTML content through JavaScript");
function c2ans8() {
    document.write(doc + "<br>");
    document.write("back to home page refresh browser")
}
// Q9_A
var design = ("“▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬”");
function c2ans9_a() {
    document.write(design + "<br>");
    document.write("back to home page refresh browser")
}
// Q9_B
function c2ans9_b() {
    alert(design);
}
// Chapter#3
// Q1
var age1 = ("I am 20 years old");
function c3ans1() {
    alert(age1);
}
// Q2
var visit = 14;
function c3ans2() {
    alert("You have visited this site " + visit + " times");
}
// Q3
var birthyear = 1999;
function c3ans3() {
    document.write("My birth year is " + birthyear + "<br>");
    document.write("back to home page refresh browser")
}
// Q4
var visitorname = ("M.Moiz ");
var producttitle = (" T-shirt(s) ");
var quantity = (5);
function c3ans4() {
    document.write(visitorname + "Ordered " + quantity + producttitle + "on Fashion.online store.");
    document.write("back to home page refresh browser")
}
// Chapter#4
// Q1
var refresh = ("back to home page refresh browser")
var variable_1 = 1,
    variable_2 = 2,
    variable_3 = 3;
// Q2
var legal = ("moiz,$moiz,_moiz,moiz1,moiz_1");
var illegal = ("1moiz,%moiz,moiz moiz,@moiz,!moiz");
// Chapter#4
// Q3
function c4ans3() {
    document.write("Rules for naming JS variables" + "<br>");
    document.write("Variable names can only contain ,letters,numbers,underscore and dollar sign. For example $my_1stVariable" + "<br>");
    document.write("Variables must begin with a letter,Dollar sign,underscore. For example $name, _name or name" + "<br>");
    document.write("Variable name are case Sensitive" + "<br>");
    document.write("Variable names should not be JS Keywords" + "<br>");
    document.write(refresh);
}
// Chapter#5
// Q1
function c5ans1() {
    var num1 = +prompt("Addition Number 1");
    var num2 = +prompt("Addition Number 2");
    var num3 = num1 + num2;
    document.write("Sum of " + num1 + " and " + num2 + " is " + num3 + "<br>");
    document.write(refresh);
}
// Q2_A
function c5ans2_a() {
    var num4 = +prompt("Subtraction Number 1");
    var num5 = +prompt("Subtraction Number 2");
    var num6 = num4 - num5;
    document.write("Difference of " + num4 + " and " + num5 + " is " + num6 + "<br>");
    document.write(refresh);
}
// Q2_B
function c5ans2_b() {
    var num7 = +prompt("Multiplication Number 1");
    var num8 = +prompt("Multiplication Number 2");
    var num9 = num7 * num8;
    document.write("Product of " + num7 + " and " + num8 + " is " + num9 + "<br>");
    document.write(refresh)
}
// Q2_C
function c5ans2_c() {
    var num10 = +prompt("Division Number 1");
    var num11 = +prompt("Division Number 2");
    var num12 = num10 / num11;
    document.write("Quotient of " + num10 + " and " + num11 + " is " + num12 + "<br>");
    document.write(refresh);
}
// Q2_D
function c5ans2_d() {
    var num13 = +prompt("Modulus Number 1");
    var num14 = +prompt("Modulus Number 2");
    var num15 = num13 % num14;
    document.write("Reminder of " + num13 + " and " + num14 + " is " + num15 + "<br>");
    document.write(refresh);
}
// Q3
function c5ans3() {
    var undef_ined = ("Value after variable declaration is undefined");
    document.write(undef_ined + "<br>")
    var value_1 = 5;
    document.write("Initial value: " + value_1 + "<br>")
    var increa_ment1 = (++value_1);
    document.write("Value after increament is: " + increa_ment1 + "<br>");
    var add_1 = 7;
    var add_2 = (increa_ment1 + add_1);
    document.write("Value after addition is: " + add_2 + "<br>")
    var decrea_ment = (--add_2);
    document.write("Value after decreament is: " + decrea_ment + "<br>");
    var divi_de = (decrea_ment % 3);
    document.write("The reminder is: " + divi_de + "<br>");
    document.write(refresh)
}
// Q4
function c5ans4() {
    var movie_ticket = 600;
    var quantity_1 = 5;
    var total = 600 * 5;
    document.write("Total cost to buy " + quantity_1 + " tickets to a movie is " + total + "PKR" + "<br>");
    document.write(refresh);
}
// Q5
function c5ans5() {
    var table = ("Table of 4");
    document.write(table + "<br>");
    var table_value = 4;
    var table_1 = table_value * 1;
    document.write(table_value + " x" + " 1" + " = " + table_1 + "<br>");
    var table_2 = table_value * 2;
    document.write(table_value + " x" + " 2" + " = " + table_2 + "<br>");
    var table_3 = table_value * 3;
    document.write(table_value + " x" + " 3" + " = " + table_3 + "<br>");
    var table_4 = table_value * 4;
    document.write(table_value + " x" + " 4" + " = " + table_4 + "<br>");
    var table_5 = table_value * 5;
    document.write(table_value + " x" + " 5" + " = " + table_5 + "<br>");
    var table_6 = table_value * 6;
    document.write(table_value + " x" + " 6" + " = " + table_6 + "<br>");
    var table_7 = table_value * 7;
    document.write(table_value + " x" + " 7" + " = " + table_7 + "<br>");
    var table_8 = table_value * 8;
    document.write(table_value + " x" + " 8" + " = " + table_8 + "<br>");
    var table_9 = table_value * 9;
    document.write(table_value + " x" + " 9" + " = " + table_9 + "<br>");
    var table_10 = table_value * 10;
    document.write(table_value + " x" + " 10" + " = " + table_10 + "<br>");
    document.write(refresh);
}
// Q6
function c5ans6() {
    var cTemp = 25;
    var cToFahr = cTemp * 9 / 5 + 32;
    var message_1 = cTemp + "\xB0C is " + cToFahr + " \xB0F.";
    document.write(message_1 + "<br>");
    var fTemp = 70;
    var fToCel = (fTemp - 32) * 5 / 9;
    var message_2 = fTemp + '\xB0F is ' + fToCel + '\xB0C.';
    document.write(message_2 + "<br>");
    document.write(refresh);
}
// Q7
function c5ans7() {
    var item_1 = 650;
    var item_2 = 100;
    var quantity_2 = 3;
    var quantity_3 = 7;
    var shipping = 100;
    var item_total1 = item_1 * quantity_2;
    var item_total2 = item_2 * quantity_3;
    var item_total3 = item_total1 + item_total2 + shipping;
    document.write("Price of item 1 is " + item_1 + "<br>");
    document.write("Quantity of item 1 is " + quantity_2 + "<br>");
    document.write("Price of item 2 is " + item_2 + "<br>");
    document.write("Quantity of item 2 is " + quantity_3 + "<br>");
    document.write("Shipping Charges " + shipping + "<br>" + "<br>");
    document.write("Total cost of your order is " + item_total3 + "<br>");
    document.write(refresh);
}
// Q8
function c5ans8() {
    var marks_1 = 804;
    var marks_2 = 980;
    var percentage = marks_1 * 100;
    var percentage_2 = percentage / marks_2;
    document.write("Marks Sheet" + "<br>" + "<br>" + "<br>");
    document.write("Total Marks: " + marks_2 + "<br>");
    document.write("Marks Obtained: " + marks_1 + "<br>");
    document.write("Percentage: " + percentage_2 + "%" + "<br>");
    document.write(refresh);
}
// Q9
function c5ans9() {
    var dollar = 10;
    var riyal = 25;
    var rupee_in_dollar = 104.80;
    var rupee_in_riyal = 28;
    var convert_Total = (dollar * rupee_in_dollar) + riyal * rupee_in_riyal;
    document.write("Currency in PKR" + "<br>" + "<br>" + "<br>");
    document.write("Total currrency in PKR: " + convert_Total + "<br>");
    document.write(refresh);
}
// Q10
var Initial_2 = (5 * 10) / 2;
// Q11
function c5ans11() {
    var current_year = 2020;
    var birth_year = 1999;
    var age_2 = current_year - birth_year;
    document.write("Age Calculator" + "<br>" + "<br>");
    document.write("Current Year: " + current_year + "<br>");
    document.write("Birth Year: " + birth_year + "<br>");
    document.write("Your Age is: " + age_2 + "<br>");
    document.write(refresh);
}
// Q12
function c5ans12() {
    var radius = 20;
    var cir_cum = radius * 2 * Math.PI;
    var are_a = radius * radius * Math.PI;
    document.write("The Geometrizer" + "<br>" + "<br>");
    document.write("Radius of a circle: " + radius + "<br>");
    document.write("The circumference is: " + cir_cum + "<br>");
    document.write("The area is: " + are_a + "<br>");
    document.write(refresh);
}
// Q13
function c5ans13() {
    var fav_snack = ("chocolate chip");
    var current_age = 15;
    var max_age = 65;
    var daily_eat = 3;
    var age_rem = max_age - current_age;
    var life_eat = daily_eat * 365;
    var sub_total = age_rem * life_eat;
    document.write("The lifetime supply calculator" + "<br>" + "<br>");
    document.write("Favourite Snack: " + fav_snack + "<br>");
    document.write("Current Age: " + current_age + "<br>");
    document.write("Estimated Maximum Age: " + max_age + "<br>");
    document.write("Amount of snack per day: " + daily_eat + "<br>");
    document.write("You will need " + sub_total + fav_snack + " to last you untill the ripe old age of " + max_age + "<br>");
    document.write(refresh);
}
// Chapter#6 to 9
// Q1
function c6_9ans1() {
    var a_value = +prompt("Write any number:");
    document.write("Result:" + "<br>" + "The value of a is: " + a_value + "<br>" + "<br>");
    var increament_4 = ++a_value;
    document.write("The value of ++a is: " + increament_4 + "<br>" + "The value of a is: " + increament_4 + "<br>" + "<br>");
    var increament_5 = increament_4++;
    document.write("The value of a++ is: " + increament_5 + "<br>" + "The value of a is: " + increament_4 + "<br>" + "<br>");
    var decreament_4 = --increament_4;
    document.write("The value of a-- is: " + decreament_4 + "<br>" + "The value of a is: " + decreament_4 + "<br>" + "<br>");
    var decreament_5 = decreament_4--;
    document.write("The value of --a is: " + decreament_5 + "<br>" + "The value of a is: " + decreament_4 + "<br>");
    document.write(refresh);
}
// Q2
function c6_9ans2() {
    var a = 2, b = 1;
    document.write("a is " + a + "<br>");
    document.write("b is " + b + "<br>");
    // var decrea_1 = --a;
    // var decrea_2 = --a - --b;
    // var decrea_3 = --a - --b + ++b;
    var Result_2 = --a - --b + ++b + b--;
    document.write("Result is " + Result_2 + "<br>");
    document.write(refresh);
}
// Q3
function c6_9ans3() {
    var take_user_name = prompt("Your Good Name");
    alert("Welcome " + take_user_name);
}
// Q4
function c6_9ans4() {
    var user_num = +prompt("Enter Number");
    if (user_num) {
        for (var no = 1; no <= 10; no++) {
            document.write(user_num + " x " + no + " = " + user_num * no + "<br>")
        }
    }
    else {
        for (var no = 1; no <= 10; no++) {
            document.write("5" + " x " + no + " = " + "5" * no + "<br>")
        }
    }
    document.write(refresh);
}
// Q6






// Chapter#9 to 11
// Q1
function c9_11ans1() {
    var city = prompt("Enter your city name:");
    if (city === "karachi") {
        alert("Welcome to city of lights");
    }
    else {
        alert("Welcome to " + city);
    }
}
// Q2
function c9_11ans2() {
    var Gender = prompt("Gender:\nmale or female");
    if (Gender == "male") {
        alert("Good Morning Sir.");
    }
    else if (Gender == "female") {
        alert("Good Morning Ma'am.");
    }
    else {
        alert("Enter Gender male or female.");
    }
}
// Q3
function c9_11ans3() {
    var color = prompt("Enter traffic signal color:\nRed,Yellow or Green\nOnly One");
    if (color == "Red") {
        alert("Must Stop.");
    }
    else if (color == "Yellow") {
        alert("Ready to Move.");
    }
    else if (color == "Green") {
        alert("Move Now.");
    }
    else {
        alert("You didn't enter Traffic signal color");
    }
}
// Q4
function c9_11ans4() {
    var car_fuel = +prompt("How Many Remaining Fuel In Your Car?\nOnly Enter Number.");
    if (car_fuel < 0.25) {
        alert("Please Refill the fuel in your car.");
    }
    else {
        alert("Nothing to worry for refill the fuel in your car.")
    }
}
// Q5
function c9_11ans5_a() {
    var a = 4;
    if (++a === 5) {
        alert("given condition for variable a is true");
    }
    // dispaly
}
function c9_11ans5_b() {
    var bob = 82;
    if (bob++ === 83) {
        alert("given condition for variable b is true");
    }
    // not display
}
function c9_11ans5_c() {
    var coo = 12;
    if (coo++ === 13) {
        alert("condition 1 is true");
    }
    if (coo === 13) {
        alert("condition 2 is true");
    }
    if (++coo < 14) {
        alert("condition 3 is true");
    }
    if (coo === 14) {
        alert("condition 4 is true");
    }
    // display only condition 2 and 4
}
function c9_11ans5_d() {
    var materialCost = 20000;
    var laborCost = 2000;
    var totalCost = materialCost + laborCost;
    if (totalCost === laborCost + materialCost) {
        alert("The cost equals");
    }
    // display
}
function c9_11ans5_e() {
    if (true) {
        alert("True");
    }
    if (false) {
        alert("False");
    }
    // display only true
}
function c9_11ans5_f() {
    if ("car" < "cat") {
        alert("car is smaller than cat");
    }
    // display
}
// Q6
function c9_11ans6() {
    var subject_1 = +prompt("1)Math\nEnter Your Marks:");
    var subject_2 = +prompt("2)English\nEnter Your Marks:");
    var subject_3 = +prompt("3)Chemistry\nEnter Your Marks:");
    var marks_obtained = subject_1 + subject_2 + subject_3;
    var total_marks = 300;
    if (marks_obtained > total_marks) {
        alert("Your Entrance Marks is above");
    }
    else {
        var percentage_1 = marks_obtained * 100;
        var percentage_2 = percentage_1 / total_marks;
        document.write("Marks Sheet" + "<br>" + "<br>");
        document.write("Total marks : " + total_marks + "<br>");
        document.write("Marks obtained : " + marks_obtained + "<br>");
        document.write("Percentage : " + percentage_2 + "<br>");
        if (percentage_2 >= 80) {
            document.write("Grade : A-one" + "<br>");
            document.write("Remarks : Excellent." + "<br>");
            document.write(refresh);
        }
        else if (percentage_2 >= 70) {
            document.write("Grade : A" + "<br>");
            document.write("Remarks : Good." + "<br>");
            document.write(refresh);
        }
        else if (percentage_2 >= 60) {
            document.write("Grade : b" + "<br>");
            document.write("Remarks : You Need To Improve." + "<br>");
            document.write(refresh);
        }
        else if (percentage_2 < 60) {
            document.write("Grade : Fail" + "<br>");
            document.write("Remarks : Sorry." + "<br>");
            document.write(refresh);
        }
    }
}
// Q7
function c9_11ans7() {
    var secret_num = 7;
    var guess_num = +prompt("Enter Any Number:\nFrom 1 to 10");
    if (guess_num == secret_num) {
        alert("Bingo! Correct Answer.")
    }
    else if (guess_num == ++secret_num) {
        alert("Close enough to the correct answer.")
    }
    else {
        alert("Incorrect Answer.")
    }
}
// Q8
function c9_11ans8() {
    var div_num = +prompt("Enter Number:");
    if (div_num % 3 == 0) {
        alert("Your Given Number Is Divisible By 3")
    }
    else {
        alert("Your Given Number Is Not Divisible By 3")
    }
}
// Q9
function c9_11ans9() {
    var even_odd = +prompt("Enter Number:");
    if (even_odd % 2 == 0) {
        alert("Your Given Number Is Even");
    }
    else {
        alert("Your Given Number Is Odd");
    }
}
// Q10
function c9_11ans10() {
    var temperature = +prompt("What is Temperature Outside:");
    if (temperature >= 40) {
        alert("It is too hot outside.");
    }
    else if (temperature >= 30) {
        alert("The weather today is normal.");
    }
    else if (temperature >= 20) {
        alert("Today's weather is cool.");
    }
    else if (temperature >= 10) {
        alert("OMG! Today's weather is so cool.");
    }
}
// Q11
function c9_11ans11() {
    var cal_num1 = +prompt("Enter First Value For Calculate:");
    var cal_opt = prompt("Enter Operator For Calculate:\nOnly = +,-,*,or %");
    var cal_num2 = +prompt("Enter Second Value For Calculate:");
    if (cal_opt === "+") {
        alert(cal_num1 + cal_num2);
    }
    else if (cal_opt === "-") {
        alert(cal_num1 - cal_num2);
    }
    else if (cal_opt === "*") {
        alert(cal_num1 * cal_num2);
    }
    else if (cal_opt === "%") {
        alert(cal_num1 % cal_num2);
    }
}
// Chapter#12 to 13
// Q1
// var char_1 = +prompt("Enter Number Or Alphabet:");
// if (char_1 >= 65 && char_1 <= 90) {
//     alert("Input is a Uppercase.");
// }
// // else if (char >= 97 && char <= 122) {
// //     alert("Input is a Lowercase.")
// // }
// // else if (char >= 48 && char <= 57) {
// //     alert("Input is a Number.")
// // }
// // else {
// //     alert("Input is a Incorrect.")
// // }
// Q2
function c12_13ans2() {
    var int_1 = +prompt("Enter Value One:");
    var int_2 = +prompt("Enter Value Two:");
    if (int_1 >= int_2) {
        alert(int_1 + " is larger")
    }
    else if (int_1 <= int_2) {
        alert(int_2 + " is larger")
    }
}
// Q3
function c12_13ans3() {
    var int_1 = +prompt("Enter Number");
    if (int_1 > 0) {
        alert("Given Number Is Positive.")
    }
    else if (int_1 < 0) {
        alert("Given Number Is Negative.")
    }
    else {
        alert("Given Number Is Zero.")
    }
}
// Q4
// var str_1 = prompt("Enter Any Word:");
// var vowel = ["a", "e", "i", "o", "u"];
// for (str_1 = 0; str_1 < str_1.length; str_1++) {
//     for (vowel = 0; vowel < vowel.length; vowel++) {
//         if (str_1 === vowel) {
//             alert("abs")
//             // return true
//         }
//         else {
//             alert("loi")
//             // return false
//         }
//     }
// }
// Q5
function c12_13ans5() {
    var take_pass = prompt("Enter Password:");
    var pass_1 = "abdul0987";
    if (take_pass == "") {
        alert("Please enter your password.")
    }
    else if (take_pass == pass_1) {
        alert("Correct! The password you entered matches the original password.")
    }
    else if (take_pass != pass_1) {
        alert("Incorrect password.");
    }
}
// Q6
function c12_13ans6() {
    var greeting_1 = "Good day";
    var greeting_2 = "Good evening";
    var hour = 13;
    if (hour < 18) {
        alert(greeting_1);
    }
    else {
        alert(greeting_2)
    }
}
// Q7





// Chapter#14 to 16
// Q1
var student_name = [];
// Q2
var student_name_2 = [{}];
// Q3
var string_array = ["moiz"];
// Q4
var num_array = [12345];
// Q5
function c14_16ans5() {
    var bool_arr = [];
    var value = 2;
    for (var i = 0; i < value; i++) {
        bool_arr.push(false);
    }
    alert(bool_arr);
}
// Q6
function c14_16ans6() {
    var mixed_arr = ["moiz", "zubair"];
    var mixed_arr_2 = [
        { moiz: "1", zubair: "2" }
    ]
    var string_array = ["moiz"];
    var num_array = [12345];
    var bool_arr = [];
    var value = 2;
    for (var i = 0; i < value; i++) {
        bool_arr.push(false);
    }
    alert(bool_arr);
}
// Q7
function c14_16ans7() {
    var education = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.Phil", "PhD"];
    document.write("Qualifications:" + "<br>" + "<br>");
    for (var i = 0; i < education.length; i++) {
        document.write(i + ") " + education[i] + "<br>");
    }
    document.write(refresh);
}
// Q8
function c14_16ans8() {
    var student_name = ["Michael", "John", "Tony"];
    var score = ["320", "230", "480"];
    var total_marks = 500;
    for (var i = 0; i < student_name.length; i++) {
        for (var j = 0; j < score.length; j++) {
            var percentage = (score[j] * 100) / total_marks;
            document.write("Score of " + student_name[i] + " is " + score[j] + ".Percentage: " + percentage + "%" + "<br>");
        }
    }
}
// Q9




// Q10
function c14_16ans10() {
    var score_student = ["320", "230", "480", "120"];
    document.write("Scores of students: " + score_student + "<br>");
    var order_score = score_student.sort();
    document.write("Ordered scores of students: " + order_score + "<br>");
    document.write(refresh);
}
// Q11
function c14_16ans11() {
    var cities_list = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
    document.write("Cities List:" + "<br>" + cities_list + "<br>" + "<br>");
    var list_slice = cities_list.slice(2, 4);
    document.write("Selected Cities List:" + "<br>" + list_slice + "<br>");
    document.write(refresh)
}
// Q12
function c14_16ans12() {
    var my_arr = ["This", "is", "my", "cat"];
    document.write("Array" + "<br>" + my_arr + "<br>" + "<br>");
    var my_arr_1 = my_arr.join(" ");
    document.write("String" + "<br>" + my_arr_1 + "<br>");
    document.write(refresh);
}
// Q13
function c14_16ans13() {
    var device = ["Keyboard", "mouse", "printer", "monitor"];
    document.write("Devices:" + "<br>" + device + "<br>" + "<br>")
    for (var i = 0; i < device.length; i++) {
        document.write("Out:" + "<br>" + device[i] + "<br>");
    }
    document.write(refresh);
}
// Q14
function c14_16ans14() {
    var device = ["Keyboard", "mouse", "printer", "monitor"];
    document.write("Devices:" + "<br>" + device + "<br>" + "<br>")
    device.reverse();
    for (var i = 0; i < device.length; i++) {
        document.write("Out:" + "<br>" + device[i] + "<br>");
    }
    document.write(refresh);
}
// Chapter#17 to 20
// Q1
// var multi_arr = [[""],[""]];
// Q2
function c17_20ans2() {
    var multi_arr2 = [["0 1 2 3"], ["1 0 1 2"], ["2 1 0 1"],];
    var slice_1 = multi_arr2.slice(0, 1);
    var slice_2 = multi_arr2.slice(1, 2);
    var slice_3 = multi_arr2.slice(2, 3);
    document.write(slice_1 + "<br>");
    document.write(slice_2 + "<br>");
    document.write(slice_3 + "<br>");
    document.write(refresh);
}
// Q3
function c17_20ans3() {
    for (var i = 1; i <= 10; i++) {
        document.write(i + "<br>");
    }
    document.write(refresh);
}
// Q4
function c17_20ans4() {
    var num1 = +prompt("Enter a number to show its multiplication table");
    var num2 = +prompt("Enter length multiplication table");
    document.write("Multiplication table of " + num1 + "<br>" + "Length " + num2 + "<br>" + "<br>");
    for (var i = 1; i <= num2; i++) {
        document.write(num1 + " x " + i + " = " + num1 * i + "<br>");
    }
    document.write(refresh)
}
// Q5
function c17_20ans5() {
    var fruits = ["Apple", "Banana", "Mango", "Orange", "Strawberry"];
    for (var i = 0; i < fruits.length; i++) {
        document.write(fruits[i] + "<br>");
    }
    document.write("<br>");
    for (var j = 0; j < fruits.length; j++) {
        document.write("Element at index " + j + " is " + fruits[j] + "<br>")
    }
    document.write(refresh);
}
// Q6
function c17_20ans6() {
    document.write("Counting:" + "<br>");
    for (var i = 1; i <= 15; i++) {
        document.write(i + ",")
    }
    document.write("<br>" + "Reverse Counting:" + "<br>");
    for (var j = 10; j >= 1; j--) {
        document.write(j + ",");
    }
    document.write("<br>" + "Even:" + "<br>");
    for (var k = 0; k <= 20; k = k + 2) {
        document.write(k + ",");
    }
    document.write("<br>" + "Odd:" + "<br>");
    for (var h = 1; h <= 20; h = h + 2) {
        document.write(h + ",");
    }
    document.write("<br>" + "Series:" + "<br>");
    for (var t = 2; t <= 20; t = t + 2) {
        document.write(t + "k" + ",");
    }
    document.write(refresh);
}
// Q7
function c17_20ans7() {
    var user = prompt("Welcome to ABC Bakery.What do you want to order sir/ma'am?");
    var item = ["cake", "apple pie", "cookie", "chips", "patties"];
    var matchFound = "no";
    for (var i = 0; i < item.length; i++) {
        if (item[i] === user) {
            matchFound = "yes";
            document.write(user + " is available at index " + i + " in our Bakery.");
        }
    }
    if (matchFound === "no") {
        document.write("We are sorry." + user + " is not available in our Bakery.");
    }
    document.write("<br>" + refresh);
}
// Q8
function c17_20ans8() {
    var a = [24, 53, 78, 91, 12];
    var max = Math.max.apply(null, a);
    document.write("Array items: " + a + "<br>");
    document.write("The Largest Number is " + max + "<br>");
    document.write(refresh);
}
// Q9
function c17_20ans9() {
    var a = [24, 53, 78, 91, 12];
    var min = Math.min.apply(null, a);
    document.write("Array items: " + a + "<br>");
    document.write("The Smallest Number is " + min + "<br>");
    document.write(refresh);
}
// Q10
function c17_20ans10() {
    for (var i = 5; i <= 100; i = i + 5) {
        document.write(i + ",");
    }
    document.write("<br>" + refresh);
}