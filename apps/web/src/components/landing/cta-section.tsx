"use client";

import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface CTASectionProps {
	className?: string;
}

export function CTASection({ className }: CTASectionProps) {
	return (
		<section className={cn("px-4 py-24", className)}>
			<div className="mx-auto max-w-4xl rounded-2xl bg-primary/5 p-8 text-center sm:p-12 lg:p-16">
				<h2 className="mb-4 font-bold text-3xl tracking-tight text-foreground sm:text-4xl">
					Ready to get started?
				</h2>
				<p className="mx-auto mb-8 max-w-xl text-lg text-muted-foreground">
					Join thousands of teams already using Blaboard to ship faster and stay
					organized.
				</p>
				<Link href="/register">
					<Button size="lg" className="gap-2">
						Start for Free
						<ArrowRight weight="bold" size={18} />
					</Button>
				</Link>
			</div>
		</section>
	);
}
