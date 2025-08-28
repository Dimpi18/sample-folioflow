"use client";

import { useState, useEffect, useCallback, createContext, useContext, ReactNode, createElement } from 'react';
import type { PortfolioData } from '@/types/portfolio';
import { initialPortfolioData } from '@/types/portfolio';
import { themes } from '@/lib/themes';

const DATA_STORAGE_KEY = 'folioflow-data';
const THEME_STORAGE_KEY = 'folioflow-theme';


type PortfolioStore = {
    portfolioData: PortfolioData | null;
    setPortfolioData: (data: PortfolioData) => void;
    theme: string;
    setTheme: (themeId: string) => void;
    applyTheme: () => void;
    isInitialized: boolean;
};

const PortfolioContext = createContext<PortfolioStore | undefined>(undefined);

export function PortfolioStoreProvider({ children }: { children: ReactNode }) {
  const [portfolioData, setPortfolioData] = useState<PortfolioData | null>(null);
  const [theme, setThemeState] = useState('default');
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    // Load data from local storage
    try {
      const item = window.localStorage.getItem(DATA_STORAGE_KEY);
      if (item) {
        setPortfolioData(JSON.parse(item));
      } else {
        setPortfolioData(initialPortfolioData);
      }
    } catch (error) {
      console.warn(`Error reading localStorage key “${DATA_STORAGE_KEY}”:`, error);
      setPortfolioData(initialPortfolioData);
    }

    // Load theme from local storage
     try {
      const storedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);
      if (storedTheme && themes.some(t => t.id === storedTheme)) {
        setThemeState(storedTheme);
      }
    } catch (error) {
        console.warn(`Error reading localStorage key “${THEME_STORAGE_KEY}”:`, error);
    }

    setIsInitialized(true);
  }, []);

  const setAndPersistPortfolioData = useCallback((data: PortfolioData) => {
    try {
      setPortfolioData(data);
      window.localStorage.setItem(DATA_STORAGE_KEY, JSON.stringify(data));
    } catch (error)
 {
      console.warn(`Error setting localStorage key “${DATA_STORAGE_KEY}”:`, error);
    }
  }, []);

  const applyTheme = useCallback(() => {
    const selectedTheme = themes.find(t => t.id === theme);
    if (!selectedTheme) return;

    const root = document.documentElement;
    root.classList.remove(...themes.map(t => t.id).filter(t => t !== 'default'));
    if (theme !== 'default') {
        root.classList.add(theme);
    }

    const currentTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? selectedTheme.dark : selectedTheme.light;
    
    for (const [key, value] of Object.entries(currentTheme)) {
       root.style.setProperty(`--${key}`, value);
    }

  }, [theme]);


  useEffect(() => {
    applyTheme();
  }, [theme, applyTheme]);

  const setAndPersistTheme = useCallback((themeId: string) => {
     try {
        setThemeState(themeId);
        window.localStorage.setItem(THEME_STORAGE_KEY, themeId);
    } catch (error) {
        console.warn(`Error setting localStorage key “${THEME_STORAGE_KEY}”:`, error);
    }
  }, [])


  const value = {
      portfolioData,
      setPortfolioData: setAndPersistPortfolioData,
      theme,
      setTheme: setAndPersistTheme,
      applyTheme,
      isInitialized
  };

  return createElement(PortfolioContext.Provider, { value }, children);
}

export function usePortfolioStore() {
    const context = useContext(PortfolioContext);
    if(context === undefined) {
        throw new Error('usePortfolioStore must be used within a PortfolioStoreProvider');
    }
    return context;
}
