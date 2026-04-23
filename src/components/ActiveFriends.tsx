import { FaCircle } from "react-icons/fa";

const activeFriends = [
  {
    id: 1,
    name: "Ali Khan",
    image: "https://i.pravatar.cc/150?img=1",
  },
  {
    id: 2,
    name: "Sara Ahmed",
    image: "https://i.pravatar.cc/150?img=5",
  },
  {
    id: 3,
    name: "John Doe",
    image: "https://i.pravatar.cc/150?img=3",
  },
  {
    id: 4,
    name: "Ayesha",
    image: "https://i.pravatar.cc/150?img=8",
  },
  {
    id: 5,
    name: "Hassan",
    image: "https://i.pravatar.cc/150?img=12",
  },
];

export default function ActiveFriends() {
  return (
    <div className="bg-white p-4 rounded-2xl border shadow-sm">

      {/* HEADER */}
      <div className="flex items-center justify-between mb-3">
        <h2 className="font-semibold text-sm text-gray-700">
          Active Friends
        </h2>

        <span className="text-xs text-green-600 font-medium">
          Online
        </span>
      </div>

      {/* LIST */}
      <div className="space-y-3">

        {activeFriends.map((user) => (
          <div key={user.id} className="flex items-center gap-3">

            {/* IMAGE */}
            <div className="relative">

              <img
                src={user.image}
                className="w-10 h-10 rounded-full object-cover"
              />

              {/* GREEN ONLINE DOT */}
              <FaCircle className="text-green-500 text-[10px] absolute bottom-0 right-0" />

            </div>

            {/* NAME */}
            <div>
              <p className="text-sm font-medium text-gray-800">
                {user.name}
              </p>
              <p className="text-xs text-green-500">
                Active now
              </p>
            </div>

          </div>
        ))}

      </div>

    </div>
  );
}