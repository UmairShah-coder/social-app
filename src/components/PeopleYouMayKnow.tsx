import { FiUserPlus, FiX, FiUsers } from "react-icons/fi";

const suggestions = [
  { id: 1, name: "Ahmed Raza", mutual: 5, image: "https://i.pravatar.cc/150?img=11" },
  { id: 2, name: "Sara Khan", mutual: 2, image: "https://i.pravatar.cc/150?img=12" },
  { id: 3, name: "Hassan Ali", mutual: 8, image: "https://i.pravatar.cc/150?img=13" },
  { id: 4, name: "Ayesha Noor", mutual: 3, image: "https://i.pravatar.cc/150?img=14" },
  { id: 5, name: "Ali Ahmed", mutual: 6, image: "https://i.pravatar.cc/150?img=15" },

  // 👉 NEW PEOPLE ADDED
  { id: 6, name: "Usman Tariq", mutual: 4, image: "https://i.pravatar.cc/150?img=16" },
  { id: 7, name: "Hina Shah", mutual: 1, image: "https://i.pravatar.cc/150?img=17" },
  { id: 8, name: "Bilal Khan", mutual: 10, image: "https://i.pravatar.cc/150?img=18" },
  { id: 9, name: "Zainab Ali", mutual: 7, image: "https://i.pravatar.cc/150?img=19" },
  { id: 10, name: "Farhan Ahmed", mutual: 3, image: "https://i.pravatar.cc/150?img=20" },
];

export default function PeopleYouMayKnow() {

  // 👉 OPEN FULL PAGE
  const handleSeeAll = () => {
    window.open("/people", "_blank"); 
  };

  return (
    <div className="w-full max-w-6xl mx-auto mt-10 px-4">
 <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap');
        * { font-family: 'Poppins', sans-serif; }
      `}</style>
      {/* HEADER */}
      <div className="flex items-center justify-between mb-4">

        <h2 className="text-sm font-semibold text-gray-700 flex items-center gap-2">
          <FiUsers />
          People You May Know
        </h2>

        <button
          onClick={handleSeeAll}
          className="text-xs text-blue-600 hover:underline"
        >
          See all
        </button>

      </div>

      {/* CARDS ROW */}
      <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-2">

        {suggestions.slice(0, 5).map((user) => (
          <div
            key={user.id}
            className="min-w-[200px] bg-white border rounded-2xl shadow-sm overflow-hidden hover:shadow-md transition relative"
          >

            {/* CLOSE BUTTON */}
            <button className="absolute top-2 right-2 bg-black/40 text-white p-1 rounded-full hover:bg-black/60">
              <FiX size={14} />
            </button>

            {/* IMAGE */}
            <img
              src={user.image}
              className="w-full h-40 object-cover"
            />

            {/* CONTENT */}
            <div className="p-3">

              <p className="font-semibold text-sm text-gray-800">
                {user.name}
              </p>

              <p className="text-xs text-gray-500 mt-1">
                {user.mutual} mutual friends
              </p>

              <button className="mt-3 w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-xs py-2 rounded-lg transition">
                <FiUserPlus />
                Add Friend
              </button>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
}