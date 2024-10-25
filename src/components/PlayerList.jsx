/* eslint-disable react/prop-types */
import { useState } from "react";
import PlayerCard from "./PlayerCard";
import SelectedPlayer from "./SelectedPlayer";

const PlayerList = ({ data, coin, setCoin }) => {
  const [buttonValue, setButtonValue] = useState("available");
  const [player, setPlayer] = useState([]);

  const handleAvailable = (e) => {
    setButtonValue(e.target.value);
  };

  const handleSelected = (e) => {
    setButtonValue(e.target.value);
  };

  return (
    <div className="mt-12 mb-32 lg:mb-48 pb-48">
      <div className="flex items-center justify-between px-2">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold">
            {buttonValue === "available"
              ? "Available Players"
              : `Selected Player(${player.length}/6)`}
          </h1>
        </div>
        <div
          className="flex text-lg font-semibold  text-gray-600
        "
        >
          <button
            onClick={handleAvailable}
            value="available"
            className={`rounded-lg border-r-transparent border py-1 px-4 ${
              buttonValue === "available" ? "bg-[#D4E927]" : "bg-white"
            } rounded-r-none`}
          >
            Available
          </button>
          <button
            onClick={handleSelected}
            value="selected"
            className={`rounded-lg ${
              buttonValue === "selected" ? "bg-[#D4E927]" : ""
            } rounded-l-none  border py-1 px-4`}
          >
            Selected({player.length})
          </button>
        </div>
      </div>

      <div>
        {buttonValue === "available" ? (
          <PlayerCard
            data={data}
            setPlayer={setPlayer}
            player={player}
            coin={coin}
            setCoin={setCoin}
          />
        ) : (
          <>
            <SelectedPlayer
              player={player}
              setPlayer={setPlayer}
              setButtonValue={setButtonValue}
            />
          </>
        )}
      </div>
    </div>
  );
};
export default PlayerList;
