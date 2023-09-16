import { ProfileCard } from "@/app/components/ProfileCard";

const IMAGE_URL =
  "https://assets.about.me/background/users/p/a/v/pavan_k_1445966641_04.jpg";

export default function Home() {
  return (
    <main className="flex flex-row">
      <div className="basis-1/2 bg-cover h-screen bg-[url('https://assets.about.me/background/users/p/a/v/pavan_k_1445966641_04.jpg')]"></div>
      <div className="flex flex-col basis-1/2 px-10">
        <ProfileCard />
        {/* <div>
          <h2>My Work</h2>
        </div> */}
      </div>
    </main>
  );
}
