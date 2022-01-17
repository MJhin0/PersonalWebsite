<!-- We can include the navigation menu in a php file called
header.php and just include it in all html docs -->
<?php include 'header.php';?>
<?php

//we embed the php directly in the html using the <?php tag
//leave the tag open and close at bottom of php code
//this is called escaping to php
//let's print

echo 'hello world';
echo "<br>hello world";
//create a variable by prefixing name with $
$name_var = "kathleen";
//must use . instead of + to concatenate
echo '<br>hello ' . $name_var;
//or simply put variable name in statement
echo "<br>hello $name_var";
//must use double quotes to print the variable name
//notice single quote does not print value of variable
echo '<br>hello $name_var<br>';
/*Arrays can be either indexed or associative
* associative arrays are like maps in java, dictionaries
* in python */

$array = array(1,2,3,4,5);
//print array using normal loop or foreach loop
echo 'print array using for loop <br>';
for($n = 0; $n < count($array); $n++){ 
    echo $array[$n] . ","; 
} 
echo "<br>";
//in php arrays are associative 
$fav_foods = array("Ben"=>"ice cream", "Sam"=>"tacos", "Kelly"=>"sushi",
                    "Christina"=>"cereal", "Bella"=>"pizza");
foreach($fav_foods as $val) {
    echo $val . "<br>";
}

foreach($fav_foods as $key=>$val) {
    echo "$key 's favorit food is $val<br>";
}

foreach($_SERVER as $key=>$val) {
    echo "key is $key and val is $val<br>";
}