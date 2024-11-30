import { Laptop2, LayoutList, Maximize2, Mic2, Play, Repeat, Shuffle, SkipBack, SkipForward, Volume } from 'lucide-react';

export function Footer() {
	return (
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
	);
}
