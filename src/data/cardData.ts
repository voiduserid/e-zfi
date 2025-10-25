// src/data/cardData.ts
// Mock card data for development
// Later, this will be replaced by API calls

import type { CardType } from '../types/card.types';

export const mockCardData: CardType[] = [
  {
    id: '1',
    bank: 'Citibank',
    lastFour: '4532',
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    icon: '💳'
  },
  {
    id: '2',
    bank: 'Capital One',
    lastFour: '8821',
    gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    icon: '💎'
  },
  {
    id: '3',
    bank: 'Discover',
    lastFour: '2341',
    gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    icon: '✨'
  },
  {
    id: '4',
    bank: 'American Express',
    subtitle: 'BUSINESS CASH',
    lastFour: '7712',
    gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
    icon: '🏢'
  },
  {
    id: '5',
    bank: 'Chase',
    subtitle: 'Freedom Flex',
    lastFour: '5543',
    gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
    icon: '🎯'
  },
  {
    id: '6',
    bank: 'Apple Card',
    lastFour: '9182',
    gradient: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)',
    icon: '🍎'
  },
];