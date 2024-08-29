import React from "react";
import metamaskLogo from "../assets/metamask.png";
import walletConnectLogo from "../assets/walletconnect.png";
import coinbaseLogo from "../assets/coinbase.png";
import detectEthereumProvider from '@metamask/detect-provider';
import { ethers } from 'ethers';
// import WalletConnectProvider from '@walletconnect/web3-provider';
import CoinbaseWalletSDK from '@coinbase/wallet-sdk';

function WalletModal({ onClose, setAddress }) {
  const connectMetamask = async () => {
    try {
      const provider = await detectEthereumProvider();
      if (provider) {
        const chainId = await provider.request({ method: 'eth_chainId' });
        const arbitrumBlueberryChainId = '0x14865D0F05';
  
        if (chainId !== arbitrumBlueberryChainId) {
          try {
            await provider.request({
              method: 'wallet_switchEthereumChain',
              params: [{ chainId: arbitrumBlueberryChainId }],
            });
          } catch (switchError) {
            if (switchError.code === 4902) {
              try {
                await provider.request({
                  method: 'wallet_addEthereumChain',
                  params: [
                    {
                      chainId: arbitrumBlueberryChainId,
                      chainName: 'Arbitrum Blueberry Testnet',
                      rpcUrls: ['https://rpc.arb-blueberry.gelato.digital'],
                      nativeCurrency: {
                        name: 'CGT',
                        symbol: 'CGT',
                        decimals: 18,
                      },
                      blockExplorerUrls: ['https://arb-blueberry.gelatoscout.com'],
                    },
                  ],
                });
              } catch (addError) {
                console.error('Failed to add the Arbitrum Blueberry Testnet:', addError);
              }
            } else {
              console.error('Failed to switch to the Arbitrum Blueberry Testnet:', switchError);
            }
          }
        }

        await provider.request({ method: 'eth_requestAccounts' });
        const web3Provider = new ethers.BrowserProvider(provider);
        const signer = await web3Provider.getSigner();
        const address = await signer.getAddress();
        setAddress(address);
        onClose();
      } else {
        alert('MetaMask not found. Please install it to use this feature.');
      }
    } catch (error) {
      console.error('Error connecting to MetaMask:', error);
    }
  };
  

  const connectWallet = async () => {
    // const provider = new WalletConnectProvider({
    //   infuraId: process.env.REACT_APP_INFURA_ID
    // });

    // try {
    //   await provider.enable();
    //   const web3Provider = new ethers.BrowserProvider(provider);
    //   const signer = await web3Provider.getSigner();
    //   const address = await signer.getAddress();
    //   setAddress(address);
    //   onClose();
    // } catch (error) {
    //   console.error('Error connecting with WalletConnect:', error);
    //   provider.disconnect();
    // }
  };

  const connectCoinbase = async () => {
    const coinbaseWallet = new CoinbaseWalletSDK({
      appName: 'My First Key',
      infuraId: process.env.REACT_APP_INFURA_ID
    });

    const ethereum = coinbaseWallet.makeWeb3Provider();
    try {
      const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
      const address = accounts[0];
      setAddress(address);
      onClose();
    } catch (error) {
      console.error('Error connecting to Coinbase Wallet:', error);
    }
  };

  return (
    <div className="modal-backdrop">
      <div className="wallet-modal">
        <div className="modal-header">
          <h2>Select a wallet</h2>
          <button className="close-button" onClick={onClose}>×</button>
        </div>
        <div className="modal-content">
          <p>By connecting your wallet, you agree to our <a href="/">Terms of Service</a> and <a href="/">Privacy Policy</a>.</p>
          <div className="wallet-option" onClick={connectMetamask}>
            <span>MetaMask</span>
            <img src={metamaskLogo} alt="MetaMask" />
          </div>
          <div className="wallet-option" onClick={connectWallet}>
            <span>WalletConnect</span>
            <img src={walletConnectLogo} alt="WalletConnect" />
          </div>
          <div className="wallet-option" onClick={connectCoinbase}>
            <span>Coinbase Wallet</span>
            <img src={coinbaseLogo} alt="Coinbase Wallet" />
          </div>
          <p className="no-wallet">I don't have a wallet</p>
        </div>
      </div>
    </div>
  );
}

export default WalletModal;