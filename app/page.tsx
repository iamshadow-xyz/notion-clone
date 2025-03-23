import { auth } from "@/auth";
import SignIn from "@/components/sign-in";
import SignOut from "@/components/sign-out";
import { db } from "@/lib/supabase/db";
import { posts } from "@/lib/supabase/schema";

export default async function Home() {
  const session = await auth();
  const user = session?.user;
  const post = await db.select().from(posts).where({
    authorId = session?.user?.id || "",
  });
  console.log(post);
  return (
    <div>
      <div>
        <h1>Hello {user?.name}</h1>
      </div>
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
