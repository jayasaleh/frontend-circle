import { Input } from '@/components/ui/input';
import { SearchIcon } from 'lucide-react';
import { useState } from 'react';
import { useDebounce } from './hooks/useDebounce';
import { useSearchUsers } from './hooks/useSearchUsers';
import UserCard from './components/UserCard';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearchTerm = useDebounce(searchTerm, 500);
  const { data: searchResults, isLoading } =
    useSearchUsers(debouncedSearchTerm);

  return (
    <>
      <title>Circle</title>
      <meta name="description" content="Search" />
      <div className="w-full border-x h-full p-2">
        <div className="relative mb-5">
          <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
          <Input
            className="pl-12 font-bold"
            placeholder="Cari username..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        {!isLoading && searchResults && (
          <div className="space-y-3">
            {searchResults.length === 0 && debouncedSearchTerm && (
              <p className="text-center text-muted-foreground">
                Pengguna tidak ditemukan.
              </p>
            )}
            <div className="p-3 flex flex-col gap-5">
              {searchResults.map((user) => (
                <UserCard key={user.id} user={user} />
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Search;
