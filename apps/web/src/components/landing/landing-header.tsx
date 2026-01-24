"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import { AnimatedTabs } from "@/components/ui/animated-tabs";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface LandingHeaderProps {
	className?: string;
}

const navTabs = [
	{ label: "Features", href: "#features" },
	{ label: "Pricing", href: "#pricing" },
	{ label: "About", href: "#about" },
];

export function LandingHeader({ className }: LandingHeaderProps) {
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => setScrolled(window.scrollY > 10);
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<header
			className={cn(
				"fixed top-0 right-0 left-0 z-50 transition-all duration-200",
				scrolled
					? "border-b border-border bg-background/80 backdrop-blur-md"
					: "bg-transparent",
				className,
			)}
		>
			<div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
				<Link
					href="/"
					className="font-semibold text-xl tracking-tight text-foreground"
				>
					Blaboard
				</Link>

				<div className="hidden md:block">
					<AnimatedTabs tabs={navTabs} />
				</div>

				<div className="flex items-center gap-2 sm:gap-4">
					<AnimatedThemeToggler className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background text-foreground transition-colors hover:bg-accent" />
					<Link href="/login">
						<Button variant="ghost" size="sm">
							Sign In
						</Button>
					</Link>
					<Link href="/register">
						<Button size="sm">Get Started</Button>
					</Link>
				</div>
			</div>
		</header>
	);
}
