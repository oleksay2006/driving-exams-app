import HomeCard from "@/components/HomeCard";
import { For } from "solid-js";
import styles from "./home.module.scss";

export default function Home() {
  const homeCards = [
    {
      title: "Practice Questions",
      icon: "practice",
      color: "#4378DB",
      route: "practice-questions"
    },
    {
      title: "Test",
      icon: "test",
      color: "#FDCD55",
      route: "test"
    },
    {
      title: "Дорожні знаки",
      icon: "road",
      color: "#28A164",
      route: "road-signs"
    },
    {
      title: "Study",
      icon: "study",
      color: "#F35555",
      route: "study"
    },
    {
      title: "Test History",
      icon: "history",
      color: "#F38E55",
      route: "test-history"
    }
  ];

  return (
    <div class={styles.page__wrapper}>
      <div class={styles.page__container}>
        <For each={homeCards}>
          {(card) => {
            return (
              <HomeCard title={card.title} icon={card.icon} color={card.color} route={card.route} />
            );
          }}
        </For>
      </div>
    </div>
  )
}
