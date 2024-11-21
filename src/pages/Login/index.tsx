import { logout } from "../../firebase/firebase";
import loginViewController from "./viewController";

const Login = () => {
  const viewController = loginViewController();

  console.log(viewController.isLogging);
  console.log(viewController.user);

  return (
    <div>
      <p>Login</p>
      {viewController.isLogging ? (
        <button onClick={() => logout()}>Deslogar</button>
      ) : (
        <button onClick={() => viewController.signInWithGoogle()}>
          Logar com Google
        </button>
      )}
    </div>
  );
};

export default Login;
