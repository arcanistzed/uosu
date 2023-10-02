import type { Transition } from "framer-motion";

export type MotionProps = {
	children: React.ReactElement;
	transition?: Transition;
	className?: string;
}
