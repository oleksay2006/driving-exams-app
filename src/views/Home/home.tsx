import HomeCard from "@/components/HomeCard/home-card";
import { For } from "solid-js";
import "./home.scss";

export default function Home() {
  const homeCards = [
    {
      title: "Practice Questions",
      icon: "practice",
      color: "#4378DB"
    },
    {
      title: "Test",
      icon: "test",
      color: "#FDCD55"
    },
    {
      title: "Road Signs",
      icon: "road",
      color: "#28A164"
    },
    {
      title: "Study",
      icon: "study",
      color: "#F35555"
    },
    {
      title: "Test History",
      icon: "history",
      color: "#F38E55"
    }
  ];

  return (
    <div class="page__wrapper">
      <h1 class="page__title">Driving License Exams App</h1>
      <div class="page__container">
        <For each={homeCards}>
          {(card) => {
            return (
              <HomeCard title={card.title} icon={card.icon} color={card.color} />
            );
          }}
        </For>
      </div>
    </div>
  )
}
