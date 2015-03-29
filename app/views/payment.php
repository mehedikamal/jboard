<?php
//require_once 'header.php';

/*
$clientToken = Braintree_ClientToken::generate(array(
    "customerId" => $aCustomerId
));
*/
//$clientToken = Braintree_ClientToken::generate();
?>

<!-- <form id="checkout" method="post" action="/checkout">
  <div id="dropin"></div>
  <input type="submit" value="Pay $10">
</form>

<script src="https://js.braintreegateway.com/v2/braintree.js"></script> -->

<!--// <script>
//   braintree.setup(
//     "<?php //echo $clientToken; ?>",
//     'dropin', {
//       container: 'dropin'
//     });
// </script>-->


<!doctype html>
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
		<h1>Payment Page</h1>

		<?php
			echo 'payment';
		?>
	</div>
</body>
</html>
