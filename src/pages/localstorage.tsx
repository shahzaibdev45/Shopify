import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Trash } from "lucide-react";
import React from "react";
const Home = () => {
  const [user, setUser] = React.useState({ name: "" });
  const [users, setUsers] = React.useState<any[]>([]);
  React.useEffect(() => {
    const data = localStorage.getItem("users");
    if (data) {
      setUsers(JSON.parse(data));
    }
  }, []);
  React.useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);
  function storeData() {
    if (!user.name.trim()) return;
    setUsers((prevUsers) => [...prevUsers, user]);
    setUser({ name: "" });
  }
  function removeUser(key: number) {
    setUsers((prevUsers) => prevUsers.filter((_, index) => index !== key));
  }
  return (
    <div className="h-screen max-w-2xl mx-auto p-10">
      <Input
        placeholder="Enter your name"
        onChange={(e) => setUser({ name: e.target.value })}
        value={user.name}
      />
      <Button onClick={storeData} className="mt-4">
        Save
      </Button>
      {users.map((item, key) => (
        <div
          key={key}
          className="rounded-xl bg-neutral-500 flex justify-between items-center p-2 mt-4"
        >
          <p className="text-white text-2xl">
            {item.name} {item.fatherName}{" "}
          </p>
          <Button variant="destructive" onClick={() => removeUser(key)}>
            <Trash />
          </Button>
        </div>
      ))}
    </div>
  );
};
export default Home;
