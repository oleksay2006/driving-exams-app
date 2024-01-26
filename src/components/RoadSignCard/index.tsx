import { createEventDispatcher } from "@solid-primitives/event-dispatcher";
import styles from "./road-sign-card.module.scss";
import { Sign } from "@/types/entities/Sign";

interface RoadSignCardProps {
  title: string;
  image: string;
  description: string;
  onClickEvent: (evt: CustomEvent<Sign>) => void;
}

export default function RoadSignCard(props: RoadSignCardProps) {
  const dispatch = createEventDispatcher(props);

  const dispatchClickEvent = () => {
    return dispatch("clickEvent", {
      title: props.title,
      image: props.image,
      description: props.description
    });
  };

  return (
    <div
      onClick={() => dispatchClickEvent()}
      class={styles.card__wrapper}
    >
      <img class={styles.card__image} src={props.image} alt={`${props.title} sign`} />
      <p class={styles.card__title}>{props.title}</p>
      <div class={styles["card__empty-block"]}></div>
    </div>
  )
}
