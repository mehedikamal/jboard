<?php
$servername = "localhost";
$username = "root";
$password = "";

$command = "composer install --prefer-dist";

echo "\n\nGet Composer Dependencies\n\n";


exec($command);

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

echo "\nConnected to MySQL\n";

$sql = "CREATE DATABASE noOfficeNeeded";

if ($conn->query($sql) === TRUE) {
    echo "\nDatabase created successfully\n";
} else {
    echo "Error creating database: " . $conn->error;
}

echo "\nSet up database tables & sample data\n";

$cmdMigrate = "php artisan migrate --force";

exec($cmdMigrate);

// $sql = "SELECT * FROM test";
// $result = $conn->query($sql);

// if ($result->num_rows > 0) {
//     // output data of each row
//     while($row = $result->fetch_assoc()) {
//         echo "id: " . $row["ID"]. " - Name: " . $row["name"]. " " . $row["phone"]. " " . $row["age"]. "\n";
//     }
// } else {
//     echo "0 results";
// }
$conn->close();
?>