/* eslint-disable react/prop-types */
import { MdDelete } from "react-icons/md";
import { Bounce, toast } from "react-toastify";

const SelectedPlayer = ({ player, setPlayer, setButtonValue }) => {
  const handleDeletePlayer = (id) => {
    const newPlayer = player.filter((p) => p.playerId !== id);
    setPlayer(newPlayer);
    toast.warn(" Player Removed!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  };

  return (
    <div className="mt-8">
      <div className="flex flex-col gap-2">
        {player.length > 0 &&
          player.map((p) => (
            <div
              key={p.playerId}
              className="flex items-center justify-between border border-gray-300 p-2 rounded-xl"
            >
              <div className="flex items-center gap-2">
                <div className="w-24 h-20 rounded-xl">
                  <img
                    className="w-full h-full border rounded-xl object-cover"
                    src={p.image}
                    alt="player"
                  />
                </div>
                <div>
                  <h1 className="text-lg font-bold">{p.name}</h1>
                  <p className="font-semibold text-gray-500">{p.role}</p>
                  <p className="font-semibold text-gray-500">
                    ${p.biddingPrice}
                  </p>
                </div>
              </div>
              <div>
                <button
                  className="hover:bg-gray-300 rounded-lg p-1"
                  onClick={() => handleDeletePlayer(p.playerId)}
                >
                  <MdDelete className="text-2xl text-red-500 cursor-pointer " />
                </button>
              </div>
            </div>
          ))}
      </div>

      <div className="mt-4 border border-[#131313] w-48 p-1 rounded-2xl text-center">
        <button
          onClick={(e) => setButtonValue(e.target.value)}
          value="available"
          className="bg-[#D4E927] py-2 px-4 rounded-xl font-bold text-lg"
        >
          Add more player
        </button>
      </div>
    </div>
  );
};
export default SelectedPlayer;
