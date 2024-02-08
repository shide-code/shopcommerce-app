import { Icon, Typograhpy } from "@/components";

export default function Home() {
	return (
		<main>
			<Icon name="Accessibility" />
			<Typograhpy variant="typography--dis-lg" className="font-bold">
				Hello World
			</Typograhpy>
			<Typograhpy variant="typography--dis-sm">Hello World</Typograhpy>
			<Typograhpy variant="typography--h1">Hello World</Typograhpy>
			<Typograhpy variant="typography--h2">Hello World</Typograhpy>
			<Typograhpy variant="typography--h3">Hello World</Typograhpy>
			<Typograhpy variant="typography--h4">Hello World</Typograhpy>
			<Typograhpy variant="typography--h5">Hello World</Typograhpy>
			<Typograhpy variant="typography--h6">Hello World</Typograhpy>
			<Typograhpy variant="typography--p-xl">Hello World</Typograhpy>
			<Typograhpy variant="typography--p-lg">Hello World</Typograhpy>
			<Typograhpy variant="typography--p-base">Hello World</Typograhpy>
			<Typograhpy variant="typography--p-sm">Hello World</Typograhpy>
		</main>
	);
}
