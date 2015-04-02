<?php include('includes/header.php'); ?>

      <form action="/preview-posting" method="POST" class="form-horizontal">
        <div class="form-group">
          <label class="col-sm-2">Job Title</label>
          <div class="col-sm-10">
            <input type="text" placeholder="Job Title" class="form-control"/>
          </div>
        </div>
        <div class="form-group">
          <label class="col-sm-2">Company Name</label>
          <div class="col-sm-10">
            <input type="text" placeholder="Company Name" class="form-control"/>
          </div>
        </div>
        <div class="form-group">
          <div class="col-sm-3">
            <label>Front-end Developer</label>
            <input type="radio" name="front-end developer"/>
          </div>
        </div>
        <input type="hidden" name="_token" value="<?php echo csrf_token(); ?>">
        <button type="submit" class="btn btn-success">Post Now</button>
      </form>

<?php include('includes/footer.php'); ?>
