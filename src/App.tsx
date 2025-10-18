// src/App.tsx
// Main application component

import React from 'react';
import { Wallet } from './components/Wallet';
import { useCards } from './hooks/useCards';
import './App.css';

function App() {
  // Get cards data and actions from custom hook
  const { cards, loading, error, deleteCard } = useCards();

  return (
    <div className="app-container">
      <div className="app-main-content">
        
        {/* HEADER */}
        <div className="app-header">
          <h1 className="app-title">
            💳 Wallet
          </h1>
          <p className="app-subtitle">
            Your digital card collection
          </p>
        </div>

        {/* CARD COUNT */}
        {!loading && cards.length > 0 && (
          <div className="app-card-count">
            {cards.length} {cards.length === 1 ? 'card' : 'cards'}
          </div>
        )}

        {/* WALLET WITH CARDS */}
        <Wallet
          cards={cards}
          loading={loading}
          error={error}
          onDeleteCard={deleteCard}
        />

        {/* ACTIONS SECTION */}
        <div className="app-actions">
          <button className="btn btn-primary">
            ➕ Add New Card
          </button>
          <button className="btn btn-secondary">
            ⚙️ Settings
          </button>
        </div>

      </div>
    </div>
  );
}

export default App;