import React , {useState} from "react";

const Contact = () => {

    const [data,setData] = useState({
        fullname:"",
        phone:"",
        email:"",
        password:"",
        msg:"",
    });


    const InputEvent = (event) =>{
        const {name,value} = event.target;
        setData((preVal)=>{
            return {
                ...preVal,
                [name]:value,
            }
        });

    }

    const formSubmit = (event) =>{
        event.preventDefault();
        alert(`my name is ${data.fullname}, my email is ${data.email}, my password is ${data.password} , my phone number is ${data.phone} , my message is ${data.msg}`);

        setData(
            {
                fullname:"",
                phone:"",
                email:"",
                password:"",
                msg:"",
            }
        );

    };

  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Contact Us</h1>
      </div>

      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={formSubmit}>
              <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  aria-describedby="emailHelp"
                  placeholder="Enter your name"
                  name="fullname"
                  value={data.fullname}
                  onChange={InputEvent}
                />
              </div>

              <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">
                  Phone
                </label>
                <input
                  type="tel"
                  className="form-control"
                  aria-describedby="emailHelp"
                  name="phone"
                  value={data.phone}
                  onChange={InputEvent}
                  placeholder="Enter your phone number"
                />
              </div>

              <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  aria-describedby="emailHelp"
                  name="email"
                  value={data.email}
                  onChange={InputEvent}
                  placeholder="name@example.com"
                />
              </div>

              <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  name="password"
                  value={data.password}
                  onChange={InputEvent}
                  placeholder = "Enter your password"
                />
              </div>

              <div className="mb-3">
                <label for="exampleFormControlTextarea1" className="form-label">
                  Message
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  name="msg"
                  value={data.msg}
                  onChange={InputEvent}
                ></textarea>
              </div>

              <button type="submit" className="btn btn-outline-primary" >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
