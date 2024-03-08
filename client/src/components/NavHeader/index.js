import { Select } from "antd";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
const { Option } = Select;

export default function NavHeader(props) {
  const { onConnect, title, onResetText, onSearch } = props;
  const [lang] = useState("vn");
  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  const handleLang = (value) => changeLanguage(value);

  return (
    <React.Fragment>
      <div className="navheader">
        <input
          type="text"
          name="default"
          placeholder={t("header.searchText")}
          className="lg:px-4 py-2 sm:32 md:w-96 lg:w-1/2 rounded-3xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-600"
          {...props}
        />
        <button className="font-bold" onClick={onResetText}>
          {t("header.reset")}
        </button>
        <Link className="navheader-connect" to={onSearch}>
          {t("header.search")}
        </Link>
        <button className="navheader-connect" onClick={onConnect}>
          {title ? title : t("header.connectWallet")}
        </button>
        <Select
          style={{ width: 80 }}
          defaultValue={lang}
          onChange={handleLang}
          className="mt-2"
        >
          <Option value={"vn"}>VN</Option>
          <Option value={"en"}>EN-US</Option>
        </Select>
      </div>
    </React.Fragment>
  );
}
