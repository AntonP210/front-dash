import "./widget.scss";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import { CircularProgressbar } from "react-circular-progressbar";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";

const Widget = ({ type }) => {
  let data;

  //temporary
  const amount = 1350;
  const diff = 20;

  switch (type) {
    case "meerkats":
      data = {
        title: "MEERKATS",
        link: "See details",
        icon: (
          <PersonOutlinedIcon
            className="icon"
            style={{
              color: "crimson",
              backgroundColor: "rgba(255, 0, 0, 0.2)",
            }}
          />
        ),
      };
      break;
    case "nuggets":
      data = {
        title: "NUGGETS",
        link: "See details",
        icon: (
          <ShoppingCartOutlinedIcon
            className="icon"
            style={{
              backgroundColor: "rgba(218, 165, 32, 0.2)",
              color: "goldenrod",
            }}
          />
        ),
      };
      break;
    case "truffles":
      data = {
        title: "TRUFFLES",
        link: "See details",
        icon: (
          <MonetizationOnOutlinedIcon
            className="icon"
            style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
          />
        ),
      };
      break;
    case "tutim":
      data = {
        title: "TUTIM",
        link: "See details",
        icon: (
          <AccountBalanceWalletOutlinedIcon
            className="icon"
            style={{
              backgroundColor: "rgba(128, 0, 128, 0.2)",
              color: "purple",
            }}
          />
        ),
      };
      break;
    default:
      break;
  }

  return (
    <div className="widget">
      <div className="left">
      <span className="title">{data.title}</span>
        <span className="title">
          Total tests
        </span>
        <span className="counter">
          {amount}
        </span>
        <span className="link">{data.link}</span>
      </div>

      <div className="center ">
      <span className="title adj-top adj-left">
          Failed
        </span>
        <span className="counter adj-left adj-bot">
          {0}
        </span>
      </div>

      <div className="right">
          <CircularProgressbar className="circle" value={100} text={"100%"} strokeWidth={5} />
      </div>
    </div>
  );
};

export default Widget;
