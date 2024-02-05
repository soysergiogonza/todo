import Image from 'next/image';

import {IconSource} from '~/interfaces';

import styles from './IconPage.module.css';

export const IconPage = ({source, className, style, width = 100, height = 100}: IconSource) => {
	return (
		<picture className={`${styles.picture} ${className ? className : ''}`} style={style}>
			<Image src={source} alt="icon" width={width} height={height} priority={false}
			       loading="lazy"
			/>
		</picture>
	);
};
