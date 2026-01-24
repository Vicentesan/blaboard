"use client";

import { cn } from "@/lib/utils";

interface SocialProofSectionProps {
	className?: string;
}

const companies = ["Acme Corp", "TechStart", "DevFlow", "CloudBase", "DataSync"];

export function SocialProofSection({ className }: SocialProofSectionProps) {
	return (
		<section
			className={cn(
				"border-y border-border bg-muted/30 px-4 py-16",
				className,
			)}
		>
			<div className="mx-auto max-w-6xl text-center">
				<p className="mb-8 font-medium text-muted-foreground text-sm uppercase tracking-wider">
					Trusted by teams at
				</p>
				<div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
					{companies.map((company) => (
						<span
							key={company}
							className="font-semibold text-muted-foreground/60 text-xl transition-colors hover:text-foreground"
						>
							{company}
						</span>
					))}
				</div>
			</div>
		</section>
	);
}
