import { motion } from "framer-motion";
import type { MotionProps } from "./types";

const Fade = ({ children, transition, ...rest }: MotionProps) => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{
				opacity: 1,
				transition,
			}}
			{...rest}
		>
			{children}
		</motion.div>
	);
};

export default Fade;
