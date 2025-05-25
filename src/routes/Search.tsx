import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";
import { useEffect, useState, useRef } from "react";

const users = [
  {
    id: 1,
    name: "Kopi Gayo Aceh",
    username: "kingdaffa",
    thumbnail: "https://images.unsplash.com/photo-1542838132-92c53300491e",
  },
  {
    id: 2,
    name: "Batik Pekalongan",
    username: "masjuju",
    thumbnail:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0IdLvrS6GPKwkNLvX7YavosYeNvYx4jjU1Q&s",
  },
  {
    id: 3,
    name: "Keripik Balado Padang",
    username: "endra",
    thumbnail: "https://pesonanusantara.co.id/images/upload//s/h/shirley.jpg",
  },
  {
    id: 4,
    name: "Sepatu Kulit Cibaduyut",
    username: "iqbal",
    thumbnail: "https://images.unsplash.com/photo-1567427017947-545c5f8d16b8",
  },
  {
    id: 5,
    name: "Cokelat Monggo Jogja",
    username: "alvian",
    thumbnail: "https://images.unsplash.com/photo-1621445177287-6d08a17826df",
  },
];

const Search = () => {
  const [query, setQuery] = useState("");
  const [userlist, setUserList] = useState<typeof users>([]);
  const [loading, setLoading] = useState(false);
  const [noResult, setNoResult] = useState(false);
  const debounceRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (debounceRef.current) clearTimeout(debounceRef.current);

    debounceRef.current = setTimeout(() => {
      if (query.trim() !== "") {
        searchUsers(query);
      } else {
        setUserList([]);
        setNoResult(false);
      }
    }, 500);

    return () => {
      if (debounceRef.current) clearTimeout(debounceRef.current);
    };
  }, [query]);

  const searchUsers = (searchQuery: string) => {
    setLoading(true);
    const filteredUsers = users.filter((user) =>
      user.username.toLowerCase().includes(searchQuery.toLowerCase())
    );

    setUserList(filteredUsers);
    setNoResult(filteredUsers.length === 0);
    setLoading(false);
  };

  return (
    <div className="w-2/4 mx-auto mt-10">
      <div className="relative mb-5">
        <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
        <Input
          className="pl-12 font-bold"
          placeholder="Cari username..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      {loading ? (
        <p className="text-gray-500 text-center">Loading...</p>
      ) : noResult ? (
        <div className="text-center">
          <span className="font-bold text-md text-red-500">
            No result for "{query}"
          </span>
          <p className="text-sm">Try searching for something else</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4">
          {userlist.map((user) => (
            <div
              key={user.id}
              className="p-4 rounded-md shadow-md flex justify-between items-center gap-4"
            >
              <div className="flex gap-4">
                <img
                  src={user.thumbnail}
                  alt={user.name}
                  className="w-16 h-16 object-cover rounded-full"
                />
                <div>
                  <h3 className="text-xl font-semibold">{user.name}</h3>
                  <p className="text-gray-500">@{user.username}</p>
                </div>
              </div>
              <div>
                <Button
                  variant="outline"
                  size="lg"
                  className="rounded-full text-xl p-6"
                >
                  Follow
                </Button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;
