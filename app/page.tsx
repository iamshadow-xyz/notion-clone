import { auth } from "@/auth";
import SignIn from "@/components/sign-in";
import SignOut from "@/components/sign-out";

export default async function Home() {
  const session = await auth();
  const user = session?.user;
  return (
    <div>
      <div>
        <h1>{user?.name}</h1>
      </div>
      {user ? (
        <div>
          {" "}
          <h1>Hello {user.name}</h1> <SignOut />{" "}
        </div>
      ) : (
        <SignIn />
      )}
    </div>
  );
}
