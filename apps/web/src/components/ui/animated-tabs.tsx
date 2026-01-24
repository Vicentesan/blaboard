"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface AnimatedTabsProps {
	tabs: Array<{ label: string; href: string }>;
	className?: string;
}

export function AnimatedTabs({ tabs, className }: AnimatedTabsProps) {
	const [activeTab, setActiveTab] = useState(tabs[0]?.label);
	const containerRef = useRef<HTMLDivElement>(null);
	const activeTabRef = useRef<HTMLButtonElement>(null);

	useEffect(() => {
		const container = containerRef.current;

		if (container && activeTab) {
			const activeTabElement = activeTabRef.current;

			if (activeTabElement) {
				const { offsetLeft, offsetWidth } = activeTabElement;
				const clipLeft = offsetLeft;
				const clipRight = offsetLeft + offsetWidth;

				container.style.clipPath = `inset(0 ${Number(100 - (clipRight / container.offsetWidth) * 100).toFixed()}% 0 ${Number((clipLeft / container.offsetWidth) * 100).toFixed()}% round 17px)`;
			}
		}
	}, [activeTab]);

	const handleClick = (tab: { label: string; href: string }) => {
		setActiveTab(tab.label);
		if (tab.href.startsWith("#")) {
			const element = document.querySelector(tab.href);
			element?.scrollIntoView({ behavior: "smooth" });
		}
	};

	return (
		<div
			className={cn(
				"relative mx-auto flex w-fit flex-col items-center rounded-full",
				className,
			)}
		>
			<div
				ref={containerRef}
				className="absolute z-10 w-full overflow-hidden [clip-path:inset(0px_75%_0px_0%_round_17px)] [transition:clip-path_0.25s_ease]"
			>
				<div className="relative flex w-full justify-center bg-foreground">
					{tabs.map((tab, index) => (
						<button
							key={index.toString()}
							type="button"
							onClick={() => handleClick(tab)}
							className="flex h-8 items-center rounded-full px-3 font-medium text-background text-sm"
							tabIndex={-1}
						>
							{tab.label}
						</button>
					))}
				</div>
			</div>
			<div className="relative flex w-full justify-center">
				{tabs.map((tab, index) => {
					const isActive = activeTab === tab.label;

					return (
						<button
							key={index.toString()}
							type="button"
							ref={isActive ? activeTabRef : null}
							onClick={() => handleClick(tab)}
							className="flex h-8 items-center rounded-full px-3 font-medium text-muted-foreground text-sm transition-colors hover:text-foreground"
						>
							{tab.label}
						</button>
					);
				})}
			</div>
		</div>
	);
}
