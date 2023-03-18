import React, { useState } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import Axios from "axios";

export default function Signup() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const toBackEnd = (e) => {
        e.preventDefault();

        Axios.post("http://localhost:8080/Signup", {
            name,
            email,
            password,
        }).then((res) => {
            alert(res.data.Message);
        });
    };

    return (
        <>
            <div className="container">
                <form action="">
                    <div>
                        <label htmlFor="name" className="form-label">
                            Name
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="name"
                            name="name"
                            autoComplete="OFF"
                            value={name}
                            onChange={(e) => {
                                setName(e.target.value);
                            }}
                            placeholder="Enter Name"
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">
                            {" "}
                            Email
                        </label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            name="email"
                            autoComplete="OFF"
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value);
                            }}
                            placeholder="Enter Email"
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">
                            Password
                        </label>
                        <input
                            type="password"
                            className="form-control"
                            name="password"
                            id="password"
                            autoComplete="OFF"
                            value={password}
                            onChange={(e) => {
                                setPassword(e.target.value);
                            }}
                            placeholder="Enter Password"
                        />
                    </div>

                    <button type="button" className="btn btn-primary" onClick={toBackEnd}>
                        Signup
                    </button>
                </form>

                <Link className="linkTag" to="/">
                    Already Have an account?
                </Link>

                {/* <Link to="/">signup</Link> */}
            </div>
        </>
    );
}
