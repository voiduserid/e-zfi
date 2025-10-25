// src/hooks/useCards.ts
// Custom hook to manage card data
// Handles fetching, adding, updating, deleting cards

import { useState, useEffect, useCallback } from 'react';
import type { CardType } from '../types/card.types';
import { apiClient } from '../services/api';
import { ENDPOINTS } from '../utils/constants';
import { mockCardData } from '../data/cardData';


// state type
interface UseCardsState {
    cards: CardType[];
    loading: boolean;
    error: string | null;
};

// actions types
interface UseCardsActions {
    fetchCards: () => Promise<void>;
    addCard: (card: Omit<CardType, 'id'>) => Promise<void>;
    updateCard: (id: string, card: Partial<CardType>) => Promise<void>;
    deleteCard: (id: string) => Promise<void>;
    refetch: () => Promise<void>;
}

// hook return type
type UseCardsReturn = UseCardsState & UseCardsActions;

/*
 * Custom hook for managing cards
 * 
 * Usage in component:
 * const { cards, loading, error, deleteCard } = useCards();
 */
export const useCards = (): UseCardsReturn => {
    const [state, setState] = useState<UseCardsState>({
        cards: [],
        loading: false,
        error: null
    });

    // ==========================================
    // FETCH ALL CARDS
    // ==========================================
    const fetchCards = useCallback(async () => {
        setState(prev => ({ ...prev, loading: true, error: null }));
        try {

            // For now, use mock data
            // When backend is ready, replace with:
            // const data = await apiClient.get<CardType[]>(ENDPOINTS.CARDS.GET_ALL);

            const data = mockCardData;

            setState(prev => ({
                ...prev,
                cards: data,
                loading: false
            }));

            console.log('Cards loaded:', data);
        } catch (error) {
            const message = error instanceof Error ? error.message : 'Failed to fetch cards';
            setState(prev => ({
                ...prev,
                error: message,
                loadign: false,
            }));
            console.error('Error fetching cards:', message);
        };
    }, []);

    // ==========================================
    // ADD NEW CARD
    // ==========================================
    const addCard = useCallback(async (card: Omit<CardType, 'id'>) => {
        setState(prev => ({ ...prev, loading: true, error: null }));
        try {
            // For now, add to mock data
            // When backend is ready, replace with:
            // const newCard = await apiClient.post<CardType>(ENDPOINTS.CARDS.CREATE, card);

            const newCard: CardType = {
                ...card,
                id: Date.now().toString(), // temporary ID
            };

            setState(prev => ({
                ...prev,
                cards: [...prev.cards, newCard],
                loading: false
            }));

            console.log('Card added:', newCard);
        } catch (error) {
            const message = error instanceof Error ? error.message : 'Failed to add card';
            setState(prev => ({
                ...prev,
                error: message,
                loadign: false
            }));
            console.error('Error adding card:', message);
        };
    }, []);

    // ==========================================
    // UPDATE CARD
    // ==========================================
    const updateCard = useCallback(async (id: string, card: Partial<CardType>) => {
        setState(prev => ({ ...prev, loadign: true, error: null }));
        try {
            // For now, update mock data
            // When backend is ready, replace with:
            // const updated = await apiClient.put<CardType>(ENDPOINTS.CARDS.UPDATE(id), card);
            
            setState(prev => ({
                ...prev,
                cards: prev.cards.map(c => c.id === id ? { ...c, ...card } : c),
                loadign: false
            }));

            console.log('Card updated:', id);
        } catch (error) {
            const message = error instanceof Error ? error.message : 'Failed to update card';
            setState(prev => ({
                ...prev,
                error: message,
                loading: false
            }));
            console.error('Error updating card:', message);
        }
    }, []);
    // ==========================================
    // DELETE CARD
    // ==========================================
    const deleteCard = useCallback(async (id: string) => {
        setState(prev => ({ ...prev, loadign: true, error: null }));
        try {
            // for now, delete from mock data
            // when backend is ready, replace with:
            // await apiClient.delete(ENDPOINTS.CARDS.DELETE(id));

            setState(prev => ({
                ...prev,
                cards: prev.cards.filter(c => c.id !== id),
                loadign: false
            }));

            console.log('Card deleted:', id);
        } catch (error) {
            const message = error instanceof Error ? error.message : 'Failed to delete card';
            setState(prev => ({
                ...prev,
                error: message,
                loading: false
            }));
            console.error('Error deleting card:', message);
        };
    }, []);
    
    // ==========================================
    // REFETCH CARDS
    // ==========================================
    const refetch = useCallback(() => {
        fetchCards();
    }, [fetchCards]);

    // ==========================================
    // LOAD CARDS ON MOUNT
    // ==========================================
    useEffect(() => {
        fetchCards();
    }, [fetchCards]);

    return {
        cards: state.cards,
        loadign: state.loading,
        error: state.error,
        fetchCards,
        addCard,
        updateCard,
        deleteCard,
        refetch
    };
};