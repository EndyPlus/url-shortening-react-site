import FooterLink from "./UI/FooterLink";
import Logo from "../assets/icons/Logo";
import IconFacebook from "../assets/icons/IconFacebook.jsx";
import IconTwitter from "../assets/icons/IconTwitter.jsx";
import IconPinterest from "../assets/icons/IconPinterest.jsx";
import IconInstagram from "../assets/icons/IconInstagram.jsx";

export default function Footer() {
  return (
    <footer className="bg-grayish-950 container-padding xlg:flex xs:py-20 grid grid-cols-1 justify-between justify-items-center gap-6 py-15 md:grid-cols-[1fr_2fr]">
      <a href="/">
        <Logo fill="fill-white" />
      </a>
      <div className="xlg:ml-20 ls:gap-28 xxs:gap-14 xs:gap-18 xxs:my-8 my-4 flex flex-col justify-end gap-10 text-center md:my-0 md:flex-row">
        <div>
          <h3 className="xxs:mb-6 mb-3.5 text-base text-white">Features</h3>
          <ul>
            <FooterLink>Link Shortening</FooterLink>
            <FooterLink>Branded Links</FooterLink>
            <FooterLink>Analytics</FooterLink>
          </ul>
        </div>
        <div>
          <h3 className="xxs:mb-6 mb-3.5 text-base text-white">Resources</h3>
          <ul>
            <FooterLink>Blog</FooterLink>
            <FooterLink>Developers</FooterLink>
            <FooterLink>Support</FooterLink>
          </ul>
        </div>
        <div>
          <h3 className="xxs:mb-6 mb-3.5 text-base text-white">Company</h3>
          <ul>
            <FooterLink>About</FooterLink>
            <FooterLink>Our Team</FooterLink>
            <FooterLink>Careers</FooterLink>
            <FooterLink>Contact</FooterLink>
          </ul>
        </div>
      </div>
      <ul className="flex justify-center gap-6 md:justify-start">
        <li>
          <a href="/">
            <IconFacebook />
          </a>
        </li>
        <li>
          <a href="/">
            <IconTwitter />
          </a>
        </li>
        <li>
          <a href="/">
            <IconPinterest />
          </a>
        </li>
        <li>
          <a href="/">
            <IconInstagram />
          </a>
        </li>
      </ul>
    </footer>
  );
}
