import React from 'react';
import classes from './worker.module.css';

export default function EmployerForm() {
  return (
    <div  className={classes.back}>
      <form>
        <div class="form-group row">
          <label class="col-sm-2 col-form-label">Name</label>
          <div class="col-sm-10">
            <input type="Text" required class="form-control" id="inputEmail3" placeholder="Full Name" disabled />
          </div>
        </div>
        <div class="form-group row">
          <label class="col-sm-2 col-form-label">Phone No</label>
          <div class="col-sm-10">
            <input type="tel" class="form-control" id="inputPassword3" placeholder="Phone No" disabled />
          </div>
        </div>

        <div class="form-group row">
          <label class="col-sm-2 col-form-label">Gender</label>
          <div class="col-sm-10">
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
              <label class="form-check-label" for="inlineRadio1">Male</label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
              <label class="form-check-label" for="inlineRadio2">Female</label>
            </div>
          </div>

        </div>

        <div class="form-group row">
          <label class="col-sm-2 col-form-label">Address</label>
          <div class="col-sm-10">
            <input type="tel" class="form-control" id="inputPassword3" placeholder="Enter Address" />
          </div>
        </div>

        <div class="form-group row">
          <label class="col-sm-2 col-form-label">Aadhar Card No</label>
          <div class="col-sm-10">
            <input type="tel" class="form-control" id="inputPassword3" placeholder="Enter Aadhar Card No" />
          </div>
        </div>




        <div class="form-group row">
          <div class="col-sm-10">
            <button type="submit" class="btn btn-primary">Update Profile</button>
          </div>
        </div>
      </form>

    </div>
  )
}
