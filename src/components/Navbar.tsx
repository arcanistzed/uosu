import { t } from "../i18n";
import Fade from "./animations/Fade";

const links = {
	home: "/uosu",
	platform: "/uosu/platform",
	resume: "/resume",
	instagram: "https://instagram.com/daniel.thorp.seuo.uosu",
} as const;

type Links = typeof links;
type Link = keyof Links;

const Navbar = () => {
	const route = window.location.pathname;

	return (
		<Fade transition={{ duration: 1 }}>
			<ul className="absolute top-8 right-8 flex list-none flex-row gap-4">
				{Object.keys(links).map((link) => (
					<li key={link}>
						<a
							className={`text-2xl font-bold transition-colors duration-500 after:absolute after:bottom-[-2px] after:left-0 after:h-[2px] after:w-full after:bg-medium relative after:transition-all after:duration-500 after:content-[''] after:translate-y-[-2px] ${
								route === links[link as Link]
									? "text-medium after:opacity-100"
									: "text-light after:opacity-0"
							}`}
							href={links[link as Link]}
							target={link === "resume" ? "_blank" : "_self"}
							rel={link === "resume" ? "noreferrer" : ""}
						>
							{t(`navbar.${link as Link}`)}
						</a>
					</li>
				))}
			</ul>
		</Fade>
	);
};

export default Navbar;
