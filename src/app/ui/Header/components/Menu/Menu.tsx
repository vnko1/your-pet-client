import { FC } from "react";

import { UIButton, Menu as Modal } from "@/components";
import Buttons from "../Buttons/Buttons";
import { IMenu } from "./Menu.type";
import styles from "./Menu.module.scss";

const transitionClassNames = {
  enter: styles["modal-enter"],
  enterActive: styles["modal-enter-active"],
  exit: styles["modal-exit"],
  exitActive: styles["modal-exit-active"],
};

const Menu: FC<IMenu> = ({ isOpen, links, pathName, user, setIsOpen }) => {
  return (
    <Modal
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      backdropClassName={styles["modal"]}
      bodyClassName={styles["modal__body"]}
      transitionClassName={transitionClassNames}
      enableSwipe
      enableSwipeUpToScreen={1279}
    >
      <div className={styles["menu__auth"]}>
        <Buttons user={user} />
      </div>
      <nav className={styles["menu-nav"]}>
        <ul className={styles["menu-nav__links"]}>
          {links.map((link, index) => (
            <li key={index} className="text-center">
              <UIButton
                href={link.href}
                onClick={() => setIsOpen(false)}
                variant="text"
                size="large"
                isCurrent={link.href === pathName}
              >
                {link.label}
              </UIButton>
            </li>
          ))}
        </ul>
      </nav>
    </Modal>
  );
};

export default Menu;
