// src/components/Wallet.tsx
// Wallet container that holds all cards

import React, { useState } from 'react';
import { Card } from './Card';
import type { CardType } from '../types/card.types';
import './Wallet.css';

interface WalletProps {
  cards: CardType[];
  loading?: boolean;
  error?: string | null;
  onDeleteCard?: (id: string) => Promise<void>;
}

export const Wallet: React.FC<WalletProps> = ({
  cards,
  loading = false,
  error = null,
  onDeleteCard,
}) => {
  // Track which card is currently hovered
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // ==========================================
  // CALCULATE CONTAINER HEIGHT
  // ==========================================
  const cardSpacing = 60; // pixels
  const singleCardHeight = 192; // 12rem = 192px
  const walletHeight = cards.length * cardSpacing + singleCardHeight;

  // ==========================================
  // HANDLE DELETE
  // ==========================================
  const handleDelete = async (id: string) => {
    if (onDeleteCard) {
      await onDeleteCard(id);
    }
  };

  // ==========================================
  // RENDER LOADING STATE
  // ==========================================
  if (loading) {
    return (
      <div className="wallet-loading">
        <p>Loading cards...</p>
      </div>
    );
  }

  // ==========================================
  // RENDER ERROR STATE
  // ==========================================
  if (error) {
    return (
      <div className="wallet-error">
        <p>⚠️ {error}</p>
      </div>
    );
  }

  // ==========================================
  // RENDER EMPTY STATE
  // ==========================================
  if (cards.length === 0) {
    return (
      <div className="wallet-empty">
        <p>No cards yet. Add your first card!</p>
      </div>
    );
  }

  // ==========================================
  // RENDER WALLET WITH CARDS
  // ==========================================
  return (
    <div
      className="wallet-container"
      style={{ height: `${walletHeight}px` }}
    >
      {cards.map((card, index) => (
        <div
          key={card.id}
          className="card-hover-area"
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <Card
            card={card}
            index={index}
            totalCards={cards.length}
            hoveredIndex={hoveredIndex}
            onDelete={handleDelete}
          />
        </div>
      ))}
    </div>
  );
};