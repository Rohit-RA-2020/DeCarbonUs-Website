import Layout from "../src/Layout/Layout";
import SignIn from "../src/Components/SignInPageComponents/SignIn";
import SignUp from "../src/Components/SignInPageComponents/SignUp";
const LoginPage = () => {
  return (
    <Layout>
      <SignIn key="signIn"/>
      <SignUp key="signUp"/>
    </Layout>
  );
};
export default LoginPage;
