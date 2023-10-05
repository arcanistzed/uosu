import React, { Children, type ReactNode } from "react";
import ReactMarkdown, { type Components } from "react-markdown";
import remarkToc from "remark-toc";
import { t } from "../i18n";
import { OnScroll } from "./animations";

type ComponentProps = {
	children: React.ReactNode;
	[key: string]: any;
};

const components = {
	h1: ({ children, node, ...props }: ComponentProps) => (
		<h1 className="text-6xl font-bold" {...props}>
			{React.Children.map(children, (child) => {
				if (typeof child === "string") {
					return child;
				}
				return React.cloneElement(child as React.ReactElement, {
					className: "",
				});
			})}
		</h1>
	),
	h2: ({ children, node, ...props }: ComponentProps) => (
		<h2 className="text-4xl font-bold" {...props}>
			{React.Children.map(children, (child) => {
				if (typeof child === "string") {
					return child;
				}
				return React.cloneElement(child as React.ReactElement, {
					className: "",
				});
			})}
		</h2>
	),
	h3: ({ children, node, ...props }: ComponentProps) => (
		<h3 className="text-2xl font-bold" {...props}>
			{React.Children.map(children, (child) => {
				if (typeof child === "string") {
					return child;
				}
				return React.cloneElement(child as React.ReactElement, {
					className: "",
				});
			})}
		</h3>
	),
	h4: ({ children, node, ...props }: ComponentProps) => (
		<h4 className="text-xl font-bold" {...props}>
			{React.Children.map(children, (child) => {
				if (typeof child === "string") {
					return child;
				}
				return React.cloneElement(child as React.ReactElement, {
					className: "",
				});
			})}
		</h4>
	),
	h5: ({ children, node, ...props }: ComponentProps) => (
		<h5 className="text-lg font-bold" {...props}>
			{React.Children.map(children, (child) => {
				if (typeof child === "string") {
					return child;
				}
				return React.cloneElement(child as React.ReactElement, {
					className: "",
				});
			})}
		</h5>
	),
	h6: ({ children, node, ...props }: ComponentProps) => (
		<h6 className="font-bold" {...props}>
			{React.Children.map(children, (child) => {
				if (typeof child === "string") {
					return child;
				}
				return React.cloneElement(child as React.ReactElement, {
					className: "",
				});
			})}
		</h6>
	),
	a: ({ children, node, ...props }: ComponentProps) => (
		<a className="text-blue-900" {...props}>
			{children}
		</a>
	),
	ul: ({ children, node, ...props }: ComponentProps) => {
		const { depth, ordered, className, ...rest } = props as {
			depth: number;
			ordered: boolean;
			className?: "contains-task-list";
		};

		return (
			<ul className="list-disc" {...rest}>
				{children}
			</ul>
		);
	},
	ol: ({ children, node, ...props }: ComponentProps) => {
		const { depth, ordered, className, ...rest } = props as {
			depth: number;
			ordered: boolean;
			className?: "contains-task-list";
		};

		return (
			<ol className="list-decimal" {...rest}>
				{children}
			</ol>
		);
	},
	li: ({ children, node, ...props }: ComponentProps) => {
		const { checked, className, ordered, ...rest } = props as {
			checked: boolean;
			className?: "task-list-item";
			ordered: boolean;
		};

		if (className === "task-list-item") {
			return (
				<li className="ml-4" {...rest}>
					<input type="checkbox" checked={checked} readOnly />
					{children}
				</li>
			);
		}
		return (
			<li className="ml-4" {...rest}>
				{children}
			</li>
		);
	},
	blockquote: ({ children, node, ...props }: ComponentProps) => (
		<blockquote className="border-l-4 border-gray-300 pl-4" {...props}>
			{children}
		</blockquote>
	),
	table: ({ children, node, ...props }: ComponentProps) => (
		<table className="table-auto border-collapse border border-gray-300" {...props}>
			{children}
		</table>
	),
	thead: ({ children, node, ...props }: ComponentProps) => (
		<thead className="border-collapse border border-gray-300" {...props}>
			{children}
		</thead>
	),
	tbody: ({ children, node, ...props }: ComponentProps) => (
		<tbody className="border-collapse border border-gray-300" {...props}>
			{children}
		</tbody>
	),
	tr: ({ children, node, ...props }: ComponentProps) => (
		<tr className="border-collapse border border-gray-300" {...props}>
			{children}
		</tr>
	),
	th: ({ children, node, ...props }: ComponentProps) => (
		<th className="border-collapse border border-gray-300" {...props}>
			{children}
		</th>
	),
	td: ({ children, node, ...props }: ComponentProps) => {
		const { style, isHeader } = props as {
			style: React.CSSProperties;
			isHeader: boolean;
		};

		return (
			<td
				className={`border-collapse border border-gray-300 ${isHeader ? "font-bold" : ""}`}
				style={style}
				{...props}
			>
				{children}
			</td>
		);
	},
	code: ({ children, inline, ...props }: ComponentProps) => {
		const className = inline ? "rounded-lg bg-gray-200 px-2 py-1" : "rounded-lg bg-gray-300 p-4";
		return (
			<code className={className} {...props}>
				{children}
			</code>
		);
	},
	em: ({ children, node, ...props }: ComponentProps) => (
		<em className="italic" {...props}>
			{children}
		</em>
	),
	strong: ({ children, node, ...props }: ComponentProps) => (
		<strong className="font-bold" {...props}>
			{children}
		</strong>
	),
	del: ({ children, node, ...props }: ComponentProps) => (
		<del className="line-through" {...props}>
			{children}
		</del>
	),
	hr: ({ ...props }: ComponentProps) => <hr className="border-gray-300" {...props} />,
} as unknown as Partial<Components>;

const Policies = () => {
	return (
		<main className="m-4 mx-auto flex max-w-2xl flex-col gap-4 p-8 text-2xl leading-loose text-indigo-200 mt-24">
			{wrapChildren(
				t("policies.markdown")
					.toString()
					.split("\n")
					.map((paragraph, index) => {
						return (
							<ReactMarkdown components={components} remarkPlugins={[remarkToc]} key={index}>
								{paragraph}
							</ReactMarkdown>
						);
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

export default Policies;
