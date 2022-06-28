import Head from "next/head";
import { useEffect, useState } from "react";
import Layout from "../../components/Layout/Layout";
import Styles from "../../styles/Wallet.module.css";
import {
  FaFileCode,
  FaRegCreditCard,
  FaCreditCard,
  FaAngleDoubleDown,
  FaFilter,
  FaUpload,
  FaDownload,
} from "react-icons/fa";
import Image from "next/image";
import QRCode from "../../public/images/qrcode.png";
import Coin from "../../public/images/avatar.jpg";
// import PopupSendMoney from "../../components/PopupWallet/PopupSendMoney/PopupSendMoney";
// import PopupRequestMoney from "../../components/PopupWallet/PopupRequestMoney/PopupRequestMoney";
// import PopupStake from "../../components/PopupWallet/PopupStake/PopupStake";
// import PopupFilter from "../../components/PopupWallet/PopupFilter/PopupFilter";

export default function Wallet() {
  const [toggleState, setToggleState] = useState(1);
  const [showPopupSend, setShowPopupSend] = useState(false);
  const [showPopupRequest, setShowPopupRequest] = useState(false);
  const [showPopupStake, setShowPopupStake] = useState(false);
  const [showPopupFilter, setShowPopupFilter] = useState(false);
  const [popupOpen, setPopupOpen] = useState(false);

  const handleToggleTab = (index) => {
    setToggleState(index);
  };

  const toggle = () => {
    setPopupOpen((prev) => !prev);
  };
  const handleClick = () => {
    // Xử lý copy
    var copyText = "0x1Cd30...7sd234a8D";
    navigator.clipboard.writeText(copyText);

    // Xử lý popup
    setPopupOpen(!popupOpen);

    setTimeout(() => {
      toggle();
    }, 1100);
  };

  return (
    <>
      <Head>
        <title>DAK - Ví</title>
      </Head>
      <Layout>
        <div className={Styles["wallet"]}>
          <div className={Styles["wallet__nav-list"]}>
            <div
              onClick={() => handleToggleTab(1)}
              className={`${Styles["wallet__nav-item"]} ${
                toggleState === 1 ? Styles["show"] : ""
              }`}
            >
              Trang chính
            </div>
            <div
              onClick={() => handleToggleTab(2)}
              className={`${Styles["wallet__nav-item"]} ${
                toggleState === 2 ? Styles["show"] : ""
              }`}
            >
              Giao dịch
            </div>
            <div
              onClick={() => handleToggleTab(3)}
              className={`${Styles["wallet__nav-item"]} ${
                toggleState === 3 ? Styles["show"] : ""
              }`}
            >
              Đổi Tiền
            </div>
            <div
              onClick={() => handleToggleTab(4)}
              className={`${Styles["wallet__nav-item"]} ${
                toggleState === 4 ? Styles["show"] : ""
              }`}
            >
              Stake
            </div>
            <div
              onClick={() => handleToggleTab(5)}
              className={`${Styles["wallet__nav-item"]} ${
                toggleState === 5 ? Styles["show"] : ""
              }`}
            >
              Lịch sử giao dịch
            </div>
          </div>
          {/* Trang chính */}
          <div
            className={`${Styles["wallet__body"]} ${
              toggleState === 1 ? Styles["show"] : ""
            }`}
          >
            <div className={Styles["wallet__body-main"]}>
              <div className={Styles["wallet__main-left"]}>
                <div className={Styles["wallet__main-left-top"]}>
                  <div className={Styles["wallet__main-left-top-item"]}>
                    <p className={Styles["wallet__main-left-top-title"]}>
                      DAK Point (P)
                    </p>
                    <h3 className={Styles["wallet__main-left-top-point"]}>
                      7777
                    </h3>
                  </div>
                  <div className={Styles["wallet__main-left-top-item"]}>
                    <p className={Styles["wallet__main-left-top-title"]}>
                      DAK Token (T)
                    </p>
                    <h3 className={Styles["wallet__main-left-top-point"]}>
                      33
                    </h3>
                  </div>
                </div>
                <div className={Styles["wallet__main-left-bottom"]}>
                  <p className={Styles["wallet__main-left-bottom-title"]}>
                    Mã ví của tôi
                  </p>
                  <h3 className={`${Styles["wallet__main-left-bottom-code"]}`}>
                    0x1Cd30...7sd234a8D
                    <FaFileCode
                      className={Styles["wallet__main-left-bottom-icon"]}
                      onClick={handleClick}
                    />
                    {popupOpen && (
                      <p
                        className={`${Styles["tooltip"]} ${
                          popupOpen ? Styles["show"] : Styles["hide"]
                        }`}
                      >
                        Sao chép thành công
                      </p>
                    )}
                  </h3>
                </div>
              </div>
              <div className={Styles["wallet__main-right"]}>
                <div className={Styles["wallet__main-right-qr"]}>
                  <Image src={QRCode} alt="QRCode" />
                </div>
              </div>
            </div>
            <div className={Styles["wallet__body-title"]}>
              <h2 className={Styles["wallet__body-heading-item"]}>
                Các loại tài sản
              </h2>
              <h2 className={Styles["wallet__body-heading-item"]}>
                Thời gian khóa
              </h2>
            </div>
            <ul className={Styles["wallet__body-list"]}>
              <StakItem />
              <StakItem />
              <StakItem />
              <StakItem />
              <StakItem />
              <StakItem />
              <StakItem />
              <StakItem />
              <StakItem />
              <StakItem />
            </ul>
          </div>
          {/* Giao dịch */}
          <div
            className={`${Styles["wallet__body"]} ${
              toggleState === 2 ? Styles["show"] : ""
            }`}
          >
            <ul className={Styles["wallet__action-list"]}>
              <li
                className={Styles["wallet__action-item"]}
                onClick={() => setShowPopupSend(!showPopupSend)}
              >
                <FaUpload className={Styles["wallet__action-item-icon"]} />
                <p className={Styles["wallet__action-item-name"]}>
                  Chuyển tiền cho bạn bè
                </p>
              </li>
              <li
                className={Styles["wallet__action-item"]}
                onClick={() => setShowPopupRequest(!showPopupRequest)}
              >
                <FaDownload className={Styles["wallet__action-item-icon"]} />
                <p className={Styles["wallet__action-item-name"]}>
                  Yêu cầu bạn bè gửi tiền
                </p>
              </li>
              <li
                className={Styles["wallet__action-item"]}
                onClick={() => setShowPopupSend(!showPopupSend)}
              >
                <FaRegCreditCard
                  className={Styles["wallet__action-item-icon"]}
                />
                <p className={Styles["wallet__action-item-name"]}>
                  Mua DAK Point
                </p>
              </li>
              <li
                className={Styles["wallet__action-item"]}
                onClick={() => setShowPopupRequest(!showPopupRequest)}
              >
                <FaCreditCard className={Styles["wallet__action-item-icon"]} />
                <p className={Styles["wallet__action-item-name"]}>
                  Mua DAK Token
                </p>
              </li>
            </ul>
          </div>
          {/* {showPopupSend && <PopupSendMoney
                        handleClick={() => setShowPopupSend(!showPopupSend)} 
                        setShowPopupSend={setShowPopupSend}
                    />}
                    {showPopupRequest && <PopupRequestMoney
                        handleClick={() => setShowPopupRequest(!showPopupRequest)} 
                        setShowPopupRequest={setShowPopupRequest}
                    />} */}
          {/* Đổi DAK Token */}
          <div
            className={`${Styles["wallet__body"]} ${Styles["stake"]} ${
              toggleState === 3 ? Styles["show"] : ""
            }`}
          >
            <div className={Styles["wallet__change"]}>
              <p className={Styles["wallet__change-heading"]}>
                Số tiền cần đổi
              </p>
              <div className={Styles["wallet__change-item"]}>
                <input
                  type="number"
                  className={Styles["wallet__change-input"]}
                  placeholder="0"
                />
                <select
                  className={Styles["wallet__change-select"]}
                  name="StakeCategory"
                >
                  <option className={Styles["wallet__change-option"]} value="0">
                    Chọn loại...
                  </option>
                  <option className={Styles["wallet__change-option"]} value="1">
                    Tether (USDT)
                  </option>
                  <option className={Styles["wallet__change-option"]} value="2">
                    USD Coin (USDC)
                  </option>
                  <option className={Styles["wallet__change-option"]} value="3">
                    Biance USD (BUSD)
                  </option>
                  <option className={Styles["wallet__change-option"]} value="4">
                    Etherum (ETH)
                  </option>
                  <option className={Styles["wallet__change-option"]} value="5">
                    BNB (BNB)
                  </option>
                  <option className={Styles["wallet__change-option"]} value="6">
                    TRON (TRX)
                  </option>
                </select>
              </div>
              <FaAngleDoubleDown className={Styles["wallet__change-icon"]} />
              <p className={Styles["wallet__change-heading"]}>
                Số tiền đổi được
              </p>
              <div className={Styles["wallet__change-item"]}>
                <input
                  type="number"
                  className={Styles["wallet__change-input"]}
                  value="0"
                  disabled
                />
                <select
                  className={Styles["wallet__change-select"]}
                  name="StakeCategory"
                >
                  <option className={Styles["wallet__change-option"]} value="0">
                    Chọn loại...
                  </option>
                  <option className={Styles["wallet__change-option"]} value="1">
                    Tether (USDT)
                  </option>
                  <option className={Styles["wallet__change-option"]} value="2">
                    USD Coin (USDC)
                  </option>
                  <option className={Styles["wallet__change-option"]} value="3">
                    Biance USD (BUSD)
                  </option>
                  <option className={Styles["wallet__change-option"]} value="4">
                    Etherum (ETH)
                  </option>
                  <option className={Styles["wallet__change-option"]} value="5">
                    BNB (BNB)
                  </option>
                  <option className={Styles["wallet__change-option"]} value="6">
                    TRON (TRX)
                  </option>
                </select>
              </div>
              <div className={Styles["wallet__change-info"]}>
                <h3 className={Styles["wallet__change-title"]}>
                  DAK Token (P)
                </h3>
                <p className={Styles["wallet__change-count"]}>11000P</p>
              </div>
            </div>
            <button className={Styles["wallet__change-btn"]}>Xác nhận</button>
          </div>
          {/* Stake */}
          <div
            className={`${Styles["wallet__body"]} ${Styles["stake"]} ${
              toggleState === 4 ? Styles["show"] : ""
            }`}
          >
            <div className={Styles["wallet__stake"]}>
              <ul className={Styles["wallet__stake-list"]}>
                <li className={Styles["wallet__stake-item"]}>
                  <label className={Styles["wallet__stake-title"]}>
                    Tài sản
                  </label>
                  <select
                    className={Styles["wallet__stake-select"]}
                    name="StakeCategory"
                  >
                    <option
                      className={Styles["wallet__stake-option"]}
                      value="0"
                    >
                      Chọn loại...
                    </option>
                    <option
                      className={Styles["wallet__stake-option"]}
                      value="1"
                    >
                      Tether (USDT)
                    </option>
                    <option
                      className={Styles["wallet__stake-option"]}
                      value="2"
                    >
                      USD Coin (USDC)
                    </option>
                    <option
                      className={Styles["wallet__stake-option"]}
                      value="3"
                    >
                      Biance USD (BUSD)
                    </option>
                    <option
                      className={Styles["wallet__stake-option"]}
                      value="4"
                    >
                      Etherum (ETH)
                    </option>
                    <option
                      className={Styles["wallet__stake-option"]}
                      value="5"
                    >
                      BNB (BNB)
                    </option>
                    <option
                      className={Styles["wallet__stake-option"]}
                      value="6"
                    >
                      TRON (TRX)
                    </option>
                  </select>
                </li>
                <li className={Styles["wallet__stake-item"]}>
                  <label className={Styles["wallet__stake-title"]}>
                    Số lượng
                  </label>
                  <input
                    type="text"
                    placeholder="Nhập số tiền tại đây..."
                    className={Styles["wallet__stake-input"]}
                  />
                </li>
                <li className={Styles["wallet__stake-item"]}>
                  <label className={Styles["wallet__stake-title"]}>
                    Kỳ hạn
                  </label>
                  <select
                    className={Styles["wallet__stake-select"]}
                    name="StakePeriod"
                  >
                    <option
                      className={Styles["wallet__stake-option"]}
                      value="0"
                    >
                      Chọn kỳ hạn...
                    </option>
                    <option
                      className={Styles["wallet__stake-option"]}
                      value="1"
                    >
                      3 tháng
                    </option>
                    <option
                      className={Styles["wallet__stake-option"]}
                      value="2"
                    >
                      6 tháng
                    </option>
                    <option
                      className={Styles["wallet__stake-option"]}
                      value="3"
                    >
                      9 tháng
                    </option>
                    <option
                      className={Styles["wallet__stake-option"]}
                      value="4"
                    >
                      12 tháng
                    </option>
                    <option
                      className={Styles["wallet__stake-option"]}
                      value="5"
                    >
                      18 tháng
                    </option>
                    <option
                      className={Styles["wallet__stake-option"]}
                      value="6"
                    >
                      24 tháng
                    </option>
                    <option
                      className={Styles["wallet__stake-option"]}
                      value="7"
                    >
                      36 tháng
                    </option>
                  </select>
                </li>
              </ul>
              <ul className={Styles["wallet__stake-rate-list"]}>
                <li className={Styles["wallet__stake-rate-item"]}>
                  <p className={Styles["wallet__stake-rate-title"]}>
                    Lãi suất (%/năm)
                  </p>
                  <p className={Styles["wallet__stake-rate-count"]}>6.02%</p>
                </li>
                <li className={Styles["wallet__stake-rate-item"]}>
                  <p className={Styles["wallet__stake-rate-title"]}>
                    Dự tính (DAK Token/Tháng)
                  </p>
                  <p className={Styles["wallet__stake-rate-count"]}>34.56T</p>
                </li>
              </ul>
            </div>
            <button
              className={Styles["wallet__stake-btn"]}
              onClick={() => setShowPopupStake(!showPopupStake)}
            >
              Stake ngay !!
            </button>
          </div>
          {/* {showPopupStake && <PopupStake
                        handleClick={() => setShowPopupStake(!showPopupStake)} 
                        setShowPopupStake={setShowPopupStake}
                    />} */}
          {/* Lịch sử giao dịch */}
          <div
            className={`${Styles["wallet__body"]} ${Styles["table"]} ${
              toggleState === 5 ? Styles["show"] : ""
            }`}
          >
            <div className={Styles["wallet__table-scroll"]}>
              <table className={Styles["wallet__history-table"]}>
                <tr className={Styles["wallet__history-tr"]}>
                  <th className={Styles["wallet__history-th"]}>Thời gian</th>
                  <th className={Styles["wallet__history-th"]}>
                    Loại giao dịch
                    <FaFilter
                      className={Styles["wallet__history-icon-filter"]}
                      onClick={() => setShowPopupFilter(!showPopupFilter)}
                    />
                    {/* {showPopupFilter && <PopupFilter />} */}
                  </th>
                  <th className={Styles["wallet__history-th"]}>Nội dung</th>
                  <th className={Styles["wallet__history-th"]}>
                    Giá trị giao dịch
                  </th>
                  <th className={Styles["wallet__history-th"]}>Số dư</th>
                </tr>
                <HistoryItem />
                <HistoryItem />
                <HistoryItem />
                <HistoryItem />
                <HistoryItem />
                <HistoryItem />
                <HistoryItem />
                <HistoryItem />
                <HistoryItem />
                <HistoryItem />
                <HistoryItem />
                <HistoryItem />
                <HistoryItem />
              </table>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export function StakItem() {
  return (
    <>
      <li className={Styles["wallet__body-item"]}>
        <div className={Styles["wallet__body-avatar"]}>
          <Image src={Coin} alt="ImageCoin" />
        </div>
        <div className={Styles["wallet__body-info"]}>
          <p className={Styles["wallet__body-info-name"]}>Bitcoin (BTC)</p>
          <p className={Styles["wallet__body-info-count"]}>2 BTC</p>
        </div>
        <p className={Styles["wallet__body-day"]}>Còn 329 ngày</p>
      </li>
    </>
  );
}

export function HistoryItem() {
  return (
    <>
      <tr className={Styles["wallet__history-tr"]}>
        <td className={Styles["wallet__history-td"]}>2022-02-16 17:30 PM</td>
        <td className={Styles["wallet__history-td"]}>Chuyển tiền</td>
        <td className={Styles["wallet__history-td"]}>
          Chuyển tiền cho Nguyễn Văn A
        </td>
        <td className={Styles["wallet__history-td"]}>32000 P</td>
        <td className={Styles["wallet__history-td"]}>6666P 33T</td>
      </tr>
    </>
  );
}
