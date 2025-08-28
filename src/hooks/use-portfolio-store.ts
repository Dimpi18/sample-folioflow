"use client";

import { useState, useEffect, useCallback } from 'react';
import type { PortfolioData } from '@/types/portfolio';
import { initialPortfolioData } from '@/types/portfolio';

const STORAGE_KEY = 'folioflow-data';

export function usePortfolioStore() {
  const [portfolioData, setPortfolioData] = useState<PortfolioData | null>(null);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    try {
      const item = window.localStorage.getItem(STORAGE_KEY);
      if (item) {
        setPortfolioData(JSON.parse(item));
      } else {
        setPortfolioData(initialPortfolioData);
      }
    } catch (error) {
      console.warn(`Error reading localStorage key “${STORAGE_KEY}”:`, error);
      setPortfolioData(initialPortfolioData);
    } finally {
        setIsInitialized(true);
    }
  }, []);

  const setAndPersistPortfolioData = useCallback((data: PortfolioData) => {
    try {
      setPortfolioData(data);
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch (error) {
      console.warn(`Error setting localStorage key “${STORAGE_KEY}”:`, error);
    }
  }, []);

  return { portfolioData, setPortfolioData: setAndPersistPortfolioData, isInitialized };
}
