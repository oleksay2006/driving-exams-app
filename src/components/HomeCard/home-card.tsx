import "./home-card.scss";

interface HomeCardProps {
  title: string;
  icon: string;
  color: string;
}

export default function HomeCard(props: HomeCardProps) {
  return (
    <div class="card__wrapper">
      <div class="card__first-part">
        <div class="card__block" style={`background-color: ${props.color};`}>
          <div class={`card__block--${props.icon}`}></div>
        </div>
        <p class="card__title" style={`color: ${props.color};`}>{props.title}</p>
      </div>
      <div class="card__chevron"></div>
    </div>
  )
}
