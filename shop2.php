<?php
  include('shop2.html');
?>

<?php
if (isset($_POST['sumtotal'])){
 ini_set("display_errors", "1"); error_reporting(E_ALL);
 $mysqli = new mysqli('127.0.0.1', 'root', '', 'shop');
 if ($mysqli -> connect_errno) {
   echo "Failed to connect to MySQL: " . $mysqli -> connect_error;
   exit();
 }

 $cost = $_POST['sumtotal'];
 $paid = 5000;

 $stmt = $mysqli -> prepare("INSERT INTO `records`(`cost`, `paid`) VALUES(?, ?)");

    $stmt->bind_param('ss', $cost, $paid);
    if (!$stmt->execute()){
        die("Error on statement 1 ".$mysqli->error);
     }else{
         echo "<script>
         
         var tr =	window.prompt('Enter the amount you paid', 0);
         <form method = 'post' action = shop2.php>
            <input type=hidden name = 'paid' value = tr />
        </form>
        //  if(tr<Tsum){
        //      alert('Transaction failed, Insufficient amount')
        //  }
        //  else{
        //       alert('Transaction recorded. Thank you');
        //  }
         </script>";
     }
     echo $_POST['paid'];
    }
    
 ?>