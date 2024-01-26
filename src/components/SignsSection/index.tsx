import RoadSignCard from "@/components/RoadSignCard";
import SignModal from "@/components/SignModal";
import { createSignal, For } from "solid-js";
import { Sign } from "@/types/entities/Sign";

interface SignsSectionProps {
  signsList: Sign[];
}

export default function SignsSection(props: SignsSectionProps) {
  const [isOpenSignModal, setIsOpenSignModal] = createSignal<boolean>(false);
  const [modalInfo, setModalInfo] = createSignal<Sign>();

  const openSignModal = (evt: CustomEvent<Sign>) => {
    setIsOpenSignModal(true);
    setModalInfo(evt.detail);
  };

  return (
    <>
      <For each={props.signsList}>
        {(sign) => {
          return (
            <RoadSignCard onClickEvent={openSignModal} title={sign.title} image={sign.image} description={sign.description} />
          );
        }}
      </For>
      <SignModal
        isOpen={isOpenSignModal()}
        title={modalInfo()?.title}
        image={modalInfo()?.image}
        description={modalInfo()?.description}
        onCloseEvent={setIsOpenSignModal(false)}
      ></SignModal>
    </>
  )
}
