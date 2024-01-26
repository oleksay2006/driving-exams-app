import RoadSignsGroupCard from "@/components/RoadSignsGroupCard";
import styles from "./road-signs.module.scss";
import { For } from "solid-js";

export default function RoadSigns() {
  const roadSignsGroups = [
    {
      title: "Попереджувальні знаки",
      imageAndRoute: "warning-signs"
    },
    {
      title: "Знаки пріоритету",
      imageAndRoute: "priority-signs"
    },
    {
      title: "Forbidden signs",
      imageAndRoute: "forbidden-signs"
    },
    {
      title: "Marks of special regulations",
      imageAndRoute: "marks-of-special-regulations"
    },
    {
      title: "Information signs",
      imageAndRoute: "information-signs"
    },
    {
      title: "Additional information signs",
      imageAndRoute: "additional-information-signs"
    }
  ];

  return (
    <>
      <For each={roadSignsGroups}>
        {(group) => {
          return (
            <RoadSignsGroupCard title={group.title} imageAndRoute={group.imageAndRoute} />
          );
        }}
      </For>
    </>
  )
}
