import React, { createContext, useContext, useState, useEffect } from "react";

type Currency = {
  code: string;
  symbol: string;
  label: string;
};

const currencies: Currency[] = [
  { code: "NRS", symbol: "रू", label: "Nepalese Rupee" },
  { code: "USD", symbol: "$", label: "US Dollar" },
  { code: "EUR", symbol: "€", label: "Euro" },
  { code: "INR", symbol: "₹", label: "Indian Rupee" },
];

interface CurrencyContextType {
  selectedCurrency: Currency;
  setCurrency: (code: string) => void;
  currencies: Currency[];
}

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined);

export const CurrencyProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [selectedCurrency, setSelectedCurrency] = useState<Currency>(currencies[0]);

  useEffect(() => {
    const saved = localStorage.getItem("app_currency");
    if (saved) {
      const found = currencies.find((c) => c.code === saved);
      if (found) setSelectedCurrency(found);
    }
  }, []);

  const setCurrency = (code: string) => {
    const found = currencies.find((c) => c.code === code);
    if (found) {
      setSelectedCurrency(found);
      localStorage.setItem("app_currency", code);
    }
  };

  return (
    <CurrencyContext.Provider value={{ selectedCurrency, setCurrency, currencies }}>
      {children}
    </CurrencyContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useCurrency = () => {
  const context = useContext(CurrencyContext);
  if (!context) throw new Error("useCurrency must be used within a CurrencyProvider");
  return context;
};