/* eslint-disable react/prop-types */
import { RxAvatar } from "react-icons/rx";
import { IoFlag } from "react-icons/io5";
import { Bounce, toast } from "react-toastify";

const PlayerCard = ({ data, setPlayer, player, coin, setCoin }) => {
  //console.log(data.players);

  const handleSelectPlayer = (newPlayer) => {
    if (coin < newPlayer.biddingPrice && player.length < 6) {
      toast.error("Not enough money to buy this player. Claim some Credit!", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }

    if (player.length < 6) {
      const playerExists = player.some(
        (p) => p.playerId === newPlayer.playerId
      );
      //console.log(playerExists);
      if (playerExists) {
        toast.error("Player already added in your squad!", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      }

      if (!playerExists && coin >= newPlayer.biddingPrice) {
        setPlayer((prev) => [...prev, newPlayer]);
        setCoin((prev) => prev - newPlayer.biddingPrice);
        toast.success(`Congrates!! ${newPlayer.name} is now in your squad.`, {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      }
    }
    if (player.length === 6) {
      toast.error("You can't select more than 6 players!", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }
  };

  console.log(player);

  return (
    <div className="mt-8 px-2">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.players.map((player) => (
          <div key={player.id} className="border rounded-xl p-4">
            <div>
              <img
                className="w-full h-[300px] rounded-lg object-cover"
                src={player.image}
                alt="player"
              />
            </div>
            <div
              className="mt-4
            "
            >
              <div className="flex items-center gap-2">
                <RxAvatar className="text-xl mt-1" />
                <h2 className="text-xl font-bold">{player.name}</h2>
              </div>
              <div className="flex items-center justify-between mt-2 mb-3">
                <p className="flex items-center text-gray-600 gap-2">
                  <IoFlag className="text-xl mt-1" />
                  <span className="font-semibold ">{player.country}</span>
                </p>
                <h3 className="text-md font-semibold text-gray-600 bg-gray-100 px-3 py-0.5 rounded-lg">
                  {player.role}
                </h3>
              </div>
            </div>

            <hr />
            <div className="mt-4">
              <h3 className="text-xl font-bold mb-2">Rating</h3>
              <div className="flex justify-between items-center mb-1">
                <h3 className="font-bold text-lg">BattingType:</h3>
                <p className="font-semibold text-gray-600">
                  {player.battingType}
                </p>
              </div>
              <div className="flex justify-between items-center mb-1">
                <h3 className="font-bold text-lg">BowlingType:</h3>
                <p className="font-semibold text-gray-600">
                  {player.bowlingType}
                </p>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex">
                  <h3 className="font-bold">Price:</h3>
                  <p className="font-bold text-gray-700">
                    {" "}
                    ${player.biddingPrice}
                  </p>
                </div>
                <button
                  onClick={() => handleSelectPlayer(player)}
                  className="border px-3 py-1 rounded-lg font-semibold hover:bg-[#D4E927] text-gray-700"
                >
                  Choose Player
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default PlayerCard;
