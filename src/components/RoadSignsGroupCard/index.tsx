import styles from "./road-signs-group-card.module.scss";
import { A } from "@solidjs/router";

interface RoadSignsGroupCardProps {
  title: string;
  imageAndRoute: string;
}

export default function RoadSignsGroupCard(props: RoadSignsGroupCardProps) {
  return (
    <A href={props.imageAndRoute}>
      <div class={styles.card__wrapper}>
        <img class={styles.card__image} src={`/${props.imageAndRoute}.png`} alt="Road signs group" />
        <p class={styles.card__title}>{props.title}</p>
        <div class={styles["card__icon-wrapper"]}>
          <div class={styles.card__icon}></div>
        </div>
      </div>
    </A>
  )
}
