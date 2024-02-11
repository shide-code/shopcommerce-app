import { Button, Icon, Typography } from "@/components";

export default function Home() {
	return (
		<main className="p-2 flex justify-between">
			<div className="w-2/4">
				<Icon name="Accessibility" />
				<Typography variant="typography--dis-lg" className="font-bold">
					Hello World
				</Typography>
				<Typography variant="typography--dis-sm">Hello World</Typography>
				<Typography variant="typography--h1">Hello World</Typography>
				<Typography variant="typography--h2">Hello World</Typography>
				<Typography variant="typography--h3">Hello World</Typography>
				<Typography variant="typography--h4">Hello World</Typography>
				<Typography variant="typography--h5">Hello World</Typography>
				<Typography variant="typography--h6">Hello World</Typography>
				<Typography variant="typography--p-xl">Hello World</Typography>
				<Typography variant="typography--p-lg">Hello World</Typography>
				<Typography variant="typography--p-base">Hello World</Typography>
				<Typography variant="typography--p-sm">Hello World</Typography>
			</div>
			<div className="w-2/4">
				<Button
					text="Click Me"
					backgroundTheme="accent"
					rounded="full"
					disabled
				/>
				<div className="h-2" />
				<Button text="Click Me" backgroundTheme="accent" rounded="full" />
				<div className="h-2" />
				<Button text="Click Me" backgroundTheme="informative" rounded="xs" />
				<div className="h-2" />
				<Button text="Click Me" backgroundTheme="negative" rounded="sm" />
				<div className="h-2" />
				<Button text="Click Me" backgroundTheme="notice" rounded="lg" />
				<div className="h-2" />
				<Button text="Click Me" backgroundTheme="positive" rounded="none" />
				<div className="h-2" />
				<Button
					text="Click Me"
					backgroundTheme="accent"
					rounded="full"
					disabled
					typeButton="outlined"
				/>
				<div className="h-2" />
				<Button
					text="Click Me"
					backgroundTheme="accent"
					rounded="full"
					typeButton="outlined"
				/>
				<div className="h-2" />
				<Button
					text="Click Me"
					backgroundTheme="informative"
					rounded="xs"
					typeButton="outlined"
				/>
				<div className="h-2" />
				<Button
					text="Click Me"
					backgroundTheme="negative"
					rounded="sm"
					typeButton="outlined"
				/>
				<div className="h-2" />
				<Button
					text="Click Me"
					backgroundTheme="notice"
					rounded="lg"
					typeButton="outlined"
				/>
				<div className="h-2" />
				<Button
					text="Click Me"
					backgroundTheme="positive"
					rounded="none"
					typeButton="outlined"
				/>
			</div>
		</main>
	);
}
