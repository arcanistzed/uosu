import { motion } from "framer-motion";
import type { MotionProps } from "./types";

// Popup from the bottom of the screen with a bounce and skew
const PopUp = ({ children, transition, ...rest }: MotionProps) => {
	return (
		<motion.div
			initial={{ y: 100, skewY: 10, opacity: 0 }}
			animate={{ y: 0, skewY: 0, opacity: 1 }}
			transition={transition}
			{...rest}
		>
			{children}
		</motion.div>
	);
};

export default PopUp;
