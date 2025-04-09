'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { type IconType } from 'react-icons';
import clsx from 'clsx';

interface CardProps {
  /**
   * Card title
   */
  title: string;
  
  /**
   * Card description or content
   */
  description?: string;
  
  /**
   * URL for the card image
   */
  imageUrl?: string;
  
  /**
   * Alt text for the image
   */
  imageAlt?: string;
  
  /**
   * Icon to display in the card
   */
  icon?: IconType;
  
  /**
   * Action button text
   */
  buttonText?: string;
  
  /**
   * Action button click handler
   */
  onButtonClick?: () => void;
  
  /**
   * Card variant
   */
  variant?: 'neumorphic' | 'glassmorphism' | 'default';
  
  /**
   * Additional CSS classes
   */
  className?: string;
  
  /**
   * Card width
   */
  width?: string;
  
  /**
   * Card height
   */
  height?: string;
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  imageUrl,
  imageAlt,
  icon: Icon,
  buttonText,
  onButtonClick,
  variant = 'default',
  className,
  width = 'auto',
  height = 'auto',
}) => {
  const cardClasses = clsx(
    'rtl overflow-hidden rounded-xl transition-all duration-300 p-6 flex flex-col',
    {
      // Neumorphic style
      'bg-gray-100 shadow-neumorphic hover:shadow-neumorphic-hover': variant === 'neumorphic',
      
      // Glassmorphism style
      'bg-white/20 backdrop-blur-md border border-white/30 shadow-glassmorphism': variant === 'glassmorphism',
      
      // Default style
      'bg-white shadow-md hover:shadow-lg': variant === 'default',
    },
    className
  );
  
  const buttonClasses = clsx(
    'mt-auto py-2 px-4 rounded-lg font-medium transition-all duration-300 text-white text-center',
    {
      // Neumorphic button
      'bg-primary shadow-neumorphic-button hover:shadow-neumorphic-button-hover active:shadow-neumorphic-button-active': 
        variant === 'neumorphic',
      
      // Glassmorphism button
      'bg-primary/80 backdrop-blur-sm border border-white/30 hover:bg-primary/90': 
        variant === 'glassmorphism',
      
      // Default button
      'bg-primary hover:bg-primary/90': 
        variant === 'default',
    }
  );

  return (
    <motion.div
      className={cardClasses}
      style={{ width, height }}
      whileHover={{ y: -5 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      {imageUrl && (
        <div className="mb-4 overflow-hidden rounded-lg -mx-6 -mt-6">
          <img 
            src={imageUrl} 
            alt={imageAlt || title} 
            className="w-full h-48 object-cover"
          />
        </div>
      )}
      
      <div className="flex items-start gap-3">
        {Icon && (
          <div className={clsx(
            'flex-shrink-0 p-2 rounded-full',
            {
              'bg-primary/10 text-primary': variant === 'default' || variant === 'neumorphic',
              'bg-white/30 text-primary backdrop-blur-sm': variant === 'glassmorphism',
            }
          )}>
            <Icon size={24} />
          </div>
        )}
        
        <div className="flex-1">
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          {description && (
            <p className="text-gray-700 mb-4">{description}</p>
          )}
        </div>
      </div>
      
      {buttonText && (
        <button 
          onClick={onButtonClick} 
          className={buttonClasses}
        >
          {buttonText}
        </button>
      )}
    </motion.div>
  );
};

export default Card;