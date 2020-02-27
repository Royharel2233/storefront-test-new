import React from "react";

function NewsLetterSignUp() {
  return (
    <div className="col-lg-3">
      <div className="form-group">
        <label htmlFor="email">Sign up for our newsletter</label>
        <div className="input-group mb-3">
          <input type="text" className="form-control" placeholder="E-mail" />
          <div className="input-group-append">
            <button className="btn btn-subscribe" type="submit">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  )
};
export default NewsLetterSignUp;
