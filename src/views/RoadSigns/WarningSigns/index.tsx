import SignsSection from "@/components/SignsSection";

export default function WarningSigns() {
  const warningSigns = [
    {
      title: "Небезпечний поворот праворуч",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/UA_road_sign_1.1.svg/120px-UA_road_sign_1.1.svg.png",
      description: "Знак попереджає про заокруглення дороги радіусом менше 500 м поза населеними пунктами і менше 150 м — у населених пунктах або про заокруглення з обмеженою оглядовістю.\n" +
        "\n" +
        "Знак установлюється поза населеними пунктами на відстані 150–300 м, у населених пунктах — на відстані 50–100 м до початку небезпечної ділянки. У разі потреби знак встановлюється і на іншій відстані, яка зазначається на табличці"
    },
    {
      title: "Небезпечний поворот ліворуч",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/UA_road_sign_1.2.svg/120px-UA_road_sign_1.2.svg.png",
      description: "Знак попереджає про заокруглення дороги радіусом менше 500 м поза населеними пунктами і менше 150 м — у населених пунктах або про заокруглення з обмеженою оглядовістю.\n" +
        "\n" +
        "Знак установлюється поза населеними пунктами на відстані 150–300 м, у населених пунктах — на відстані 50–100 м до початку небезпечної ділянки. У разі потреби знак встановлюється і на іншій відстані, яка зазначається на табличці"
    },
    {
      title: "Декілька поворотів з першим поворотом праворуч",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/UA_road_sign_1.3.1.svg/120px-UA_road_sign_1.3.1.svg.png",
      description: "Знак позначає ділянку дороги з двома і більше розташованими один за одним небезпечними поворотами, з першим поворотом праворуч.\n" +
        "\n" +
        "Знак установлюється поза населеними пунктами на відстані 150–300 м, у населених пунктах — на відстані 50–100 м до початку небезпечної ділянки. У разі потреби знак встановлюється і на іншій відстані, яка зазначається на табличці"
    },
    {
      title: "Декілька поворотів з першим поворотом ліворуч",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/UA_road_sign_1.3.2.svg/120px-UA_road_sign_1.3.2.svg.png",
      description: "Знак позначає ділянку дороги з двома і більше розташованими один за одним небезпечними поворотами, з першим поворотом ліворуч.\n" +
        "\n" +
        "Знак установлюється поза населеними пунктами на відстані 150–300 м, у населених пунктах — на відстані 50–100 м до початку небезпечної ділянки. У разі потреби знак встановлюється і на іншій відстані, яка зазначається на табличці"
    },
    {
      title: "Звуження дороги з обох боків",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Ukraine_road_sign_1.5.1.svg/120px-Ukraine_road_sign_1.5.1.svg.png",
      description: "Знак попереджає про звуження дороги з обох сторін"
    },
    {
      title: "Звуження дороги з правого боку",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Ukraine_road_sign_1.5.2.svg/120px-Ukraine_road_sign_1.5.2.svg.png",
      description: "Знак попереджає про звуження дороги з правого боку"
    },
    {
      title: "Звуження дороги з лівого боку",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Ukraine_road_sign_1.5.3.svg/120px-Ukraine_road_sign_1.5.3.svg.png",
      description: "Знак попереджає про звуження дороги з лівого боку"
    },
    {
      title: "Крутий підйом",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/UA_road_sign_1.6.svg/120px-UA_road_sign_1.6.svg.png",
      description: "Знак попереджає про наближення до підйому"
    },
    {
      title: "Крутий спуск",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Ukraine_road_sign_1.7.svg/120px-Ukraine_road_sign_1.7.svg.png",
      description: "Знак попереджає про наближення до спуску"
    },
    {
      title: "Виїзд на набережну або берег",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/UA_road_sign_1.8.svg/120px-UA_road_sign_1.8.svg.png",
      description: "Знак попереджає про виїзд на берег водойми, у тому числі на поромну переправу"
    },
    {
      title: "Тунель",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/UA_road_sign_1.9.svg/120px-UA_road_sign_1.9.svg.png",
      description: "Знак попереджає про наближення до тунелю, що не має штучного освітлення, оглядовість в’їзного порталу якої обмежена і на під’їздах до якої звужена проїзна частина"
    },
    {
      title: "Нерівна дорога",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Ukraine_road_sign_1.10.svg/120px-Ukraine_road_sign_1.10.svg.png",
      description: "Знак встановлюється перед ділянкою дороги, що має нерівності проїзної частини — хвилястості, напливи, спучування"
    },
    {
      title: "Пагорб",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Ukraine_road_sign_1.11.svg/120px-Ukraine_road_sign_1.11.svg.png",
      description: "Знак встановлюється перед ділянкою дороги з буграми, напливами чи не плавним стикуванням конструкцій мостів. Знак також може застосовуватися перед штучно створюваними буграми у місцях, де необхідно примусово обмежити швидкість руху транспортних засобів (небезпечні виїзди з прилеглих територій, місця з інтенсивним рухом дітей через дорогу тощо)."
    },
    {
      title: "Вибоїна",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Ukraine_road_sign_1.12.svg/120px-Ukraine_road_sign_1.12.svg.png",
      description: "Знак встановлюється за наявності на ділянках доріг вибоїн, просідань дорожнього покриття, розміри яких перевищують допустимі значення згідно з ДСТУ 3587. Знак \"Вибоїна\" рекомендовано застосовувати спільно зі знаком \"Обмеження максимальної швидкості до 50 км/год\" ."
    },
    {
      title: "Слизька дорога",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Ukraine_road_sign_1.13.svg/120px-Ukraine_road_sign_1.13.svg.png",
      description: "Знак попереджає, що попереду ділянка дороги з підвищеною слизькістю проїзної частини"
    },
    {
      title: "Викидання кам’яних матеріалів",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Ukraine_road_sign_1.14.svg/120px-Ukraine_road_sign_1.14.svg.png",
      description: "Попереджає, що попереду ділянка дороги, на якій можливе викидання гравію, щебеню тощо з-під коліс транспортних засобів.\n" +
        "\n" +
        "Знак — тимчасовий і встановлюється на період, необхідний для виконання відповідних робіт на дорозі"
    },
    {
      title: "Небезпечне узбіччя",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Ukraine_road_sign_1.15.svg/120px-Ukraine_road_sign_1.15.svg.png",
      description: "Попереджає про підвищене, занижене, зруйноване узбіччям або узбіччя, на якому виконуються ремонтні роботи.\n" +
        "\n" +
        "Знак — тимчасовий і встановлюється на період, необхідний для виконання відповідних робіт на дорозі"
    },
    {
      title: "Падіння каміння",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Ukraine_road_sign_1.16.svg/120px-Ukraine_road_sign_1.16.svg.png",
      description: "Попереджає, що переду ділянка дороги, на якій можуть бути падіння каміння, обвали, зсуви"
    },
    {
      title: "Боковий вітер",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Ukraine_road_sign_1.17.svg/120px-Ukraine_road_sign_1.17.svg.png",
      description: "Встановлюється перед ділянками доріг, що проходять через гірські перевали, високі насипи, мости, шляхопроводи, вздовж урвищ та річок тощо, на яких можливий сильний боковий вітер або його раптові пориви"
    },
    {
      title: "Низьколітаючі літаки",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Ukraine_road_sign_1.18.svg/120px-Ukraine_road_sign_1.18.svg.png",
      description: "Встановлюється перед ділянкою дороги, яка проходить поблизу аеродрому або над якою літаки чи вертольоти пролітають на невеликій висоті"
    },
    {
      title: "Перехрещення з рухом по колу",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Ukraine_road_sign_1.19.svg/120px-Ukraine_road_sign_1.19.svg.png",
      description: "Установлюється поза населеними пунктами на відстані 150–300 м, у населених пунктах — на відстані 50–100 м до початку небезпечної ділянки. У разі потреби знак встановлюється і на іншій відстані, яка зазначається на табличці"
    },
    {
      title: "Перехрещення з трамвайною колією",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Ukraine_road_sign_1.20.svg/120px-Ukraine_road_sign_1.20.svg.png",
      description: "Встановлюється в місці перетинання дороги з трамвайною колією на перехресті з обмеженою оглядовістю чи поза ним"
    },
    {
      title: "Перехрещення рівнозначних доріг",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Ukraine_road_sign_1.21.svg/120px-Ukraine_road_sign_1.21.svg.png",
      description: "Установлюється поза населеними пунктами на відстані 150–300 м, у населених пунктах — на відстані 50–100 м до початку небезпечної ділянки. У разі потреби знак встановлюється і на іншій відстані, яка зазначається на табличці"
    },
    {
      title: "Перехрещення з другорядною дорогою",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Ukraine_road_sign_1.22.svg/120px-Ukraine_road_sign_1.22.svg.png",
      description: "Установлюється поза населеними пунктами на відстані 150–300 м, у населених пунктах — на відстані 50–100 м до початку небезпечної ділянки. У разі потреби знак встановлюється і на іншій відстані, яка зазначається на табличці"
    },
    {
      title: "Прилягання другорядної дороги з правого боку",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/UA_road_sign_1.23.1.svg/120px-UA_road_sign_1.23.1.svg.png",
      description: "Знак попереджає про прилягання другорядної дороги з правого боку. Зображення прилягань відповідає реальній конфігурації перехрестя"
    },
    {
      title: "Прилягання другорядної дороги з лівого боку",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/UA_road_sign_1.23.2.svg/120px-UA_road_sign_1.23.2.svg.png",
      description: "Знак попереджає про прилягання другорядної дороги з лівого боку. Зображення прилягань відповідає реальній конфігурації перехрестя"
    },
    {
      title: "Прилягання другорядної дороги з правого і лівого боку",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Ukraine_road_sign_1.23.3.svg/120px-Ukraine_road_sign_1.23.3.svg.png",
      description: "Знак попереджає про прилягання другорядної дороги з правого і лівого боку. Зображення прилягань відповідає реальній конфігурації перехрестя"
    },
    {
      title: "Прилягання другорядної дороги з лівого і правого боку",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Ukraine_road_sign_1.23.4.svg/120px-Ukraine_road_sign_1.23.4.svg.png",
      description: "Знак попереджає про прилягання другорядної дороги з лівого і правого боку. Зображення прилягань відповідає реальній конфігурації перехрестя"
    },
    {
      title: "Світлофорне регулювання",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/UA_road_sign_1.24.svg/120px-UA_road_sign_1.24.svg.png",
      description: "Знак установлюється перед перехрестям, пішохідним переходом або ділянкою дороги, рух на якій регулюється світлофором.\n" +
        "\n" +
        "Згідно ДСТУ 4100:2021 знак потрібно встановлювати поза населеними пунктами перед кожним перехрестям, пішохідним переходом або ділянкою дороги, рух на яких регулює світлофор, у населених пунктах — якщо відстань видимості сигналів світлофора становить менше ніж 100 м, а також перед першим після в’їзду до населеного пункту перехрестям або пішохідним переходом зі світлофорним регулюванням"
    },
    {
      title: "Розвідний міст",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Ukraine_road_sign_1.25.svg/120px-Ukraine_road_sign_1.25.svg.png",
      description: "Знак попереджає про наближення до розвідного моста"
    },
    {
      title: "Двосторонній рух",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Ukraine_road_sign_1.26.svg/120px-Ukraine_road_sign_1.26.svg.png",
      description: "Знак установлюється на початку ділянки дороги (проїзної частини) із зустрічним рухом після одностороннього поза населеними пунктами на відстані 150–300 м, у населених пунктах — на відстані 50–100 м до початку небезпечної ділянки.\n" +
        "\n" +
        "У разі потреби знак встановлюється і на іншій відстані, яка зазначається на табличці"
    },
    {
      title: "Залізничний переїзд зі шлагбаумом",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Ukraine_road_sign_1.27.svg/1024px-Ukraine_road_sign_1.27.svg.png",
      description: "Знак установлюється поза населеними пунктами на відстані 150–300 м, у населених пунктах — на відстані 50–100 м до початку небезпечної ділянки. У разі потреби знак встановлюється і на іншій відстані, яка зазначається на табличці.\n" +
        "\n" +
        "Поза населеними пунктами знак повторюється. Наступний знак встановлюється на відстані щонайменше 50 м до початку небезпечної ділянки"
    },
    {
      title: "Залізничний переїзд без шлагбаума",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/UA_road_sign_1.28.svg/1024px-UA_road_sign_1.28.svg.png",
      description: "Знак установлюється поза населеними пунктами на відстані 150–300 м, у населених пунктах — на відстані 50–100 м до початку небезпечної ділянки. У разі потреби знак встановлюється і на іншій відстані, яка зазначається на табличці.\n" +
        "\n" +
        "Поза населеними пунктами знак повторюється. Наступний знак встановлюється на відстані щонайменше 50 м до початку небезпечної ділянки"
    }
  ];

  return (
    <SignsSection signsList={warningSigns} />
  )
}
