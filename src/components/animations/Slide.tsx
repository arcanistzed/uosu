import { motion } from "framer-motion";
import type { MotionProps } from "./types";

type Direction = "top" | "left" | "bottom" | "right";

type SlideProps = MotionProps & {
	direction: Direction;
};

const Slide = ({ children, transition, direction, ...rest }: SlideProps) => {
	const [x, y] = (() => {
		switch (direction) {
			case "top":
				return [0, "-100vh"];
			case "left":
				return ["-100vw", 0];
			case "bottom":
				return [0, "100vh"];
			case "right":
				return ["100vw", 0];
		}
	})();

	return (
		<motion.div initial={{ x, y }} animate={{ x: 0, y: 0 }} transition={transition} {...rest}>
			{children}
		</motion.div>
	);
};

export default Slide;
