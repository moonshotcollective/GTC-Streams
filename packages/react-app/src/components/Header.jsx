import { PageHeader } from "antd";
import React from "react";

// displays a page header

export default function Header() {
  return (
    <a href="/" target="_blank" rel="noopener noreferrer">
      <PageHeader
        title={
        <div>
        <a href="/" target="_blank" rel="noopener noreferrer" style={{ float: "left" }} className="navbar-title">
          <svg width="150" height="100" viewBox="0 0 205 160" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M166.073 159.905C155.024 159.905 149.291 152.943 145.091 147.872C140.89 142.801 138.809 140.531 134.06 140.531C129.311 140.531 127.041 143.047 123.049 147.872C119.056 152.697 113.115 159.905 102.085 159.905C91.0543 159.905 85.3025 152.943 81.1022 147.872C76.9019 142.801 74.764 140.626 70.0907 140.626C65.4174 140.626 63.0523 143.142 59.079 147.967C55.1058 152.791 49.1458 160 38.0963 160C27.0469 160 21.314 153.037 17.1326 147.967C12.9512 142.896 10.851 140.626 6.12093 140.626C4.46775 140.536 2.91181 139.816 1.7732 138.614C0.634597 137.413 0 135.82 0 134.164C0 132.509 0.634597 130.916 1.7732 129.714C2.91181 128.512 4.46775 127.792 6.12093 127.703C17.1515 127.703 22.9033 134.666 27.0847 139.736C31.2661 144.807 33.3662 147.077 38.0963 147.077C42.8264 147.077 45.1347 144.561 49.108 139.736C53.0812 134.912 59.0412 127.703 70.0907 127.703C81.1401 127.703 86.8729 134.666 91.0543 139.736C95.2357 144.807 97.3359 147.077 102.085 147.077C106.834 147.077 109.104 144.561 113.097 139.736C117.089 134.912 123.03 127.703 134.06 127.703C145.091 127.703 150.861 134.647 155.043 139.736C159.224 144.826 161.324 147.077 166.073 147.077C170.822 147.077 173.112 144.561 177.104 139.736C181.096 134.912 187.037 127.703 198.087 127.703C199.74 127.792 201.296 128.512 202.434 129.714C203.573 130.916 204.208 132.509 204.208 134.164C204.208 135.82 203.573 137.413 202.434 138.614C201.296 139.816 199.74 140.536 198.087 140.626C193.338 140.626 191.048 143.142 187.056 147.967C183.064 152.791 177.123 159.905 166.073 159.905Z" fill="#6F3FF5"/>
          <path d="M166.073 127.211C155.024 127.211 149.291 120.249 145.091 115.178C140.89 110.107 138.809 107.837 134.06 107.837C129.311 107.837 127.041 110.353 123.049 115.178C119.056 120.003 113.115 127.211 102.085 127.211C91.0543 127.211 85.3025 120.249 81.1022 115.178C76.9019 110.107 74.8208 107.837 70.0907 107.837C65.3606 107.837 63.0523 110.353 59.079 115.178C55.1058 120.003 49.1458 127.211 38.0963 127.211C27.0469 127.211 21.314 120.249 17.1326 115.178C12.9512 110.107 10.851 107.837 6.12093 107.837C4.46775 107.747 2.91181 107.028 1.7732 105.826C0.634597 104.624 0 103.031 0 101.375C0 99.7199 0.634597 98.1273 1.7732 96.9254C2.91181 95.7235 4.46775 95.0037 6.12093 94.9142C17.1515 94.9142 22.9033 101.877 27.0847 106.948C31.2661 112.018 33.3662 114.289 38.0963 114.289C42.8264 114.289 45.1347 111.772 49.108 106.948C53.0812 102.123 59.0412 94.9142 70.0907 94.9142C81.1401 94.9142 86.8729 101.877 91.0543 106.948C95.2357 112.018 97.3359 114.289 102.085 114.289C106.834 114.289 109.104 111.772 113.097 106.948C117.089 102.123 123.03 94.9142 134.06 94.9142C145.091 94.9142 150.861 101.877 155.043 106.948C159.224 112.018 161.324 114.289 166.073 114.289C170.822 114.289 173.112 111.772 177.104 106.948C181.096 102.123 187.037 94.9142 198.087 94.9142C199.74 95.0037 201.296 95.7235 202.434 96.9254C203.573 98.1273 204.208 99.7199 204.208 101.375C204.208 103.031 203.573 104.624 202.434 105.826C201.296 107.028 199.74 107.747 198.087 107.837C193.338 107.837 191.048 110.353 187.056 115.178C183.064 120.003 177.123 127.211 166.073 127.211Z" fill="#6F3FF5"/>
          <path d="M49.1079 87.6485C53.3082 82.559 59.0411 75.6152 70.0906 75.6152C81.1401 75.6152 86.8728 82.559 91.0542 87.6485C95.2356 92.7381 97.3358 94.9896 102.085 94.9896C106.834 94.9896 109.104 92.4732 113.096 87.6485C117.089 82.8238 123.03 75.6152 134.06 75.6152C145.091 75.6152 150.861 82.559 155.043 87.6485C155.856 88.6324 156.594 89.5406 157.313 90.2785C162.152 80.8236 164.483 70.2844 164.08 59.6707C163.678 49.057 160.556 38.7245 155.015 29.6633C149.473 20.6021 141.698 13.1158 132.433 7.92173C123.168 2.7277 112.725 0 102.104 0C91.4824 0 81.0391 2.7277 71.7744 7.92173C62.5097 13.1158 54.7341 20.6021 49.1928 29.6633C43.6514 38.7245 40.5299 49.057 40.1274 59.6707C39.725 70.2844 42.055 80.8236 46.8942 90.2785C47.5754 89.5406 48.2754 88.6702 49.1079 87.6485Z" fill="#FFCC00"/>
          </svg>
          <p>Tokenstream.Party</p>
        </a>
        </div>
        }
        subTitle="Fund the Moonshot Collective Builders"
        style={{ cursor: "pointer" }}
      />
    </a>
  );
}
