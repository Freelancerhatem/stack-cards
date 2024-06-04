import { useState, useEffect } from "react";
import Card from "./Card/Card";

const CardContainer = () => {
  const icon =
    "https://w7.pngwing.com/pngs/308/74/png-transparent-computer-icons-setting-icon-cdr-svg-setting-icon.png";
  const cardsData = [
    {
      title: "powdur",
      name: "Lachlan Brown",
      gradientColors: ["#ff6347", "#00ced1", "#ffd700", "#8a2be2"],
    },
    {
      title: "KAVHOLM",
      name: "Lachlan Brown",
      gradientColors: ["#ff7f50", "#6495ed", "#32cd32", "#ff1493"],
    },
    {
      title: "ROCKET RIDES",
      name: "Lachlan Brown",
      gradientColors: ["#ff69b4", "#3cb371", "#ffff00", "#9370db"],
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const gap = 60;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % cardsData.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [cardsData.length]);

  return (
    <div className="grid grid-cols-2 items-center justify-center min-h-screen ">
      <div>
        <h1 className="text-6xl">
          Access to carefully crafted materials authored by examiners
        </h1>
      </div>
      <div className="relative flex  justify-center h-[60%]">
        <div className="relative w-full h-full">
          <img className="w-6 absolute left-0" src={icon} alt="" />
          <svg className="timeline absolute w-full h-full">
            <path
              className="path"
              d="M10 20 L10 100 Q10 150 60 150 L100 150 "
            />
          </svg>
          <img className="w-6 absolute right-0" src={icon} alt="" />
          <svg className="timeline absolute h-full right-0">
            <path className="path" d="M290 20 L290 100 Q290 150 240 150 " />
          </svg>
        </div>

        <div className="absolute  w-full h-full rotate-180">
          <img className="w-6 absolute left-0" src={icon} alt="" />
          <svg className="timeline absolute  w-full h-full">
            <path className="path" d="M10 20 L10 100 Q10 150 60 150 L100 150" />
          </svg>
          <img className="w-6 absolute right-0" src={icon} alt="" />
          <svg className=" absolute h-full   right-0">
            <path
              className="path"
              d="M290 20 L290 100 Q290 150 240 150 L200 150"
            />
          </svg>
        </div>

        {cardsData.map((card, index) => {
          const gradient = `linear-gradient(to right, ${card.gradientColors.join(
            ", "
          )})`;
          let zIndex, translateY, transition;

          if (index === currentIndex) {
            transition = "transform 0.5s ease";
            translateY = -2 * gap;
            zIndex = 10;
          } else if (
            index === currentIndex - 1 ||
            (currentIndex === 0 && index === cardsData.length - 1)
          ) {
            translateY = -gap;
            zIndex = 20;
          } else if (
            index === currentIndex - 2 ||
            (currentIndex === 1 && index === cardsData.length - 1) ||
            (currentIndex === 0 && index === cardsData.length - 2)
          ) {
            translateY = 0;

            zIndex = 30;
          } else {
            translateY = 0;

            zIndex = -1;
          }

          return (
            <div
              key={index}
              className="absolute transition-all duration-1000 ease-in-out"
              style={{
                transform: `translateY(${translateY}px)`,
                top: "50%",
                zIndex,
                transition,
                background: gradient,
                animation: "wave-animation 2s infinite",
                backgroundSize: "400% 100%",
              }}
            >
              <Card title={card.title} name={card.name} style={card.style} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CardContainer;
