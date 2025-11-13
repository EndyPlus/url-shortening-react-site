import FooterLink from "./UI/FooterLink";

export default function Footer() {
  return (
    <footer className="bg-grayish-950 flex">
      <div>
        <h3 className="text-white">Features</h3>
        <ul>
          <FooterLink>Link</FooterLink>
          <FooterLink>Shortening</FooterLink>
          <FooterLink>Branded</FooterLink>
          <FooterLink>Links</FooterLink>
          <FooterLink>Analytics</FooterLink>
        </ul>
      </div>
      <div>
        <h3 className="text-white">Resources</h3>
        <ul>
          <FooterLink>Blog</FooterLink>
          <FooterLink>Developers</FooterLink>
          <FooterLink>Support</FooterLink>
        </ul>
      </div>
      <div>
        <h3 className="text-white">Company</h3>
        <ul>
          <FooterLink>About</FooterLink>
          <FooterLink>Our Team</FooterLink>
          <FooterLink>Careers</FooterLink>
          <FooterLink>Contact</FooterLink>
        </ul>
      </div>
    </footer>
  );
}
