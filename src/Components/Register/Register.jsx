import { Link } from "react-router-dom";


const Register = () => {
    const handelRegister = e =>{
        e.preventDefault()
        const name = e.target.name.value;
        const email =e.target.email.value;
        const password= e.target.password.value;
        console.log(name, email, password);

    }
    return (
        <div className="hero bg-base-200 ">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-2xl font-bold">Register now!</h1>
           
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handelRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  
                  className="input input-bordered"
                  required
                />
              </div>
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
                
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
            </form>
            <p className="ml-4 mb-4 mr-4">
              Already have an account? Please <Link to="/login">login</Link>.
            </p>
          </div>
        </div>
      </div>
    );
};

export default Register;