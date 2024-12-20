import { Home, Library, Search } from 'lucide-react';

export function Sidebar() {
	return (
		<aside className="p-6 w-72 bg-zinc-950">
			<div className="flex items-center gap-2">
				<div className="size-3 rounded-full bg-red-500" />
				<div className="size-3 rounded-full bg-yellow-500" />
				<div className="size-3 rounded-full bg-green-500" />
			</div>

			<nav className="space-y-5 mt-10">
				<a href="#" className="flex items-center gap-3 text-sm font-semibold text-zinc-200">
					<Home />
					Home
				</a>
				<a href="#" className="flex items-center gap-3 text-sm font-semibold text-zinc-200">
					<Search />
					Search
				</a>
				<a href="#" className="flex items-center gap-3 text-sm font-semibold text-zinc-200">
					<Library />
					Your Library
				</a>
			</nav>

			<nav className="flex flex-col gap-3 mt-6 pt-6 border-t border-zinc-800">
				<a href="#" className="text-sm text-zinc-400 hover:text-zinc-100">
					Hot Hits Brasil
				</a>
				<a href="#" className="text-sm text-zinc-400 hover:text-zinc-100">
					Aniver Funk
				</a>
				<a href="#" className="text-sm text-zinc-400 hover:text-zinc-100">
					My Playlist #13
				</a>
				<a href="#" className="text-sm text-zinc-400 hover:text-zinc-100">
					Top Brasil
				</a>
			</nav>
		</aside>
	);
}
