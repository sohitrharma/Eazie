import HeaderBox from "@/components/HeaderBox";
import { getAccounts } from "@/lib/actions/bank.actions";
import { getLoggedInUser } from "@/lib/actions/user.actions";
import React, { Suspense } from "react";
import Loading from "../loading";
import BankCard from "@/components/BankCard";

const MyBanks = async () => {
  const loggedIn = await getLoggedInUser();
  const accounts = await getAccounts({
    userId: loggedIn.$id,
  });

  return (
    <Suspense fallback={<Loading />}>
      <section className="flex">
        <div className="my-banks">
          <HeaderBox
            title="My Bank Accounts"
            subtext="Effortlessly manage your banking activities."
          />

          <div className="space-y-4">
            <h2 className="header-2">Your cards</h2>
            <div className="flex flex-wrap gap-6">
              {accounts &&
                accounts.data.map((a: Account) => (
                  <BankCard
                    key={accounts.id}
                    account={a}
                    userName={loggedIn?.firstName}
                  />
                ))}
            </div>
          </div>
        </div>
      </section>
    </Suspense>
  );
};
export default MyBanks;
