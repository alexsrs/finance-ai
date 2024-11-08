import { UserButton } from "@clerk/nextjs";
const HomePage = () => {
  return (
    <div className="itens-center flex h-full justify-center">
      <UserButton showName />
    </div>
  );
};

export default HomePage;
