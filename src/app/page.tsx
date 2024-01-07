import styles from './page.module.css';
import {FigmaEmbed} from '~/components/FigmaEmbed/FigmaEmbed';

export default function Home() {
	return (
		<main className={styles.main}>
			<FigmaEmbed/>
		</main>
	);
}
