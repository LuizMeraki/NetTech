import { Link } from "react-router-dom";
import { useState, FormEvent } from 'react';


export const RegisterForm = () => {

  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [createPassword, setCreatePassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }


  return (
    <form onSubmit={handleSubmit}>
      <div className="input-container">
        <label htmlFor="username">Username <span>*</span></label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Your name"
          required
        />
      </div>
      <div className="input-container">
        <label htmlFor="email">E-mail <span>*</span></label>
        <input
          type="text"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="example@gmail.com"
          required
        />
      </div>
      <div className="input-container">
        <label htmlFor="create-password">Create Password <span>*</span></label>
        <input
          type="text"
          id="create-password"
          value={createPassword}
          onChange={(e) => setCreatePassword(e.target.value)}
          placeholder="########"
          required
        />
      </div>
      <div className="input-container">
        <label htmlFor="confirm-password">Confirm Password <span>*</span></label>
        <input
          type="text"
          id="confirm-password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="########"
          required
        />
      </div>
      <div className="form-actions">
        <Link className="blue-text" to="/login">Already have an account?</Link>
        <button type="submit" className="blue-fill">Create account</button>
      </div>
    </form>
  );
}