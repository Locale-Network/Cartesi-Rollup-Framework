const { ethers } = require("ethers");

const rollupServer = process.env.ROLLUP_HTTP_SERVER_URL;

function calculateNewInterestRate(principal, interestRate, loanTerm, noi) {
  const monthlyPayment = (principal * interestRate) / (loanTerm * 12);
  const dscr = noi / monthlyPayment;
  if (dscr < 1.25) {
    const targetMonthlyPayment = noi / 1.30;
    const newInterestRate = (targetMonthlyPayment * loanTerm * 12) / principal;
    return Math.round(newInterestRate);
  } else {
    return interestRate;
  }
}

async function handleAdvance(data) {
  try {
    const input = JSON.parse(data.payload);
    const { borrower, principal, interestRate, loanTerm, noi } = input;
    const newInterestRate = calculateNewInterestRate(principal, interestRate, loanTerm, noi);

    const result = await notifyContract(borrower, newInterestRate);
    return result;
  } catch (error) {
    console.error('Error processing advance: ', error);
    return 'reject';
  }
}

async function notifyContract(borrower, newInterestRate) {
  const response = await fetch(`${rollupServer}/advance`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      borrower: borrower,
      newInterestRate: newInterestRate
    })
  });
  return response.status === 200 ? 'accept' : 'reject';
}

(async () => {
  while (true) {
    const finishReq = await fetch(`${rollupServer}/finish`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status: 'accept' })
    });

    const request = await finishReq.json();
    if (request.request_type === 'advance_state') {
      const status = await handleAdvance(request.data);
      await fetch(`${rollupServer}/finish`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: status })
      });
    }
  }
})();