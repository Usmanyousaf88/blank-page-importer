import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface CardRootProps {
  className?: string;
  children?: ReactNode;
  title?: string;
  description?: string;
  icon?: ReactNode;
}

interface CardHeaderProps {
  className?: string;
  children?: ReactNode;
}

interface CardTitleProps {
  className?: string;
  children?: ReactNode;
}

interface CardContentProps {
  className?: string;
  children?: ReactNode;
}

const CardRoot = ({ className = '', children, title, description, icon }: CardRootProps) => {
  if (title || description || icon) {
    return (
      <motion.div
        className={`bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 ${className}`}
        whileHover={{ y: -5 }}
        transition={{ duration: 0.2 }}
      >
        <div className="flex flex-col items-center text-center">
          {icon && <div className="text-primary mb-4">{icon}</div>}
          {title && <h3 className="text-xl font-semibold mb-2">{title}</h3>}
          {description && <p className="text-gray-600 dark:text-gray-400">{description}</p>}
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      className={`bg-white dark:bg-gray-800 rounded-xl shadow-lg ${className}`}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.div>
  );
};

const CardHeader = ({ className = '', children }: CardHeaderProps) => {
  return <div className={`p-6 ${className}`}>{children}</div>;
};

const CardTitle = ({ className = '', children }: CardTitleProps) => {
  return <h3 className={`text-xl font-semibold ${className}`}>{children}</h3>;
};

const CardContent = ({ className = '', children }: CardContentProps) => {
  return <div className={`px-6 pb-6 ${className}`}>{children}</div>;
};

const Card = Object.assign(CardRoot, {
  Header: CardHeader,
  Title: CardTitle,
  Content: CardContent,
});

export default Card;
