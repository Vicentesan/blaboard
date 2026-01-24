"use client";

import Link from "next/link";
import { ArrowRight, Play } from "@phosphor-icons/react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface HeroSectionProps {
	className?: string;
}

export function HeroSection({ className }: HeroSectionProps) {
	return (
		<section
			className={cn(
				"relative flex min-h-screen flex-col items-center justify-center px-4 pt-24 pb-16 text-center",
				className,
			)}
		>
			<div className="mx-auto max-w-4xl">
				<div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-muted/50 px-3 py-1 text-sm text-muted-foreground">
					<span className="h-2 w-2 rounded-full bg-green-500" />
					Now in public beta
				</div>

				<h1 className="mb-6 font-bold text-4xl tracking-tight text-foreground sm:text-5xl lg:text-6xl">
					Organize your work,{" "}
					<span className="text-primary">amplify your impact</span>
				</h1>

				<p className="mx-auto mb-10 max-w-2xl text-lg text-muted-foreground sm:text-xl">
					Blaboard is the task management tool for modern teams. Plan, track,
					and ship projects with clarity and speed.
				</p>

				<div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
					<Link href="/register">
						<Button size="lg" className="gap-2">
							Get Started Free
							<ArrowRight weight="bold" size={18} />
						</Button>
					</Link>
					<Button variant="outline" size="lg" className="gap-2">
						<Play weight="fill" size={18} />
						Watch Demo
					</Button>
				</div>
			</div>
		</section>
	);
}
