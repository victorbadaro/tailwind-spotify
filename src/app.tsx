import {
	ChevronLeft,
	ChevronRight,
	Home,
	Laptop2,
	LayoutList,
	Library,
	Maximize2,
	Mic2,
	Play,
	Repeat,
	Search,
	Shuffle,
	SkipBack,
	SkipForward,
	Volume
} from 'lucide-react';

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
							<img src="/album.jpg" alt="Capa do álbum High Live da banda Helloween" className="size-[104px] object-cover" />
							<strong>High Live</strong>
							<button
								type="button"
								className="flex items-center justify-center pl-1 size-12 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible"
							>
								<Play />
							</button>
						</a>
						<a href="#" className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
							<img src="/album.jpg" alt="Capa do álbum High Live da banda Helloween" className="size-[104px] object-cover" />
							<strong>High Live</strong>
							<button
								type="button"
								className="flex items-center justify-center pl-1 size-12 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible"
							>
								<Play />
							</button>
						</a>
						<a href="#" className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
							<img src="/album.jpg" alt="Capa do álbum High Live da banda Helloween" className="size-[104px] object-cover" />
							<strong>High Live</strong>
							<button
								type="button"
								className="flex items-center justify-center pl-1 size-12 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible"
							>
								<Play />
							</button>
						</a>
						<a href="#" className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
							<img src="/album.jpg" alt="Capa do álbum High Live da banda Helloween" className="size-[104px] object-cover" />
							<strong>High Live</strong>
							<button
								type="button"
								className="flex items-center justify-center pl-1 size-12 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible"
							>
								<Play />
							</button>
						</a>
						<a href="#" className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
							<img src="/album.jpg" alt="Capa do álbum High Live da banda Helloween" className="size-[104px] object-cover" />
							<strong>High Live</strong>
							<button
								type="button"
								className="flex items-center justify-center pl-1 size-12 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible"
							>
								<Play />
							</button>
						</a>
						<a href="#" className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
							<img src="/album.jpg" alt="Capa do álbum High Live da banda Helloween" className="size-[104px] object-cover" />
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
							<img src="/album.jpg" alt="Capa do álbum High Live da banda Helloween" className="w-full h-[120px] object-cover" />
							<strong className="font-semibold">Daily Mix 1</strong>
							<span className="text-sm text-zinc-400">Wallows, COIN, girl in red and more</span>
						</a>
						<a href="#" className="flex flex-col gap-2 bg-white/5 p-3 rounded-lg hover:bg-white/10 transition-colors">
							<img src="/album.jpg" alt="Capa do álbum High Live da banda Helloween" className="w-full h-[120px] object-cover" />
							<strong className="font-semibold">Daily Mix 1</strong>
							<span className="text-sm text-zinc-400">Wallows, COIN, girl in red and more</span>
						</a>
						<a href="#" className="flex flex-col gap-2 bg-white/5 p-3 rounded-lg hover:bg-white/10 transition-colors">
							<img src="/album.jpg" alt="Capa do álbum High Live da banda Helloween" className="w-full h-[120px] object-cover" />
							<strong className="font-semibold">Daily Mix 1</strong>
							<span className="text-sm text-zinc-400">Wallows, COIN, girl in red and more</span>
						</a>
						<a href="#" className="flex flex-col gap-2 bg-white/5 p-3 rounded-lg hover:bg-white/10 transition-colors">
							<img src="/album.jpg" alt="Capa do álbum High Live da banda Helloween" className="w-full h-[120px] object-cover" />
							<strong className="font-semibold">Daily Mix 1</strong>
							<span className="text-sm text-zinc-400">Wallows, COIN, girl in red and more</span>
						</a>
						<a href="#" className="flex flex-col gap-2 bg-white/5 p-3 rounded-lg hover:bg-white/10 transition-colors">
							<img src="/album.jpg" alt="Capa do álbum High Live da banda Helloween" className="w-full h-[120px] object-cover" />
							<strong className="font-semibold">Daily Mix 1</strong>
							<span className="text-sm text-zinc-400">Wallows, COIN, girl in red and more</span>
						</a>
					</div>
				</main>
			</div>

			<footer className="flex items-center justify-between bg-zinc-800 border-t border-zinc-700 px-6 py-4">
				<div className="flex items-center gap-3">
					<img src="/album.jpg" alt="Capa do álbum High Live da banda Helloween" className="size-14 object-cover" />
					<div className="flex flex-col">
						<strong className="font-normal">Why?</strong>
						<span className="text-xs text-zinc-400">Helloween</span>
					</div>
				</div>

				<div className="flex flex-col items-center gap-2">
					<div className="flex items-center gap-3">
						<Shuffle size={20} className="text-zinc-200" />
						<SkipBack size={20} className="text-zinc-200" />
						<button type="button" className="flex items-center justify-center pl-0.5 size-10 rounded-full bg-white text-black">
							<Play />
						</button>
						<SkipForward size={20} className="text-zinc-200" />
						<Repeat size={20} className="text-zinc-200" />
					</div>

					<div className="flex items-center gap-2">
						<span className="text-xs text-zinc-400">0:31</span>
						<div className="h-1 rounded-full w-96 bg-zinc-600">
							<div className="w-40 h-1 rounded-full bg-zinc-200" />
						</div>
						<span className="text-xs text-zinc-400">2:14</span>
					</div>
				</div>

				<div className="flex items-center gap-4">
					<Mic2 size={20} />
					<LayoutList size={20} />
					<Laptop2 size={20} />
					<div className="flex items-center gap-2">
						<Volume size={20} />
						<div className="h-1 rounded-full w-24 bg-zinc-600">
							<div className="w-10 h-1 rounded-full bg-zinc-200" />
						</div>
					</div>
					<Maximize2 size={20} />
				</div>
			</footer>
		</div>
	);
}
