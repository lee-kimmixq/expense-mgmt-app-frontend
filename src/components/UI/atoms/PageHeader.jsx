import React from "react";
// import axios from "axios";

export default function PageHeader ({pageTitle, customCss}) {

  const classes = `page-header animate__animated ${customCss}`
  return (
      <h1
       className={classes}
       >{pageTitle}</h1>
  );
}

