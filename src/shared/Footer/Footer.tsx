import { Link } from "react-router";
import { Logo } from "..";
import style from "./Footer.module.scss";
import { TelegramIcon, VkIcon, WhatsappIcon, WorldIcon } from "@/assets/icons";
import clsx from "clsx";
import { useState } from "react";

export const Footer = () => {
  const [lang, setLang] = useState("ru");

  const languages = [
    {
      value: "ru",
      label: "Рус",
    },
    {
      value: "en",
      label: "Eng",
    },
  ];

  const links = [
    {
      id: 1,
      title: "Избранное",
      link: "/",
    },
    {
      id: 2,
      title: "Корзина",
      link: "cart",
    },
    {
      id: 3,
      title: "Контакты",
      link: "/",
    },
  ];

  const handleChangeLanguage = (value: string) => {
    setLang(value);
  };

  return (
    <footer className={style.footer}>
      <Logo />
      <div className={style.footer__menu}>
        <div className={style.footer__links}>
          {links.map((item) => {
            return (
              <Link key={item.id} className={style.link} to={item.link}>
                {item.title}
              </Link>
            );
          })}
        </div>
        <div className={style.footer__action}>
          <Link className={style.link} to="/">
            Условия сервиса
          </Link>
          <div className={style.action__language} role="radiogroup">
            <div className={style.action__icon}>
              <WorldIcon />
            </div>
            <div className={style.action__choice}>
              {languages.map(({ value, label }) => {
                return (
                  <button
                    key={value}
                    type="button"
                    className={clsx(style.action, {
                      [style.active]: lang === value,
                    })}
                    aria-pressed={lang === value}
                    onClick={() => handleChangeLanguage(value)}
                  >
                    {label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className={style.footer__socials}>
        <a
          href="#"
          aria-label="Vk"
          className={clsx(style.social, style.social__vk)}
        >
          <VkIcon />
        </a>
        <a href="#" aria-label="Telegram" className={style.social}>
          <TelegramIcon />
        </a>
        <a href="#" aria-label="Whatsapp" className={style.social}>
          <WhatsappIcon />
        </a>
      </div>
    </footer>
  );
};
