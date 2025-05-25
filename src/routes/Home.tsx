import MyCounter from "../components/MyCounter";
import MyForm from "../components/MyForm";
import UserData from "../components/UserData";
import { AuthContext, AuthProvider } from "@/contexts/auth";

function Home() {
  return (
    <main>
      <AuthProvider>
        <UserData />
        <MyForm />
        <MyCounter />
      </AuthProvider>
    </main>
  );
}

export default Home;
