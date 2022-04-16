import { useState } from "react";
import styles from "./MenuBar.module.css";
import MenuBarData from "./MenuBarData";
const MenuBar = (): any => {
  const [menuBarOpen, setMenuBarOpen] = useState(false);
  const [clickedMenuItem, setClickedMenuItem] = useState(0);

  const handleMouseEnter = () => {
    setMenuBarOpen(!menuBarOpen);
  };

  const handleMouseLeave = () => {
    setMenuBarOpen(!menuBarOpen);
  };

  const onMenuChange = (id) => {
    setClickedMenuItem(id);

    setTimeout(() => {
      setClickedMenuItem(0);
    }, 7000);
  };

  if (!menuBarOpen) {
    return (
      <div
        className={styles.wrapperHidden}
        onMouseEnter={handleMouseEnter}
      ></div>
    );
  }

  return (
    <div className={styles.wrapper} onMouseLeave={handleMouseLeave}>
      <ul className={styles.ul}>
        {MenuBarData.map((data) => (
          <li
            style={{ textAlign: "center" }}
            key={data.id}
            onClick={() => onMenuChange(data.id)}
          >
            <img
              className={
                clickedMenuItem === data.id ? styles.bounceAnimation : ""
              }
              src={`/assets/${data.image}`}
              alt="not-loaded"
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuBar;
