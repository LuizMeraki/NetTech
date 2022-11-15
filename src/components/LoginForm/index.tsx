import { useState, FormEvent } from 'react';
import { Link } from 'react-router-dom';


export const LoginForm = () => {

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }


  return (
    <form onSubmit={handleSubmit}>
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
        <label htmlFor="password">Password <span>*</span></label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="########"
          required
        />
      </div>
      <div className="form-actions">
        <Link className="blue-text" to="/register">don't have an account?</Link>
        <Link className="blue-text" to="/">forgot your password?</Link>
        <button type="submit" className="blue-fill">Login</button>
      </div>
    </form>
  );
}