// src/components/Card.tsx
// Individual credit card component with hover animation

import React from 'react';
import { motion } from 'framer-motion';
import type { CardType } from '../types/card.types';
import './Card.css';

interface CardProps {
  card: CardType;
  index: number;
  totalCards: number;
  hoveredIndex: number | null;
  onDelete?: (id: string) => void;
}

export const Card: React.FC<CardProps> = ({
  card,
  index,
  totalCards,
  hoveredIndex,
  onDelete,
}) => {
  // ==========================================
  // DETERMINE HOVER STATE
  // ==========================================
  
  // Is THIS card being hovered?
  const isHovered = hoveredIndex === index;
  
  // Are we hovering a card BELOW this one?
  const isBeforeHovered = hoveredIndex !== null && index < hoveredIndex;

  // ==========================================
  // CALCULATE ANIMATION VALUES
  // ==========================================
  
  // How much space between each card
  const cardSpacing = 60; // pixels
  
  // Base vertical offset (Y position)
  const baseOffset = index * cardSpacing;
  
  // Final Y position
  const yPosition = isHovered 
    ? baseOffset 
    : isBeforeHovered 
    ? index * cardSpacing 
    : baseOffset;
  
  // Scale (make it slightly bigger when hovered)
  const cardScale = isHovered ? 1.02 : 1;
  
  // Z-index (which card appears on top)
  const layerOrder = isHovered ? 50 : totalCards - index;

  return (
    <motion.div
      className="card-wrapper"
      style={{ zIndex: layerOrder }}
      initial={{ y: baseOffset }}
      animate={{
        y: yPosition,
        scale: cardScale,
      }}
      transition={{
        type: 'spring',
        stiffness: 300,
        damping: 30,
      }}
    >
      <div
        className="card-body"
        style={{ background: card.gradient }}
      >
        <div className="card-content">
          {/* TOP SECTION: Bank name and icon */}
          <div className="card-top">
            <div className="card-bank-info">
              <h3 className="card-bank-name">
                {card.bank}
              </h3>
              
              {/* Only show subtitle if it exists */}
              {card.subtitle && (
                <p className="card-subtitle">
                  {card.subtitle}
                </p>
              )}
            </div>
            
            <div className="card-icon">
              {card.icon}
            </div>
          </div>

          {/* BOTTOM SECTION: Card number and delete button */}
          <div className="card-bottom">
            <div className="card-number-label">
              Card Number
            </div>
            <div className="card-number">
              •••• •••• •••• {card.lastFour}
            </div>
            
            {/* Delete button (shows on hover) */}
            {onDelete && (
              <button
                className="card-delete-btn"
                onClick={() => onDelete(card.id)}
                title="Delete card"
              >
                🗑️ Delete
              </button>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};