import React, { ReactNode } from "react";
import styles from "./profile.module.scss";

function ProfileLayout({ pets, user }: { pets: ReactNode; user: ReactNode }) {
  return (
    <main>
      <section className="section">
        <div className={`container ${styles["profile"]}`}>
          {user}
          {pets}
        </div>
      </section>
    </main>
  );
}

export default ProfileLayout;
