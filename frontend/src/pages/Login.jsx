import { useState, useEffect} from "react";
import { FaSignInAlt } from "react-icons/fa";

function Login() {
    const [formDate, setFormDate] = useState({
        email: '',
        password: '',
    })

    const { email, password } = formDate

    const onChange = (e) => {
        setFormDate((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const onSubmit = (e) => {
        e.preventDefault()
    }


    return<>
        <section className='heading'>
            <h1>
                <FaSignInAlt /> Login
            </h1>
            <p>
                Login and start setting goals
            </p>
        </section>
        <section className="form">
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        value={email}
                        placeholder="Enter your email"
                        onChange={onChange}
                    />
                </div>
                <div className="form-group">
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        name="password"
                        value={password}
                        placeholder="Create password"
                        onChange={onChange}
                    />
                </div>
                <div className="from-group">
                    <button type="submit" className="btn btn-block">Submit</button>
                </div>
            </form>
        </section>
    </>
}

export default Login