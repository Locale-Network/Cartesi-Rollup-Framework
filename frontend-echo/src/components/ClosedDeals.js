import icon from "../assets/logo.jpg"

function ClosedDeals({ deals }) {

  const getColor = (status) => {
    if (status === 'On Time') {
      return 'green';
    } else if (status === 'Fully Repaid') {
      return '#3d755b';
    }

    return '#e4b332';
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Total loan amount</th>
          <th>Maturity date</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {deals.map((deal, index) => (
          <tr key={index}>
            <td>
              <div className="deal_name_section">
                <div className="deal_name_details">
                  {deal.img? (<img src={require(`../assets/${deal.img}.png`)} alt="closed-deal" />) : (<img src={icon} alt="locale_pool" />)}
                  <p>{deal.name}</p>
                </div>
                <p>{deal.description}</p>
              </div>
            </td>
            <td>${deal.totalLoanAmount.toLocaleString()}</td>
            <td>{deal.maturityDate}</td>
            <td style={{ color: getColor(deal.status), fontWeight: 'bold' }}>{deal.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ClosedDeals;