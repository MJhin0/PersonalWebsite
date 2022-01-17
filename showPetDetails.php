<?php include 'header.php'; ?>
<?php
if($_SERVER["REQUEST_METHOD"]=="GET") {
  
  $name=$_GET["name"];
  $type = $_GET["type"];
  $image = $_GET["image"];
}
  ?>
<table>
      <caption>Pet Info</caption>
      <tr>
        <td>Name</td>    
        <td><?php echo "$name"?></td> 
      </tr>
      <tr>
        <td>Pet Type</td>    
        <td><?php echo "$type"?></td> 
      </tr>
      <tr>
        <td>Image</td>    
        <td style="height:200px;width:100px;"><?php echo "<img src=" . $image . ">" ; ?></td> 
      </tr>
    </table>
    <p><a href="cutestPets.php">Back</a>
    
</main>       
</body>
</html>