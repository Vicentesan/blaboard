"use client";

import Link from "next/link";
import { GithubLogo, TwitterLogo, LinkedinLogo } from "@phosphor-icons/react";
import { cn } from "@/lib/utils";

interface FooterProps {
	className?: string;
}

const footerLinks = {
	Product: [
		{ label: "Features", href: "#features" },
		{ label: "Pricing", href: "#" },
		{ label: "Integrations", href: "#" },
	],
	Company: [
		{ label: "About", href: "#" },
		{ label: "Blog", href: "#" },
		{ label: "Careers", href: "#" },
	],
	Resources: [
		{ label: "Documentation", href: "#" },
		{ label: "Help Center", href: "#" },
		{ label: "Status", href: "#" },
	],
	Legal: [
		{ label: "Privacy", href: "#" },
		{ label: "Terms", href: "#" },
	],
};

export function Footer({ className }: FooterProps) {
	return (
		<footer className={cn("border-t border-border px-4 py-12", className)}>
			<div className="mx-auto max-w-6xl">
				<div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
					<div className="lg:col-span-1">
						<Link
							href="/"
							className="font-semibold text-foreground text-xl tracking-tight"
						>
							Blaboard
						</Link>
						<p className="mt-2 text-muted-foreground text-sm">
							Task management for modern teams.
						</p>
						<div className="mt-4 flex gap-4">
							<a
								href="#"
								className="text-muted-foreground transition-colors hover:text-foreground"
								aria-label="Twitter"
							>
								<TwitterLogo size={20} />
							</a>
							<a
								href="#"
								className="text-muted-foreground transition-colors hover:text-foreground"
								aria-label="GitHub"
							>
								<GithubLogo size={20} />
							</a>
							<a
								href="#"
								className="text-muted-foreground transition-colors hover:text-foreground"
								aria-label="LinkedIn"
							>
								<LinkedinLogo size={20} />
							</a>
						</div>
					</div>

					{Object.entries(footerLinks).map(([category, links]) => (
						<div key={category}>
							<h3 className="mb-3 font-medium text-foreground text-sm">
								{category}
							</h3>
							<ul className="space-y-2">
								{links.map((link) => (
									<li key={link.label}>
										<a
											href={link.href}
											className="text-muted-foreground text-sm transition-colors hover:text-foreground"
										>
											{link.label}
										</a>
									</li>
								))}
							</ul>
						</div>
					))}
				</div>

				<div className="mt-12 border-t border-border pt-6 text-center text-muted-foreground text-sm">
					&copy; {new Date().getFullYear()} Blaboard. All rights reserved.
				</div>
			</div>
		</footer>
	);
}
