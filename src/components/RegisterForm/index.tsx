import { Link } from "react-router-dom";
import { useState, FormEvent } from "react";
import { useRegister } from "../../hooks/useRegister";
import { ErrorMessage } from "../ErrorMessage/";
import { IFormData } from '../../interfaces/FormData';
import { Input } from "../Input";
import { FormButton } from "../FormButton";
import { LoadingScreen } from "../LoadingScreen";


export const RegisterForm = () => {

  const { registerUser, loading, error } = useRegister();

  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const data: IFormData = {
      username,
      email,
      password,
    }

    registerUser(data, confirmPassword);
  }


  return (
    <form onSubmit={handleSubmit}>
      {loading && <LoadingScreen />}
      <Input
        label="Username"
        htmlFor="username"
        className="input-with-label"
        type="text"
        value={username}
        setState={setUsername}
        placeholder="Your name"
        required={true}
      />
      <Input
        label="E-mail"
        htmlFor="email"
        className="input-with-label"
        type="email"
        value={email}
        setState={setEmail}
        placeholder="example@provider.com"
        required={true}
      />
      <Input
        label="Create password"
        htmlFor="create-password"
        className="input-with-label"
        type="password"
        value={password}
        setState={setPassword}
        placeholder="xxxxxxxx"
        required={true}
      />
      <Input
        label="Confirm password"
        htmlFor="confirm-password"
        className="input-with-label"
        type="password"
        value={confirmPassword}
        setState={setConfirmPassword}
        placeholder="xxxxxxxx"
        required={true}
      />
      {error && <ErrorMessage message={error} />}
      <div className="form-actions">
        <Link to="/login">Already have an account?</Link>
        <FormButton text="Create account" />
      </div>
    </form>
  );
}