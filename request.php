<?php include('header.php'); ?>
    
  <section>
    <div class="container">
      <div class="row">
        <div id="page" class="col-xs-12">

          <form action="https://docs.google.com/a/125ocean.org/forms/d/1v99Bv9d3SXDnEqf6cpDvarePHBqC_Bl2DypNrYI9sRg/formResponse" method="POST" id="ss-form" target="_self" onsubmit="">

            <label for="entry_569690660">Issue Type</label>

            <div class="issue-list">
              <div class="issue btn btn-primary" data-type="Leak">
                Report a Leak
              </div>

              <div class="issue btn btn-primary" data-type="No hot water">
                No hot water
              </div>

              <div class="issue btn btn-primary" data-type="Heating Issue">
                Heating Issue
              </div>  
            </div>
            

            <!-- Issue Type: Leak -->
            <div class="radio">
              <label>
                <input type="radio" name="entry.510732652" value="Leak" id="group_510732652_1" role="radio" class="ss-q-radio" aria-label="Leak" required="" aria-required="true">
                Leak
              </label>
            </div>

            <!-- Issue Type: Hot Water -->
            <div class="radio">
              <label>
                <input type="radio" name="entry.510732652" value="No hot water" id="group_510732652_2" role="radio" class="ss-q-radio" aria-label="No hot water" required="" aria-required="true">
                No wot water
              </label>
            </div>

            <!-- Issue Type: Heating -->
            <div class="radio">
              <label>
                <input type="radio" name="entry.510732652" value="Heating Issue" id="group_510732652_3" role="radio" class="ss-q-radio" aria-label="Heating Issue" required="" aria-required="true">
                Heating Issue
              </label>
            </div>

            <!-- Issue Type: Laundry -->
            <div class="radio">
              <label>
                <input type="radio" name="entry.510732652" value="Laundry" role="radio" class="ss-q-radio" aria-label="Laundry" required="" aria-required="true">
                Laundry
              </label>
            </div>

            <!-- Issue Type: Trash & Recycling -->
            <div class="radio">
              <label>
                <input type="radio" name="entry.510732652" value="Trash &amp; Recycling" role="radio" class="ss-q-radio" aria-label="Trash &amp; Recycling" required="" aria-required="true">
                Trash &amp; Recycling
              </label>
            </div>

            <!-- Issue Type -->
            <input type="hidden" name="entry.510732652" jsname="L9xHkb" value="No hot water">

            <!-- Apartment # -->
            <div class="row">
              <div class="col-xs-3">
                <label for="entry.2099144889">Apt #</label>
                <select class="form-control" name="entry.2099144889" id="entry_2099144889" aria-label="Apt  " aria-required="true" required="">
                  <option value="">---</option>
                  <?php
                    foreach (range(1,6) as $flr) {
                      foreach (range('a','l') as $apt) {
                        echo '<option value="' . $flr . $apt . '">' . $flr . $apt . '</option>';
                      }
                    }
                  ?>
                </select>
              </div>
            </div>

            <input type="hidden" name="entry.2099144889" jsname="L9xHkb" value="4C">

            <!-- Name -->
            <div class="form-group">
              <label for="entry.1268545078">Name</label>
              <input type="text" name="entry.1268545078" value="" class="form-control" id="entry_1268545078" dir="auto" aria-label="Name" aria-required="true" required="" title="">
            </div>

            <!-- Email -->
            <div class="form-group">
              <label for="entry.1368288206">E-mail</label>
              <input type="text" name="entry.1368288206" value="" class="form-control" id="entry_1368288206" dir="auto" aria-label="Email  " title="">
            </div>          

            <!-- Phone -->
            <div class="form-group">
              <label for="entry.177226758">Phone</label>
              <input type="text" name="entry.177226758" value="" class="form-control" id="entry_177226758" dir="auto" aria-label="Phone" aria-required="true" required="" title="">
            </div>

            <!-- Description -->
            <div class="form-group">
              <label for="entry.332916460">Description</label>
              <textarea class="form-control" name="entry.332916460" id="entry_332916460" dir="auto" aria-label="Description"></textarea>
            </div>

            <input type="hidden" name="draftResponse" value="[,,&quot;2750708688624802910&quot;]
          ">
            <input type="hidden" name="pageHistory" value="0">
            <input type="hidden" name="fvv" value="0">
            <input type="hidden" name="fbzx" value="2750708688624802910">

            <input type="submit" name="submit" value="Submit" id="ss-submit" class="btn btn-primary">

          </form>
          
        </div>
      </div>
    </div>  
  </section>


<?php include('footer.php'); ?>