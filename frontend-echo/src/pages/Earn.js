import { useEffect, useState } from "react";
import ClosedDeals from "../components/ClosedDeals";
import DealCard from "../components/DealCard";
import SummaryItem from "../components/SummaryItem";
import { FaArrowDown } from "react-icons/fa6";
import { ethers } from "ethers";
import contractABI from '../abi/LocaleLending.abi.json';
import { useAuthContext } from "../providers/authProvider";
import UIDBanner from "../components/UIDBanner";
import { useNavigate } from "react-router-dom";

const closedDeals = [
  { name: 'Fazz', description: "SME Loans in Southeast Asia", totalLoanAmount: 1347026.01, maturityDate: 'Apr 30, 2025', status: 'Fully Repaid' },
  { name: 'Cauris', description: "Cauris Fund #4: Africa Innovation Pool", totalLoanAmount: 2126664.22, maturityDate: 'Dec 16, 2024', status: 'Grace Period' },
  { name: 'Addem Capital', description: "Asset-Backend Pool via Addem Capital", totalLoanAmount: 10000000.00, maturityDate: 'Apr 25, 2025', status: 'On Time' },
];

function Earn() {
  const { walletAddress } = useAuthContext();
  const [activeLoans, setActiveLoans] = useState('');
  const [totalLossRate, setTotalLossRate] = useState('');
  const [totalLoansRepaid, setTotalLoansRepaid] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const loadContractData = async () => {
      try {
        const provider = new ethers.JsonRpcProvider(process.env.REACT_APP_RPC_URL);
        const contract = new ethers.Contract(process.env.REACT_APP_CONTRACT_ADDRESS, contractABI, provider);

        const activeLoans = await contract.getActiveLoans();
        const totalLossRate = await contract.getTotalLossRate();
        const totalLoansRepaid = await contract.getTotalLoansRepaid();

        setActiveLoans(ethers.formatEther(activeLoans));
        setTotalLossRate(totalLossRate.toString());
        setTotalLoansRepaid(ethers.formatEther(totalLoansRepaid));
      } catch (error) {
        console.error("Error loading contract data:", error);
      }
    };

    loadContractData();
  }, []);

  const handleClick = () => {
    navigate('/account');
  };

  return (
    <div className="earn">
      {walletAddress && (<UIDBanner text={"Go to my account"} onClick={handleClick} />)}
      <div className="summary">
        <SummaryItem
          label="Active Loans"
          toolTip="Total principal outstanding across all loans in the Locale Lending Protocol."
          value={`$${parseFloat(activeLoans).toFixed(2)}`}
        />
        <SummaryItem
          label="Total Loss Rate"
          toolTip="Total value of loans written down or written off (losses) as a proportion of total loans issued on the Locale Lending protocol."
          value={`${parseFloat(totalLossRate)}%`}
        />
        <SummaryItem
          label="Total Loans Repaid"
          toolTip="Total amount of principal and interest repaid across all loans in the Locale Lending Protocol."
          value={`$${parseFloat(totalLoansRepaid).toFixed(2)}`}
        />
      </div>

      <div className="open-deal">
        <h3>1 Open Deal</h3>
        <DealCard
          title="Locale Lending Senior Pool"
          subtitle="Automated diversified portfolio"
          interest="9.39%"
          apy="0.00%"
          term="Open-ended"
          liquidity="2 week withdraw requests"
        />
      </div>

      <div className="closed-deals">
        <h3>3 Closed Deals</h3>
        <ClosedDeals deals={closedDeals} />
        <div className="view-more-closed-pools">
          <p>View more closed pools</p>
          <FaArrowDown size={16} color="#000"/>
        </div>
      </div>
    </div>
  );
}

export default Earn;