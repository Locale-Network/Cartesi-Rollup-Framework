import StakeCard from "../components/StakeCard";

function Stake() {
  return (
    <div className="stake">
      <h1>Stake on LocaleLending</h1>
      <p>
        Stake your LLDU, or your LP tokens from providing liquidity to the Curve LLDU-USDC pool, 
        on LocaleLending to earn additional LLP rewards. Or, migrate your staked LLDU to the Curve LLDU-USDC pool.
      </p>
      <div className="stake-list">
        <StakeCard token="LLDU" estAPY="0.00%" available="0.00" staked="0.00" />
        <StakeCard token="LLDU-USDC-F" estAPY="0.00%" available="0.00" staked="0.00" />
      </div>
    </div>
  );
}

export default Stake;