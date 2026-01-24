import type { Icon } from "@phosphor-icons/react";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
	icon: Icon;
	title: string;
	description: string;
	className?: string;
}

export function FeatureCard({
	icon: IconComponent,
	title,
	description,
	className,
}: FeatureCardProps) {
	return (
		<div
			className={cn(
				"group rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/50 hover:shadow-lg",
				className,
			)}
		>
			<div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
				<IconComponent size={24} weight="duotone" />
			</div>
			<h3 className="mb-2 font-semibold text-lg text-foreground">{title}</h3>
			<p className="text-sm text-muted-foreground leading-relaxed">
				{description}
			</p>
		</div>
	);
}
