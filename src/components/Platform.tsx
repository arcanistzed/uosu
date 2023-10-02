import { Children, type ReactNode } from "react";
import { t } from "../i18n";
import { OnScroll, PopUp } from "./animations";

const Platform = () => {
	return (
		<main className="m-4 mx-auto flex max-w-2xl flex-col gap-16 p-8 text-2xl leading-loose text-indigo-200">
			<PopUp>
				<img src="/uosu/daniel-thorp.png" alt="Daniel Thorp" />
			</PopUp>
			{wrapChildren(
				t("platform")
					.toString()
					.split("\n\n")
					.map((paragraph, index) => <p key={index}>{paragraph}</p>),
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

export default Platform;
