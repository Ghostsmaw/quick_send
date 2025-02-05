import HeaderBox from "@/components/HeaderBox";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import React from "react";

const Home = () => {
  const loggedIn = { firstname: "Johnathan" };

  return (
    <section className="home">
      <div className="home-content">
        <HeaderBox
          type="greeting"
          title="Welcome"
          user={loggedIn?.firstname || "guest"}
          subtext="Access and Manage your transactions"
        />

        <TotalBalanceBox 
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1250}  // Replace with actual total balance from API call or state variable. 10000 is just a placeholder. 10000 = $10,000.00
        />
      </div>
    </section>
  );
};

export default Home;
