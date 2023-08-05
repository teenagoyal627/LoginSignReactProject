import { useUserAuth } from "./Context/UserAuthContextProvider";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
const ProtectedRoute = ({ children }) => {
  const history = useHistory();
  let { user } = useUserAuth();

  if (!user) {
    return history.replace("/signup");
  }
  return children;
};
export default ProtectedRoute;
