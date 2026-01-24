"use client";

import { Kanban, UsersThree, ChartBar, Plug } from "@phosphor-icons/react";
import { FeatureCard } from "./feature-card";
import { cn } from "@/lib/utils";

interface FeaturesSectionProps {
	className?: string;
}

const features = [
	{
		icon: Kanban,
		title: "Powerful Task Management",
		description:
			"Create, organize, and prioritize tasks with ease. Use boards, lists, or timeline views to visualize your work.",
	},
	{
		icon: UsersThree,
		title: "Real-time Collaboration",
		description:
			"Work together seamlessly with your team. Comments, mentions, and instant updates keep everyone in sync.",
	},
	{
		icon: ChartBar,
		title: "Track Progress",
		description:
			"Visualize project progress with dashboards and reports. Always know where you stand and what's next.",
	},
	{
		icon: Plug,
		title: "Powerful Integrations",
		description:
			"Connect with your favorite tools. GitHub, Slack, Google Drive, and more to streamline your workflow.",
	},
];

export function FeaturesSection({ className }: FeaturesSectionProps) {
	return (
		<section id="features" className={cn("px-4 py-24", className)}>
			<div className="mx-auto max-w-6xl">
				<div className="mb-16 text-center">
					<h2 className="mb-4 font-semibold text-3xl tracking-tight text-foreground sm:text-4xl">
						Everything you need to ship faster
					</h2>
					<p className="mx-auto max-w-2xl text-lg text-muted-foreground">
						Blaboard combines powerful features with a simple interface to help
						your team achieve more.
					</p>
				</div>

				<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
					{features.map((feature) => (
						<FeatureCard key={feature.title} {...feature} />
					))}
				</div>
			</div>
		</section>
	);
}
