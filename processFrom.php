<?php include 'header.php'; ?>
<?php
if($_SERVER["REQUEST_METHOD"] == "POST") {
    echo "<h3>Output of post array<br></h3>";
    foreach($_POST as $key=>$value) {
        echo "key is $key and value is $value <br>";
    }
    $first_name = $_POST["fname"];
    $last_name = $_POST["lname"];
    $year = $_POST["year"];
}
?>
<h3>Use values in html document</h3>
<p><?php echo "$first_name $last_name is a $year 
    student at Villanova"; ?> </p>

<<?php
if($_SEVER["REQUEST_METHOD"] == "GET") {
    echo "<h3>Output of get array<br><h3>"
    foreach ($_GET as $key => $value) {
        echo "key is $key and value is $value <br>"
    }
}
?>