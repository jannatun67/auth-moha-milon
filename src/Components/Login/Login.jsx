import { Link } from "react-router-dom";

const Login = () => {
    const handelLogin = e => {
        e.preventDefault();
        const Email = e.target.email.value
        const Password = e.target.password.value
        console.log(Email,Password);
    }
  return (
    <div className="hero bg-base-200 ">
      <div className="hero-content flex-col ">
        <div className="text-center lg:text-left">
          <h1 className="text-2xl font-bold">Login now!</h1>
         
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handelLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="Password"
                name="password"
                placeholder="Password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          <p className="ml-4 mb-4 mr-4">
            New to this website? Please <Link to="/register">Register</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
