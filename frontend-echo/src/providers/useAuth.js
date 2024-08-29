import { useState, useEffect } from 'react';

const useAuth = () => {
  const [walletAddress, setWalletAddress] = useState(null);

  useEffect(() => {
    const checkIfWalletIsConnected = async () => {
      if (window.ethereum) {
        try {
          const accounts = await window.ethereum.request({ method: 'eth_accounts' });
          if (accounts.length > 0) {
            setWalletAddress(accounts[0]);
          }
        } catch (error) {
          console.error("Error checking wallet connection:", error);
        }
      }
    };

    checkIfWalletIsConnected();
  }, []);

  return {
    walletAddress,
    setWalletAddress
  }
}

export default useAuth;