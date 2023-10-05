import { useState } from "react";
import { t } from "../i18n";
import Fade from "./animations/Fade";

const links = {
	home: "/uosu/",
	platform: "/uosu/platform",
	resume: "/resume",
	instagram: "https://instagram.com/daniel.thorp.seuo.uosu",
} as const;

type Links = typeof links;
type Link = keyof Links;

const Nav = () => {
	return (
		<ul className="flex flex-col gap-4 xl:flex-row xl:gap-8 items-center justify-center">
			{Object.entries(links).map(([key, value]) => {
				const route = window.location.pathname;

				return (
					<li key={key}>
						<a
							className={`text-2xl font-bold transition-colors duration-500 after:absolute after:bottom-[-2px] after:left-0 after:h-[2px] after:w-full after:bg-medium relative after:transition-all after:duration-500 after:content-[''] after:translate-y-[-2px] ${
								route === value ? "text-medium after:opacity-100" : "text-light after:opacity-0"
							}`}
							href={value}
							target={value.includes("/uosu") ? "_self" : "_blank"}
							rel={value.includes("/uosu") ? "" : "noreferrer"}
						>
							{t(`navbar.${key as Link}`)}
						</a>
					</li>
				);
			})}
		</ul>
	);
};

const Navbar = () => {
	const [open, setOpen] = useState(false);

	return (
		<>
			<Fade transition={{ duration: 1 }}>
				<>
					<nav
						aria-label={t("navbar.aria.desktop")}
						className="absolute top-8 right-8 list-none flex-row gap-4 hidden xl:flex"
					>
						<Nav />
					</nav>
					<button
						className="absolute top-6 right-4 z-20 xl:hidden"
						onClick={() => setOpen(!open)}
						aria-pressed={open}
					>
						<svg className="h-8 w-8 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
							<path
								d="M0 3h20v2H0V3z"
								className={`origin-top-left transition duration-500 ${
									open ? "translate-x-1/4 rotate-45" : ""
								}`}
							/>
							<path d="M0 9h20v2H0V9z" className={`transition duration-500 ${open ? "opacity-0" : ""}`} />
							<path
								d="M0 15h20v2H0v-2z"
								className={`origin-bottom-left transition duration-500 ${
									open ? "translate-x-1/4 -rotate-45" : ""
								}`}
							/>
						</svg>
					</button>
				</>
			</Fade>
			<nav
				aria-label={t("navbar.aria.mobile")}
				className={`fixed inset-0 z-10 flex w-screen flex-col flex-wrap items-center justify-center gap-8 bg-dark p-6 text-medium transition duration-500 ${
					open ? "" : "translate-x-full"
				}`}
				aria-hidden={!open}
			>
				<Nav />
			</nav>
		</>
	);
};

export default Navbar;
