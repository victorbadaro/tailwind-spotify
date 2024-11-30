import { ChevronLeft, ChevronRight, Play } from 'lucide-react';
import { Footer } from './components/footer';
import { Sidebar } from './components/sidebar';

export function App() {
	return (
		<div className="h-screen flex flex-col">
			<div className="flex flex-1">
				<Sidebar />

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

			<Footer />
		</div>
	);
}
