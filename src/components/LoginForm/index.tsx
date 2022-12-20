import { useState, FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { FormDataType } from '../../interfaces/FormData';
import { ErrorMessage } from '../ErrorMessage';
import { FormButton } from '../FormButton';
import { Input } from '../Input';
import { Label } from '../Label';
import { LoadingScreen } from '../LoadingScreen';
import { userAuthService } from '../../services/userAuthService';


export const LoginForm = () => {

  const { loginUser, loading, error } = userAuthService();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const data: FormDataType = {
      email,
      password,
    }

    loginUser(data);
  }


  return (
    <form onSubmit={handleSubmit}>
      {loading && <LoadingScreen />}
      <Label label="E-mail">
        <Input
          type="text"
          value={email}
          setState={setEmail}
          placeholder="example@provider.com"
          required={true}
        />
      </Label>
      <Label label="Password">
        <Input
          type="password"
          value={password}
          setState={setPassword}
          placeholder="xxxxxxxx"
          required={true}
        />
      </Label>
      {error && <ErrorMessage message={error} />}
      <div className="form-actions">
        <Link to="/register">don't have an account?</Link>
        <FormButton>Login</FormButton>
      </div>
    </form>
  );
}