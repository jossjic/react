import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";

const users = [
  {
    name: "Miguel Ángel Durán",
    userName: "midudev",
    isFollowing: false,
  },
  {
    name: "Pablo Hernandez",
    userName: "elonmusk",
    isFollowing: false,
  },
  {
    name: "Rivers",
    userName: "samyriveratv",
    isFollowing: true,
  },
  {
    name: "John Smith",
    userName: "johnsmith123",
    isFollowing: true,
  },
  {
    name: "Maria Johnson",
    userName: "mariaj",
    isFollowing: false,
  },
  {
    name: "David Brown",
    userName: "davidb",
    isFollowing: true,
  },
];

const formatUserName = (userName) => `@${userName}`;
export function App() {
  return (
    <section className="App">
      {users.map(({ name, userName, isFollowing }) => (
        <TwitterFollowCard
          key={userName}
          userName={userName}
          initialIsFollowing={isFollowing}
          formatUserName={formatUserName}
        >
          {name}
        </TwitterFollowCard>
      ))}
    </section>
  );
}
