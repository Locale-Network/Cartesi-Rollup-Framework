import React, { useState } from "react";
import { ethers } from "ethers";
import contractABI from '../abi/LocaleLending.abi.json';
import { useAuthContext } from "../providers/authProvider";

function Borrow() {
  const { walletAddress } = useAuthContext();
  const [amount, setAmount] = useState("");
  const [status, setStatus] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const submitLoanRequest = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    if (!amount) {
      setStatus("Please enter an amount");
      return;
    }
    try {
      const provider = new ethers.JsonRpcProvider(process.env.REACT_APP_RPC_URL);
      const signer = new ethers.Wallet(process.env.REACT_APP_WALLET_PRIVATE_KEY, provider);
      const contract = new ethers.Contract(process.env.REACT_APP_CONTRACT_ADDRESS, contractABI, signer);

      const tx = await contract.submitLoanRequest(ethers.parseEther(amount), 5, Math.floor(Date.now() / 1000) + 30 * 24 * 60 * 60);
      await tx.wait();

      setStatus("Loan request submitted");
    } catch (error) {
      console.error("Error submitting loan request:", error);
      setStatus("Loan already exist");
    } finally {
      setIsLoading(false);
    }
  };

  const approveLoanRequest = async () => {
    try {
      setIsLoading(true);
      const provider = new ethers.JsonRpcProvider(process.env.REACT_APP_RPC_URL);
      const signer = new ethers.Wallet(process.env.REACT_APP_WALLET_PRIVATE_KEY, provider);
      const contract = new ethers.Contract(process.env.REACT_APP_CONTRACT_ADDRESS, contractABI, signer);
      
      const tx = await contract.approveLoanRequest(walletAddress);
      await tx.wait();
      
      setStatus("Loan request approved");
    } catch (error) {
      console.error("Error approving loan request:", error.message || error);
      setStatus("Loan already approved");
    } finally {
      setIsLoading(false);
    }
  };  

  return (
    <div className="borrow">
      <h1>Borrow</h1>
      {/* <h2>Credit Lines</h2> */}
      {/* <p>You do not have any credit lines. To borrow funds from the pool, you need a LocaleLending credit line.</p> */}
      <form onSubmit={submitLoanRequest}>
        <div>
          <label>Amount:</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
        </div>
        <button type="submit" disabled={isLoading}>Submit Loan Request</button>
      </form>
      <button onClick={approveLoanRequest} disabled={isLoading}>Approve Loan Request</button>
      <p>{status}</p>
    </div>
  );
}

export default Borrow;