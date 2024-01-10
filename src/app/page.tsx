import Image from 'next/image';
import './page.css';

export default function Home() {
	return (
		<main>
			<section className='badge'>
				<div className='badge__line'></div>
				<div className='badge__info'>
					<picture className='badge__info-logo'>
						<Image src="/info.svg" alt="icon" width={32} height={32}/>
						<span>info</span>
					</picture>
					<p>The idea of this application is to learn About how can i work with an specific Architecture, building
						Designs and Diagrams about this <span className='special__caption'>Todo App</span></p>
				</div>
			</section>
			<section className='hero__img'>
				<details name="hero" className='hero__details'>
					<summary className='hero__summary'>First Level Design</summary>
					<Image
						src="/excalidraw.png"
						alt="Excalidraw Design"
						width={100}
						height={100}
						sizes="100vw"
						style={{width: '100%', height: '100%'}}
					/>
				</details>
				<details name='hero' className='hero__details'>
					<summary className='hero__summary'>Second Level Design</summary>
					<picture>
						<a href="https://www.figma.com/file/vBhWLMJNG2TdVOPC1YErlY/Todo-List-App?type=design&node-id=0%3A1&mode=design&t=6XqbhoXDTaCFRKqI-1" target='_blank' className='figma-logo'>
							<Image
								src="/figma.svg"
								alt="Figma Logo"
								width={32}
								height={32}
							/>
							<span>
								UI Design on Figma
							</span>
						</a>
					</picture>
					<Image
						src="/todo-app.png"
						alt="Figma Design"
						width={100}
						height={100}
						sizes="100vw"
						style={{width: '100%', height: '100%'}}
					/>
				</details>
			</section>
		</main>
	);
}
