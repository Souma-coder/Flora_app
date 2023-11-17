import React from "react";
import css from "./Footer.module.css";
import Logo from "../../assets/logo.jpeg";
import {
  InboxIcon,
  PhoneIcon,
  LocationMarkerIcon,
  LoginIcon,
  UsersIcon,
  LinkIcon,
} from "@heroicons/react/outline";

const Footer = () => {
  return (
    <div className={css.cFooterWrapper}>
      <hr />
      <div className={css.cFooter}>
        <div className={css.logo}>
          <img src={Logo} alt="logo" />
        </div>

        <div className={css.block}>
          <div className={css.detail}>
            <span>Contact us</span>

            <span className={css.pngLine}>
              <span>
                <LocationMarkerIcon className={css.icon} />
              </span>
              <span>111, Jadavpur Lane, Kolkata-700020, West Bengal</span>
            </span>

            <span className={css.pngLine}>
              <span>
                <PhoneIcon className={css.icon} />
              </span>
              <span>
                <a href="tel:+918777249971">+91 8777249971</a>
              </span>
            </span>

            <span className={css.pngLine}>
              <span>
                <InboxIcon className={css.icon} />
              </span>
              <span>
                <a href="mailto:soumajit1996work@gmail.com">
                  soumajit1996work@gmail.com
                </a>
              </span>
            </span>
          </div>
        </div>

        <div className={css.block}>
          <div className={css.detail}>
            <span>Account</span>

            <span className={css.pngLine}>
              <span>
                <LoginIcon className={css.icon} />
              </span>
              <span>Sign In</span>
            </span>
          </div>
        </div>

        <div className={css.block}>
          <div className={css.detail}>
            <span>Company</span>

            <span className={css.pngLine}>
              <span>
                <UsersIcon className={css.icon} />
              </span>
              <span>
                <a href="/about">About us</a>
              </span>
            </span>
          </div>
        </div>

        <div className={css.block}>
          <div className={css.detail}>
            <span>Resources</span>

            <span className={css.pngLine}>
              <span>
                <LinkIcon className={css.icon} />
              </span>
              <span>Safety Privacy & terms</span>
            </span>
          </div>
        </div>
      </div>

      <div className={css.copyright}>
        <span>Copyright &#169;2023 by Flora, Inc.</span>
        <span>All rights reserved</span>
      </div>
    </div>
  );
};

export default Footer;
