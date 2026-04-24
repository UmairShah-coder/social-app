import { FiUserPlus } from "react-icons/fi";

const allPeople = [
  { id: 1, name: "Ahmed Raza", mutual: 5, image: "https://i.pravatar.cc/150?img=11" },
  { id: 2, name: "Sara Khan", mutual: 2, image: "https://i.pravatar.cc/150?img=12" },
  { id: 3, name: "Hassan Ali", mutual: 8, image: "https://i.pravatar.cc/150?img=13" },
  { id: 4, name: "Ayesha Noor", mutual: 3, image: "https://i.pravatar.cc/150?img=14" },
  { id: 5, name: "Ali Ahmed", mutual: 6, image: "https://i.pravatar.cc/150?img=15" },
  { id: 6, name: "Usman Tariq", mutual: 4, image: "https://i.pravatar.cc/150?img=16" },
  { id: 7, name: "Hina Shah", mutual: 1, image: "https://i.pravatar.cc/150?img=17" },
  { id: 8, name: "Bilal Khan", mutual: 10, image: "https://i.pravatar.cc/150?img=18" },
  { id: 9, name: "Zainab Ali", mutual: 7, image: "https://i.pravatar.cc/150?img=19" },
  { id: 10, name: "Farhan Ahmed", mutual: 3, image: "https://i.pravatar.cc/150?img=20" },
];

export default function PeoplePage() {
  return (
    <div className="max-w-4xl mx-auto p-6">
 <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap');
        * { font-family: 'Poppins', sans-serif; }
      `}</style>
      <h1 className="text-xl font-bold mb-6">
        People You May Know
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">

        {allPeople.map((user) => (
          <div key={user.id} className="bg-white border rounded-xl shadow-sm p-3">

            <img
              src={user.image}
              className="w-full h-40 object-cover rounded-lg"
            />

            <p className="font-semibold mt-2">{user.name}</p>
            <p className="text-xs text-gray-500">
              {user.mutual} mutual friends
            </p>

            <button className="mt-3 w-full transition-all flex items-center justify-center gap-2 bg-blue-600 text-white text-sm py-2 rounded-lg hover:bg-blue-700">
              <FiUserPlus />
              Add Friend
            </button>

          </div>
        ))}

      </div>

    </div>
  );
}