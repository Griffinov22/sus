import { use } from "react";
import { useUsers } from "./useUsers";

const Page = () => {
  const users = use(useUsers());

  return (
    <div>
      <h1>Welcome to the page</h1>
      <ul>
        <div>
          {users.map((u, ind) => (
            <li key={ind}>{u.name}</li>
          ))}
        </div>
      </ul>
    </div>
  );
};
export default Page;
