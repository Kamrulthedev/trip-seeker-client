/* eslint-disable @typescript-eslint/no-explicit-any */
import { motion } from 'framer-motion';



const itemVariants: any = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1, y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};


// Component 2: ContactCard
export const ContactCard = ({ icon, title, description, href }: { icon: React.ReactNode, title: string, description: string, href?: string }) => {
  const content = (
    <motion.div
      className="flex items-start gap-4 space-y-5"
      variants={itemVariants}
    >
      <div className="flex-shrink-0 w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-100 to-green-100 text-blue-600">
        {icon}
      </div>
      <div>
        <h3 className="text-lg font-bold text-gray-800">{title}</h3>
        <p className="text-gray-500">{description}</p>
      </div>
    </motion.div>
  );

  return href ? <a href={href} className="hover:text-green-600">{content}</a> : content;
};