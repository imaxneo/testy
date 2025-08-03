import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  role: 'user' | 'admin';
  subscription: 'free' | 'pro' | 'enterprise';
}

interface AppState {
  // Theme
  theme: 'light' | 'dark' | 'system';
  setTheme: (theme: 'light' | 'dark' | 'system') => void;
  
  // User
  user: User | null;
  setUser: (user: User | null) => void;
  
  // Language
  language: 'en' | 'ar';
  setLanguage: (language: 'en' | 'ar') => void;
  
  // Notifications
  notifications: Array<{
    id: string;
    title: string;
    message: string;
    type: 'info' | 'success' | 'warning' | 'error';
    timestamp: Date;
    read: boolean;
  }>;
  addNotification: (notification: Omit<AppState['notifications'][0], 'id' | 'timestamp' | 'read'>) => void;
  markNotificationRead: (id: string) => void;
  
  // Onboarding
  onboardingStep: number;
  setOnboardingStep: (step: number) => void;
  onboardingData: {
    goals: string[];
    businessType: string;
    connectedAccounts: string[];
  };
  setOnboardingData: (data: Partial<AppState['onboardingData']>) => void;
}

export const useAppStore = create<AppState>()(
  persist(
    (set, get) => ({
      // Theme
      theme: 'system',
      setTheme: (theme) => set({ theme }),
      
      // User
      user: null,
      setUser: (user) => set({ user }),
      
      // Language
      language: 'en',
      setLanguage: (language) => set({ language }),
      
      // Notifications
      notifications: [],
      addNotification: (notification) => set((state) => ({
        notifications: [{
          ...notification,
          id: Math.random().toString(36).substr(2, 9),
          timestamp: new Date(),
          read: false
        }, ...state.notifications]
      })),
      markNotificationRead: (id) => set((state) => ({
        notifications: state.notifications.map(n => 
          n.id === id ? { ...n, read: true } : n
        )
      })),
      
      // Onboarding
      onboardingStep: 0,
      setOnboardingStep: (step) => set({ onboardingStep: step }),
      onboardingData: {
        goals: [],
        businessType: '',
        connectedAccounts: []
      },
      setOnboardingData: (data) => set((state) => ({
        onboardingData: { ...state.onboardingData, ...data }
      }))
    }),
    {
      name: 'insightnode-storage',
      partialize: (state) => ({
        theme: state.theme,
        language: state.language,
        onboardingStep: state.onboardingStep,
        onboardingData: state.onboardingData
      })
    }
  )
);