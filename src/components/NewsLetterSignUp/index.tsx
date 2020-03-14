import React from "react";

function NewsLetterSignUp() {
  return (
    <div className="">
      <div className="form-group">
        <label htmlFor="email">Sign up for our newsletter</label>
        <div className="input-group mb-3">
          <div className="d-flex">
            <div className="w-100">
              <input
                type="text"
                className="form-control"
                placeholder="E-mail"
              />
            </div>
            <div className="input-group-append flex-fill w-25">
              <button className="btn btn-subscribe " type="submit">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default NewsLetterSignUp;
