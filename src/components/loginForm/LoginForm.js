import {TextField} from "@mui/material";
import {useState} from "react";

function LoginForm() {
    const [password, setPassword] = useState('');
    const [login, setLogin] = useState('');

    const handleChange = (e) => {
        switch (e.target.name) {
            case 'login': {
                setLogin(e.target.value)
                break;
            }

            case 'password': {
                setPassword(e.target.value)
                break;
            }
        }
    }

  return (
      <div>
        <TextField id="standard-basic" label="Login" name={'login'} variant="standard" value={login} onChange={handleChange} />
        <TextField id="standard-basic" label="Password" type={'password'} name={'password'} variant="standard" value={password} onChange={handleChange} />
      </div>
  );
}

export default LoginForm;
