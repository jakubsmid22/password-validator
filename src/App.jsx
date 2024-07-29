import { useState } from "react";
import validator from "validator";

const App = () => {
  const [message, setMessage] = useState("");
  const [password, setPassword] = useState("");
  const [isStrong, setIsStrong] = useState(false);

  const validate = (password) => {
    const options = {
      minLength: 8,
      minLowercase: 1,
      minUppercase: 1,
      minNumbers: 1,
      minSymbols: 1,
      returnScore: false,
    };

    const strength = validator.isStrongPassword(password, options);
    setIsStrong(strength);

    if (password.length > 0) {
      setMessage(`${password} ${strength ? "is a" : "is not a"} strong password`);
    } else {
      setMessage("");
    }
  };

  return (
    <main>
      <h1>Password Validator</h1>
      <div className="input-container">
        <label htmlFor="password">Enter a password</label>
        <input
          type="text"
          id="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            validate(e.target.value);
          }}
        />
      </div>
      <p className={`${isStrong && 'strong'}`} >{message}</p>
    </main>
  );
};

export default App;
