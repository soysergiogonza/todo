import Image from 'next/image';

import {CoverSource} from '~/interfaces';

import styles from './Cover.module.css';

export const Cover = ({source, className, style, width, height}: CoverSource) => {
	return (
		<picture className={`${styles.picture} ${className ? className : ''}`} style={style}>
			<Image src={source} alt="cover" width={width} height={height} className={styles.cover} priority={true}
			/>
		</picture>
	);
};