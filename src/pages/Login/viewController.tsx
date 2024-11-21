import { signInWithGoogle } from "../../firebase/firebase";
import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const loginViewController = () => {
  const auth = getAuth();
  const [isLogging, setIsLogging] = useState<boolean>(false);
  const [user, setUser] = useState<any>();

  const checkUserLoggedIn = () => {
    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          setIsLogging(true);
          setUser(user);
        } else {
          setIsLogging(false);
        }
      });

      return () => unsubscribe();
    }, []);
  };

  checkUserLoggedIn();

  return { signInWithGoogle, checkUserLoggedIn, isLogging, setIsLogging, user };
};

export default loginViewController;
