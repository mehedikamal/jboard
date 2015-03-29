<?php include('includes/header.php'); ?>

		<div class="jumbotron text-center">
			<h1>Just a heading</h1>
			<p class="lead">Gimmicky marketing content</p>
			<p>
			  <?php echo HTML::decode(HTML::link('/create-posting','Post now for $100 <small>(30 days)</small>', array('class' => 'btn btn-lg btn-default center-block', 'role' => 'button'))); ?>
			</p>
			<div class="row marketing"></div>
			<div class="row marketing">
				<div class="col-lg-12">
					<p class="text-center">Jobs postings go here</p>
				</div>
			</div>
		</div>

<?php include('includes/footer.php'); ?>
