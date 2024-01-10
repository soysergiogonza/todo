import './page.css';

export default function Home() {
	return (
		<main>
			<section className='badge'>
				<div className='badge__line'></div>
				<div className='badge__info'>
					<picture className='badge__info-logo'>
						<img src="/info.svg" alt="icon"/>
						<span>info</span>
					</picture>
					<p>The idea of this application is to learn About how can i work with an specific Architecture, building
						Designs and Diagrams about this <span className='special__caption'>Todo App</span></p>
				</div>
			</section>
			<section className='hero__img'>
				<details name="hero" className='hero__details'>
					<summary className='hero__summary'>First Level Design</summary>
					<img src="/excalidraw.png" alt="Excalidraw Design"/>
				</details>
				<details name='hero' className='hero__details'>
					<summary className='hero__summary'>Second Level Design</summary>
					<picture>
						<a href="https://www.figma.com/file/vBhWLMJNG2TdVOPC1YErlY/Todo-List-App?type=design&node-id=0%3A1&mode=design&t=6XqbhoXDTaCFRKqI-1" target='_blank' className='figma-logo'>
							<img src="/figma.svg" alt="Figma Logo" className=''/>
							<span>
								UI Design on Figma
							</span>
						</a>
					</picture>
					<img src="/todo-app.png" alt="Figma Design"/>
				</details>
			</section>
		</main>
	);
}
