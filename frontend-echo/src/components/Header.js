import { useEffect, useRef, useState } from "react";
import { HiDotsHorizontal } from "react-icons/hi";
import { IoIosArrowDown } from "react-icons/io";
import logo from "../assets/logo.jpg";
import ManageDropdownItem from "../components/ManageDropdownItem";
import DropdownItem from "../components/DropdownItem";
import wallet_icon from '../assets/metamask.png';
import account_icon from '../assets/logo.jpg';
import WalletBalancesModal from "../components/WalletBalancesModal";
import { Link } from "react-router-dom";
import WalletModal from "../components/WalletModal";
import { useAuthContext } from "../providers/authProvider";

function Header() {
  const {walletAddress, setWalletAddress} = useAuthContext();
  const [isWalletModalOpen, setIsWalletModalOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isWalletBalancesModalOpen, setIsWalletBalancesModalOpen] = useState(false);
  const [isManageOpen, setIsManageOpen] = useState(false);
  const balanceDropdownRef = useRef(null);
  const dropdownRef = useRef(null);
  const manageDropDownRef = useRef(null);

  const handleWalletConnect = () => {
    setIsWalletModalOpen(true);
  };

  const closeWalletModal = () => {
    setIsWalletModalOpen(false);
  };

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const toggleManageDropdown = () => {
    setIsManageOpen((prev) => !prev);
  };

  const toggleWalletBalancesDropdown = () => {
    setIsWalletBalancesModalOpen((prev) => !prev);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  const handleManageClickOutside = (event) => {
    if (manageDropDownRef.current && !manageDropDownRef.current.contains(event.target)) {
      setIsManageOpen(false);
    }
  };

  const handleWalletBalanceClickOutside = (event) => {
    if (balanceDropdownRef.current && !balanceDropdownRef.current.contains(event.target)) {
      setIsWalletBalancesModalOpen(false);
    }
  };

  const shortenAddress = (address) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("mousedown", handleManageClickOutside);
    document.addEventListener("mousedown", handleWalletBalanceClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("mousedown", handleManageClickOutside);
      document.addEventListener("mousedown", handleWalletBalanceClickOutside);
    };
  }, []);

  useEffect(() => {
    const checkIfWalletIsConnected = async () => {
      if (window.ethereum) {
        try {
          const chainId = await window.ethereum.request({ method: 'eth_chainId' });
          const arbitrumBlueberryChainId = '0x14865D0F05';
  
          if (chainId !== arbitrumBlueberryChainId) {
            try {
              await window.ethereum.request({
                method: 'wallet_switchEthereumChain',
                params: [{ chainId: arbitrumBlueberryChainId }],
              });
            } catch (switchError) {
              if (switchError.code === 4902) {
                try {
                  await window.ethereum.request({
                    method: 'wallet_addEthereumChain',
                    params: [
                      {
                        chainId: arbitrumBlueberryChainId,
                        chainName: 'Arbitrum Blueberry',
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
                  console.error("Failed to add the network:", addError);
                }
              }
            }
          }

          const accounts = await window.ethereum.request({ method: 'eth_accounts' });
          if (accounts.length > 0) {
            setWalletAddress(accounts[0]);
          }
        } catch (error) {
          console.error("Error connecting to Arbitrum Blueberry:", error);
        }
      } else {
        console.error("MetaMask is not installed. Please install it to use this feature.");
      }
    };
  
    checkIfWalletIsConnected();
  }, [setWalletAddress]);

  return (
    <header className="header">
      <div className="logo">
        <a href="/"><img src={logo} width={40} height={40} alt="logo"/></a>
        <nav>
          <ul>
            <li className="active"><Link replace to='/'>Deals</Link></li>
            <li
              ref={manageDropDownRef}
              style={{ display: 'flex', alignItems: 'center', gap: 10 }}
              onClick={toggleManageDropdown}
              onMouseEnter={() => setIsManageOpen(true)}
              onMouseLeave={() => setIsManageOpen(false)}
            >
              <p>Manage <IoIosArrowDown /></p>
              {isManageOpen && (
                <div className="manage-dropdown-content">
                  <ManageDropdownItem label="Dashboard" link={'/dashboard'}/>
                  <ManageDropdownItem label="Membership" link={'/membership'}/>
                  <ManageDropdownItem label="Claim LLP" link={'/llp'}/>
                  <ManageDropdownItem label="Stake" link={'/stake'}/>
                  <ManageDropdownItem label="Borrow" link={'borrow'}/>
                </div>
              )}
            </li>
          </ul>
        </nav>
      </div>
      <div className="dropdown-menu-container" ref={dropdownRef}>
        <div className="wallet-connect-container" ref={balanceDropdownRef}>
          {walletAddress ? (
            <div className="connected-account">
              <div className="account-info">
                <a href="/account">
                  <img src={account_icon} alt="Account" className="icon" />
                  <span>Account</span>
                </a>
              </div>
              <div className="wallet-address" onClick={toggleWalletBalancesDropdown}>
                <img src={wallet_icon} alt="Wallet" className="icon" />
                <span>{shortenAddress(walletAddress)}</span>
              </div>
              {isWalletBalancesModalOpen && (
                <WalletBalancesModal onClose={() => setIsWalletBalancesModalOpen(false)}/>
              )}
            </div>
          ) : (
            <button className="connect-wallet" onClick={handleWalletConnect}>
              Connect Wallet
            </button>
          )}
        </div>
        <div className="menu-toggle" onClick={toggleDropdown}><HiDotsHorizontal /></div>
        {isOpen && (
          <div className="dropdown-content">
            <DropdownItem label="Getting started" link={'https://docs.localelending.finance/localelending/guides/getting-started'}/>
            <DropdownItem label="Governance" link={'https://gov.localelending.finance/'}/>
            <DropdownItem label="Docs" link={'https://docs.localelending.finance/localelending'}/>
            <DropdownItem label="Discord community" link={'https://discord.com/invite/localelending'}/>
            <DropdownItem label="Bug bounty" link={'https://immunefi.com/bug-bounty/localelending/information/'}/>
            <DropdownItem label="Smart contract coverage" link={`https://app.nexusmutual.io/cover/buy/get-quote?address=${walletAddress}`}/>
            <DropdownItem label="Careers" link={'https://jobs.lever.co/WarblerLabs/'}/>
          </div>
        )}
      </div>
      {isWalletModalOpen && (
        <WalletModal onClose={closeWalletModal} setAddress={setWalletAddress}/>
      )}
    </header>
  )
}

export default Header;