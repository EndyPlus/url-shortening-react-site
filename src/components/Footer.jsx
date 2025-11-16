import FooterLink from "./UI/FooterLink";
import Logo from "../assets/icons/Logo";
import FbIcon from "../assets/icons/icon-facebook.svg";
import TwitIcon from "../assets/icons/icon-twitter.svg";
import PintIcon from "../assets/icons/icon-pinterest.svg";
import InstaIcon from "../assets/icons/icon-instagram.svg";

export default function Footer() {
  return (
    <footer className="bg-grayish-950 container-padding flex justify-between py-20">
      <div className="grow-2">
        <Logo fill="fill-white" />
      </div>
      <div className="mr-24 flex justify-end gap-28">
        <div>
          <h3 className="mb-6 text-base text-white">Features</h3>
          <ul>
            <FooterLink>Link Shortening</FooterLink>
            <FooterLink>Branded Links</FooterLink>
            <FooterLink>Analytics</FooterLink>
          </ul>
        </div>
        <div>
          <h3 className="mb-6 text-base text-white">Resources</h3>
          <ul>
            <FooterLink>Blog</FooterLink>
            <FooterLink>Developers</FooterLink>
            <FooterLink>Support</FooterLink>
          </ul>
        </div>
        <div>
          <h3 className="mb-6 text-base text-white">Company</h3>
          <ul>
            <FooterLink>About</FooterLink>
            <FooterLink>Our Team</FooterLink>
            <FooterLink>Careers</FooterLink>
            <FooterLink>Contact</FooterLink>
          </ul>
        </div>
      </div>
      <ul className="flex gap-6">
        <li>
          <img src={FbIcon} alt="facebook icon" />
        </li>
        <li>
          <img src={TwitIcon} alt="twitter icon" />
        </li>
        <li>
          <img src={PintIcon} alt="pinterest icon" />
        </li>
        <li>
          <img src={InstaIcon} alt="instagram icon" />
        </li>
      </ul>
    </footer>
  );
}
