import { useState } from "react";
import Card from "../../components/Card";

const Home = () => {
  const [currentConsume, setCurrentConsume] = useState(0);
  const [consumeGoal, setConsumeGoal] = useState(3000);
  const ConsumeTypesCard = () => {
    const consumeTypes = [
      {
        name: "Copo",
        size: "300ml",
        value: 300,
      },
      {
        name: "Copo",
        size: "500ml",
        value: 500,
      },
      {
        name: "Garrafa",
        size: "500ml",
        value: 500,
      },
      {
        name: "Garrafa",
        size: "1L",
        value: 1000,
      },
      {
        name: "Garrafa",
        size: "2L",
        value: 2000,
      },
    ];
    return (
      <Card>
        <div className="grid grid-flow-row grid-cols-3 gap-3">
          {consumeTypes.map((item, index) => (
            <div
              key={index}
              onClick={() => setCurrentConsume(currentConsume + item.value)}
              className="flex flex-col items-center justify-center bg-gray-300 border border-gray-600 rounded-lg p-3"
            >
              <span>
                {item.name} ({item.size})
              </span>
            </div>
          ))}
        </div>
      </Card>
    );
  };

  const CurrentConsumeCard = ({ value, goal }) => {
    const percentage = Math.min((value / goal) * 100, 100);
    return (
      <Card>
        <div className="flex flex-col items-center justify-center  p-3 w-full">
          <span className="mb-2 text-sm font-medium">
            {value}ml / {goal}ml
          </span>
          <div
            className={`w-full bg-gray-200 ${
              percentage > 90 ? "animate-pulse" : ""
            } rounded-full h-4 overflow-hidden`}
          >
            <div
              className={`${
                percentage >= 100 ? "bg-green-500" : "bg-blue-500"
              } h-full transition-all duration-300`}
              style={{ width: `${percentage}%` }}
            ></div>
          </div>
        </div>
      </Card>
    );
  };

  const isFirstTime = false;
  const WelcomeCard = () => {
    return (
      <Card title={"Bem-vindo"}>
        <p className="mb-3">Está sua primeira vez por aqui.</p>
        <p>
          Você sabia que beber água pode aumentar seu nível de atenção e
          concentração em até 30%!
        </p>
      </Card>
    );
  };

  return (
    <div className="w-full h-fit px-2 py-4">
      {isFirstTime ? <WelcomeCard /> : ""}
      <ConsumeTypesCard />
      <CurrentConsumeCard value={currentConsume} goal={consumeGoal} />
    </div>
  );
};

export default Home;
