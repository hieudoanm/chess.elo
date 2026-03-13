import {
	LandingContent,
	LandingTemplate,
} from '@chess.elo/templates/LandingTemplate';
import { NextPage } from 'next';

const content: LandingContent = {
	navbar: {
		title: 'ChessElo',
		buttonText: 'Open App',
		buttonHref: '/app',
	},
	hero: {
		title: 'Calculate and Track Your Chess Elo',
		tagline:
			'Quickly calculate rating changes, predict outcomes, and track your Chess.com Elo across all game modes.',
		buttonText: 'Start Calculating',
		buttonHref: '/app',
	},
	features: {
		title: 'Features',
		items: [
			{
				id: 'elo-calculation',
				emoji: '📊',
				title: 'Instant Elo Calculation',
				description:
					'Compute rating changes after a game instantly for standard, blitz, bullet, and rapid formats.',
			},
			{
				id: 'predict-outcomes',
				emoji: '🔮',
				title: 'Predict Match Outcomes',
				description:
					'Estimates Elo changes before a game to see potential gains or losses.',
			},
			{
				id: 'rating-history',
				emoji: '📈',
				title: 'Track Your Rating History',
				description:
					'Visualize your Elo progression over time with charts and stats for each game type.',
			},
			{
				id: 'privacy-first',
				emoji: '🔒',
				title: 'Privacy First',
				description:
					'All calculations are done locally. Your data is never uploaded or stored remotely.',
			},
			{
				id: 'multi-device',
				emoji: '📱',
				title: 'Multi-Device Ready',
				description:
					'Use it on desktops, tablets, or phones with responsive design and synced settings.',
			},
			{
				id: 'export-results',
				emoji: '💾',
				title: 'Export Results',
				description:
					'Save Elo calculations and charts as PDFs or images to share with friends or review later.',
			},
		],
	},
	cta: {
		title: 'Start Tracking Your Chess Elo Today',
		description:
			'Calculate, predict, and monitor your ratings securely and instantly. No signup required.',
		buttonText: 'Open ChessElo',
		buttonHref: '/app',
	},
	footer: {
		name: 'ChessElo',
	},
};

const HomePage: NextPage = () => {
	return <LandingTemplate content={content} />;
};

export default HomePage;
