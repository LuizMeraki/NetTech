import { useState, FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { useLogin } from '../../hooks/useLogin';
import { IFormData } from '../../interfaces/FormData';
import { ErrorMessage } from '../ErrorMessage';
import { FormButton } from '../FormButton';
import { Input } from '../Input';
import { LoadingScreen } from '../LoadingScreen';


export const LoginForm = () => {

  const { loginUser, loading, error } = useLogin();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const data: IFormData = {
      email,
      password
    }

    loginUser(data);

    setEmail("");
    setPassword("");
  }


  return (
    <form onSubmit={handleSubmit}>
      {loading && <LoadingScreen />}
      <Input
        label="E-mail"
        type="text"
        value={email}
        setState={setEmail}
        placeholder="example@provider.com"
        required={true}
      />
      <Input
        label="Password"
        type="password"
        value={password}
        setState={setPassword}
        placeholder="xxxxxxxx"
        required={true}
      />
      {error &&
        <ErrorMessage message={error} />
      }
      <div className="form-actions">
        <Link className="blue-text" to="/register">don't have an account?</Link>
        <FormButton text="Login" />
      </div>
    </form>
  );
}