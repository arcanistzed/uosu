import { t } from "../i18n";

const Footer = () => {
	return (
		<footer className="p-4 text-center text-sm text-gray-400">
			<p>{t("footer.copyright")}</p>
			<p>
				{t("footer.made-with")}{" "}
				<a href="https://astro.build/" className="text-blue-200">
					Astro
				</a>
				,{" "}
				<a href="https://reactjs.org/" className="text-blue-200">
					React
				</a>
				,{" "}
				<a href="https://tailwindcss.com/" className="text-blue-200">
					Tailwind CSS
				</a>
				, and{" "}
				<a href="https://framer.com/motion/" className="text-blue-200">
					Framer Motion
				</a>
				.
			</p>
		</footer>
	);
};

export default Footer;
