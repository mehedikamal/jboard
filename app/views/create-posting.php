<?php include('includes/header.php'); ?>

    <div class="jumbotron text-center">
      <?php echo Form::open(array('url' => '/preview-posting', 'class' => 'form-horizontal')) .
                 HTML::decode('<div class=\'form-group\'>') .
                 Form::label('title', 'Job Title', array('class' => 'col-sm-2')) .
                 HTML::decode('<div class=\'col-sm-10\'>') .
                 Form::text('title', null, array('placeholder' => 'Job Title', 'class' => 'form-control')) .

                 HTML::decode('</div></div><div class=\'form-group\'>') .
                 Form::label('company', 'Company Name', array('class' => 'col-sm-2')) .
                 HTML::decode('<div class=\'col-sm-10\'>') .
                 Form::text('company', null, array('placeholder' => 'Company Name', 'class' => 'form-control')) .
                 HTML::decode('</div></div><div class=\'form-group\'>') .

                 Form::label('category', 'Category', array('class' => 'col-sm-2')) .
                 HTML::decode('<div class=\'col-sm-3\'>') .
                 HTML::decode(Form::label('front-end developer', '<input type=\'radio\' name=\'front-end developer\'/> Front-end Developer')) .
                 HTML::decode('</div></div>') .
                 Form::close();  ?>
    </div>

<?php include('includes/footer.php'); ?>
