import { useAuthStore } from "../store/Store";

const Home = () => {
  const loggedIn = useAuthStore((state: any) => state.loggedIn);
  return (
    <div>
      <div>Home</div>
      <button onClick={() => loggedIn({ loggedIn: false })}>Logout</button>
    </div>
  );
};

export default Home;
