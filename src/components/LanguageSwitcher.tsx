import { useStore } from "@nanostores/react";
import { locale, type Locale } from "../i18n";
import Fade from "./animations/Fade";

const languages = {
	en: "EN",
	fr: "FR",
};

const LanguageSwitcher = () => {
	return (
		<Fade transition={{ duration: 1 }}>
			<ul className="absolute top-8 left-8 flex list-none flex-row gap-4">
				{Object.keys(languages).map((language) => (
					<li key={language}>
						<button
							className={`text-2xl font-bold transition-colors duration-500 after:absolute after:bottom-[-2px] after:left-0 after:h-[2px] after:w-full after:bg-medium relative after:transition-all after:duration-500 after:content-[''] after:translate-y-[-2px] ${
								useStore(locale) === language
									? "text-medium after:opacity-100"
									: "text-light after:opacity-0"
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

export default LanguageSwitcher;
