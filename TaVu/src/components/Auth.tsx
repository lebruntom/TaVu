import React, { useContext, useRef, useState } from "react";
import { auth } from "../utils/firebase.config";
import { UserContext } from "../context/UserContext";
import { signOut } from "firebase/auth";

export default function Auth() {
  const { user } = useContext(UserContext);

  const loginEmail = React.useRef<HTMLInputElement>(null);
  const loginPassword = useRef<HTMLInputElement>(null);
  const [error, setError] = useState(false);

  const handleLogout = async () => {
    await signOut(auth);
  };

  const handleLogin = async (e: any) => {
    e.preventDefault();

    try {
      await auth.signInWithEmailAndPassword(
        loginEmail.current!.value,
        loginPassword.current!.value
      );
      setError(false);
      console.log("reussi");
    } catch (error) {
      setError(true);
      console.log("echec");
    }
    (document.getElementById("form-connexion") as HTMLFormElement).reset();
  };

  return (
    <div>
      {user && <li onClick={() => handleLogout()}>deco</li>}
      <form
        id="form-connexion"
        className="form-connexion"
        onSubmit={(e) => handleLogin(e)}
      >
        <input ref={loginEmail} type="text" placeholder="Email" required />
        <input
          type="password"
          placeholder="Password"
          required
          ref={loginPassword}
        />
        <input type="submit" value="Se connecter" className="btn-connexion" />
      </form>
    </div>
  );
}
