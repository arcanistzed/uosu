import { Children, type ReactNode } from "react";
import { t } from "../i18n";
import { OnScroll, PopUp } from "./animations";
import ReactMarkdown from "react-markdown";

const Intro = () => {
	return (
		<main className="m-4 mx-auto flex max-w-2xl flex-col gap-16 p-8 text-2xl leading-loose text-indigo-200">
			<PopUp>
				<img src="/uosu/daniel-thorp.png" alt="Daniel Thorp" />
			</PopUp>
			{wrapChildren(
				t("index.intro")
					.toString()
					.split("\n\n")
					.map((paragraph, index) => {
						return <ReactMarkdown key={index}>{paragraph}</ReactMarkdown>;
					}),
			)}
		</main>
	);
};

const wrapChildren = (...children: ReactNode[]) => {
	return Children.map(children, (child) => {
		return (
			<OnScroll transition={{ duration: 0.5, delay: 0.5 }}>
				<>{child}</>
			</OnScroll>
		);
	});
};

export default Intro;
