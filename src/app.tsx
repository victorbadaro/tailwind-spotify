import { ChevronLeft, ChevronRight, Home, Library, Play, Search } from 'lucide-react';

export function App() {
	return (
		<div className="h-screen flex flex-col">
			<div className="flex flex-1">
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
				<main className="flex-1 p-6">
					<div className="flex items-center gap-4">
						<button type="button" className="p-1 rounded-full bg-black/40">
							<ChevronLeft />
						</button>
						<button type="button" className="p-1 rounded-full bg-black/40">
							<ChevronRight />
						</button>
					</div>

					<h1 className="mt-10 font-semibold text-3xl">Good Afternoon</h1>

					<div className="grid grid-cols-3 gap-4 mt-4">
						<a href="#" className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
							<img src="/album.jpg" alt="Capa do álbum High Live da banda Helloween" className="size-[104px]" />
							<strong>High Live</strong>
							<button
								type="button"
								className="flex items-center justify-center pl-1 size-12 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible"
							>
								<Play />
							</button>
						</a>
						<a href="#" className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
							<img src="/album.jpg" alt="Capa do álbum High Live da banda Helloween" className="size-[104px]" />
							<strong>High Live</strong>
							<button
								type="button"
								className="flex items-center justify-center pl-1 size-12 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible"
							>
								<Play />
							</button>
						</a>
						<a href="#" className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
							<img src="/album.jpg" alt="Capa do álbum High Live da banda Helloween" className="size-[104px]" />
							<strong>High Live</strong>
							<button
								type="button"
								className="flex items-center justify-center pl-1 size-12 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible"
							>
								<Play />
							</button>
						</a>
						<a href="#" className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
							<img src="/album.jpg" alt="Capa do álbum High Live da banda Helloween" className="size-[104px]" />
							<strong>High Live</strong>
							<button
								type="button"
								className="flex items-center justify-center pl-1 size-12 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible"
							>
								<Play />
							</button>
						</a>
						<a href="#" className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
							<img src="/album.jpg" alt="Capa do álbum High Live da banda Helloween" className="size-[104px]" />
							<strong>High Live</strong>
							<button
								type="button"
								className="flex items-center justify-center pl-1 size-12 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible"
							>
								<Play />
							</button>
						</a>
						<a href="#" className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
							<img src="/album.jpg" alt="Capa do álbum High Live da banda Helloween" className="size-[104px]" />
							<strong>High Live</strong>
							<button
								type="button"
								className="flex items-center justify-center pl-1 size-12 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible"
							>
								<Play />
							</button>
						</a>
					</div>

					<h2 className="mt-10 font-semibold text-2xl">Made for Victor Badaró</h2>

					<div className="grid grid-cols-5 gap-4 mt-4">
						<a href="#" className="flex flex-col gap-2 bg-white/5 p-3 rounded-lg hover:bg-white/10 transition-colors">
							<img src="/album.jpg" alt="Capa do álbum High Live da banda Helloween" className="w-full h-[120px]" />
							<strong className="font-semibold">Daily Mix 1</strong>
							<span className="text-sm text-zinc-400">Wallows, COIN, girl in red and more</span>
						</a>
						<a href="#" className="flex flex-col gap-2 bg-white/5 p-3 rounded-lg hover:bg-white/10 transition-colors">
							<img src="/album.jpg" alt="Capa do álbum High Live da banda Helloween" className="w-full h-[120px]" />
							<strong className="font-semibold">Daily Mix 1</strong>
							<span className="text-sm text-zinc-400">Wallows, COIN, girl in red and more</span>
						</a>
						<a href="#" className="flex flex-col gap-2 bg-white/5 p-3 rounded-lg hover:bg-white/10 transition-colors">
							<img src="/album.jpg" alt="Capa do álbum High Live da banda Helloween" className="w-full h-[120px]" />
							<strong className="font-semibold">Daily Mix 1</strong>
							<span className="text-sm text-zinc-400">Wallows, COIN, girl in red and more</span>
						</a>
						<a href="#" className="flex flex-col gap-2 bg-white/5 p-3 rounded-lg hover:bg-white/10 transition-colors">
							<img src="/album.jpg" alt="Capa do álbum High Live da banda Helloween" className="w-full h-[120px]" />
							<strong className="font-semibold">Daily Mix 1</strong>
							<span className="text-sm text-zinc-400">Wallows, COIN, girl in red and more</span>
						</a>
						<a href="#" className="flex flex-col gap-2 bg-white/5 p-3 rounded-lg hover:bg-white/10 transition-colors">
							<img src="/album.jpg" alt="Capa do álbum High Live da banda Helloween" className="w-full h-[120px]" />
							<strong className="font-semibold">Daily Mix 1</strong>
							<span className="text-sm text-zinc-400">Wallows, COIN, girl in red and more</span>
						</a>
					</div>
				</main>
			</div>
			<footer className="bg-zinc-800 border-t border-zinc-700 p-6">footer</footer>
		</div>
	);
}
