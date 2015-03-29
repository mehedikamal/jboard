<?php
// require_once 'header.php';
//
// $result = Braintree_Transaction::sale(array(
//     'amount' => '1000.00',
//     'creditCard' => array(
//         'number' => '5105105105105100',
//         'expirationDate' => '05/12'
//     )
// ));
//
// if ($result->success) {
//     print_r("success!: " . $result->transaction->id);
// } else if ($result->transaction) {
//     print_r("Error processing transaction:");
//     print_r("\n  code: " . $result->transaction->processorResponseCode);
//     print_r("\n  text: " . $result->transaction->processorResponseText);
// } else {
//     print_r("Validation errors: \n");
//     print_r($result->errors->deepAll());
// }

?>

<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Laravel PHP Framework</title>
	<style>
		@import url(//fonts.googleapis.com/css?family=Lato:700);

		body {
			margin:0;
			font-family:'Lato', sans-serif;
			text-align:center;
			color: #999;
		}

		.welcome {
			width: 300px;
			height: 200px;
			position: absolute;
			left: 50%;
			top: 50%;
			margin-left: -150px;
			margin-top: -100px;
		}

		a, a:visited {
			text-decoration:none;
		}

		h1 {
			font-size: 32px;
			margin: 16px 0 0 0;
		}
	</style>
</head>
<body>
	<div class="welcome">
		<a href="http://laravel.com" title="Laravel PHP Framework">

		</a>
		<h1>Checkout Page</h1>

		<?php
			echo 'checkout';
		?>
	</div>
</body>
</html>
