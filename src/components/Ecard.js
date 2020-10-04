import React from 'react';
import { Fragment } from 'react';
import classes from './Ecard.module.css'
import { Button } from 'react-bootstrap';

function Ecard() {
  return (
    <Fragment>

      <div className={classes.card}>
        <img src="https://dummyimage.com/600x400/000/fff&text=Plumber+and+cook" alt="portrait2"></img>
        <div className={classes.content}>
          <h2>Name of person</h2>
          <h4>City,State </h4>
          <Button variant="success"> Phone no </Button>
        </div>
      </div>


    </Fragment>
  );
}

export default Ecard;



