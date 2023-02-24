
// import { NavLink } from "react-router-dom";

function Signup() {
  return (
    <>
      <div className="loader"></div>
      <div id="app">
        <section className="section">
          <div className="container mt-5">
            <div className="row">
              <div className="col-12 col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-8 offset-lg-2 col-xl-8 offset-xl-2">
                <div className="card card-primary">
                  <div className="card-header">
                    <h4>Add Vendor :-</h4>
                  </div>
                  <div className="card-body">
                    <form method="POST">
                    <div className="form-group">
                        <label htmlFor="business">Business Name</label>
                        <input
                          id="business"
                          type="text"
                          className="form-control"
                          name="business"
                        />
                      </div>
                      <div className="row">
                        <div className="form-group col-6">
                          <label htmlFor="b_name">Contact Person</label>
                          <input
                            id="b_name"
                            type="text"
                            className="form-control"
                            name="b_name"
                            autoFocus
                          />
                        </div>
                        <div className="form-group col-6">
                          <label htmlFor="last_name">Mobile No</label>
                          <input
                            id="last_name"
                            type="text"
                            className="form-control"
                            name="last_name"
                          />
                        </div>
                      </div>
                      <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                          id="email"
                          type="email"
                          className="form-control"
                          name="email"
                        />
                        <div className="invalid-feedback"></div>
                      </div>
                      <div className="form-group">
                        <label htmlFor="email">Address</label>
                        <input
                          id="address"
                          type="text"
                          className="form-control"
                          name="address"
                        />
                      </div>
                      <div className="row">
                        <div className="form-group col-6">
                          <label htmlFor="password" className="d-block">
                            Password
                          </label>
                          <input
                            id="password"
                            type="password"
                            className="form-control pwstrength"
                            data-indicator="pwindicator"
                            name="password"
                          />
                          <div id="pwindicator" className="pwindicator">
                            <div className="bar"></div>
                            <div className="label"></div>
                          </div>
                        </div>
                        <div className="form-group col-6">
                          <label htmlFor="password2" className="d-block">
                            Password Confirmation
                          </label>
                          <input
                            id="password2"
                            type="password"
                            className="form-control"
                            name="password-confirm"
                          />
                        </div>
                      </div>
                     
                      <div className="form-group">
                        <button
                          type="submit"
                          className="btn btn-primary btn-lg btn-block"
                        >
                          Register Vendor
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Signup;
