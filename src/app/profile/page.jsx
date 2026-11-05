import { redirect } from "next/navigation";
import { CalendarDays } from "lucide-react";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

const ProfilePage = async () => {
  //

  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const user = session.user;

  const createdAt = user?.createdAt ? new Date(user.createdAt) : null;
  const memberSince = createdAt
    ? createdAt.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : null;

  return (
    <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          My <span className="text-[#C89B5A]">Profile</span>
        </h1>

        <p className="mt-1 text-sm text-muted-foreground">
          Your personal details at BookNook.
        </p>
      </div>

      {/* Profile Card */}
      <div className="mx-auto max-w-2xl rounded-2xl border border-[#E8E4DC] bg-card p-8 shadow-sm">
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-center">
          {/* Avatar */}
          <div className="flex h-20 w-20 shrink-0 items-center justify-center overflow-hidden rounded-full bg-[#C89B5A]/15 text-2xl font-bold text-[#C89B5A] shadow-sm">
            {user?.image ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                referrerPolicy="no-referrer"
                src={user.image}
                alt={user?.name}
                className="h-20 w-20 object-cover"
              />
            ) : (
              user?.name?.charAt(0)
            )}
          </div>

          <div className="text-center sm:text-left">
            <h2 className="text-xl font-semibold text-foreground">
              {user?.name}
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">{user?.email}</p>

            {memberSince && (
              <p className="mt-2 inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                <CalendarDays className="h-3.5 w-3.5 text-[#C89B5A]" />
                Member since {memberSince}
              </p>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProfilePage;
