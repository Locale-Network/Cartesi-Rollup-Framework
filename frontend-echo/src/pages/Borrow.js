import React, { useState } from 'react';
import { ethers } from 'ethers';
import contractABI from '../abi/LocaleLending.abi.json';
import AccordionSidebar from '../components/AccordionSidebar';
import PreQualificationForm from '../components/PreQualificationForm';
import BusinessInformation from '../components/BusinessInformation';
import IndividualInformation from '../components/IndividualInformation';
import { FaArrowRightLong } from "react-icons/fa6";
import CurrentLoans from '../components/CurrentLoans';
import CashFlowVerification from '../components/CashFlowVerification';

function Borrow() {
  const [amount] = useState('');
  const [status, setStatus] = useState('');
  const [, setIsLoading] = useState(false);
  const [currentStep, setCurrentStep] = useState('Pre Qualification');

  const steps = [
    {
      title: 'Pre-Qualification',
      items: [{ name: 'Pre Qualification', completed: true }],
    },
    {
      title: 'Application',
      items: [
        { name: 'Business Information', completed: true },
        { name: 'Individual Information', completed: true },
        { name: 'Identity Verification', completed: false },
        { name: 'Cash Flow Verification', completed: false },
        { name: 'Current Loans', completed: false },
        { name: 'Product and Service', completed: false },
        { name: 'Market Opportunity', completed: false },
        { name: 'Business Model', completed: false },
        { name: 'Execution', completed: false },
        { name: 'Document Uploads', completed: false },
        { name: 'LaunchKC Fit', completed: false },
      ],
    },
    {
      title: 'Review and Sign',
      items: [{ name: 'Review and Sign', completed: false }],
    },
  ];

  const submitLoanRequest = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    if (!amount) {
      setStatus('Please enter an amount');
      return;
    }
    try {
      const provider = new ethers.JsonRpcProvider(process.env.REACT_APP_RPC_URL);
      const signer = new ethers.Wallet(process.env.REACT_APP_WALLET_PRIVATE_KEY, provider);
      const contract = new ethers.Contract(process.env.REACT_APP_CONTRACT_ADDRESS, contractABI, signer);

      const tx = await contract.submitLoanRequest(ethers.parseEther(amount), 5, Math.floor(Date.now() / 1000) + 30 * 24 * 60 * 60);
      await tx.wait();

      setStatus('Loan request submitted');
    } catch (error) {
      console.error('Error submitting loan request:', error);
      setStatus('Loan already exist');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className='borrow'>
      <h1>Borrow</h1>
      <div className='borrow-container'>
        <AccordionSidebar steps={steps} setCurrentStep={setCurrentStep}/>
        <form onSubmit={submitLoanRequest}>
          <div className="progress-container">
            <div className="progress-bar" style={{ width: '30%' }}></div>
            <span className="progress-text">30%</span>
          </div>

          {currentStep === 'Pre Qualification' && <PreQualificationForm />}
          {currentStep === 'Business Information' && <BusinessInformation />}
          {currentStep === 'Individual Information' && <IndividualInformation />}
          {currentStep === 'Cash Flow Verification' && <CashFlowVerification />}
          {currentStep === 'Current Loans' && <CurrentLoans />}

          <div className='btn'>Next<FaArrowRightLong /></div>
        </form>
      </div>
      {status && <p>{status}</p>}
    </div>
  );
}

export default Borrow;