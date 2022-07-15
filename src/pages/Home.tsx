import { useAuthStore } from "../store/Store";

const Home = () => {
  const loggedIn = useAuthStore((state: { loggedIn: any }) => state.loggedIn);
  return (
    <div>
      <div>Home page</div>
      <button onClick={() => loggedIn({ loggedIn: false })}>Logout</button>
    </div>
  );
};

export default Home;
