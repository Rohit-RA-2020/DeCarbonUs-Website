import Layout from "../src/Layout/Layout";
import SignIn from "../src/Components/SignInPageComponents/SignIn";
import SignUp from "../src/Components/SignInPageComponents/SignUp";
const LoginPage = () => {
  return (
    <Layout>
      <SignUp key="auth"/>
      {/* <SignUp key="signUp"/> */}
    </Layout>
  );
};
export default LoginPage;
