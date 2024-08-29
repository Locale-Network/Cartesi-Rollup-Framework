import { useState } from "react";
import UIDBanner from "../components/UIDBanner";
import { useAuthContext } from "../providers/authProvider";
import KYCModal from "../components/KYCModal";

function Account() {
  const { walletAddress } = useAuthContext();
  const [isKYCModalOpen, setIsKYCModalOpen] = useState(false);

  const openKYCModal = () => setIsKYCModalOpen(true);
  const closeKYCModal = () => setIsKYCModalOpen(false);
  const handleBeginKYC = () => {
    closeKYCModal();
  };

  return (
    <div className="account">
      <h1>Account</h1>
      {walletAddress && <UIDBanner text={'Begin UID setup'} onClick={openKYCModal}/>}
      {isKYCModalOpen && (
        <KYCModal onClose={closeKYCModal} onBegin={handleBeginKYC} />
      )}
    </div>
  );
}

export default Account;