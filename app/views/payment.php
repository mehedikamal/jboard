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
<?php include('includes/header.php'); ?>

	<div class="welcome">
		<a href="http://laravel.com" title="Laravel PHP Framework">

		</a>
		<h1>Payment Page</h1>

		<?php
			echo 'payment';
		?>
	</div>

<?php include('includes/footer.php'); ?>
