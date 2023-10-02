import { useStore } from "@nanostores/react";
import { locale, type Locale } from "../i18n";
import Fade from "./animations/Fade";

const languages = {
	en: "EN",
	fr: "FR",
};

const Logo = () => {
	return (
		<Fade transition={{ duration: 1 }}>
			<ul className="absolute top-8 left-8 flex list-none flex-row gap-4">
				{Object.keys(languages).map((language) => (
					<li key={language}>
						<button
							className={`text-2xl font-bold transition-colors duration-500 ${
								useStore(locale) === language ? "text-blue-300" : "text-gray-400"
							}`}
							type="submit"
							onClick={() => locale.set(language as Locale)}
						>
							{languages[language as Locale]}
						</button>
					</li>
				))}
			</ul>
		</Fade>
	);
};

export default Logo;
