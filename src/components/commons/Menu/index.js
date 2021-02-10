import { Logo } from "../../../theme/Logo";
import { MenuWrapper } from "./styles/MenuWrapper";

export default function Menu() {
  const links = [
    {
      text: "Home",
      url: "/",
    },
    {
      text: "FAQ",
      url: "/faq",
    },
    {
      text: "About",
      url: "/about",
    },
  ];

  return (
    <MenuWrapper>
      <MenuWrapper.LeftSide>
        <Logo />
      </MenuWrapper.LeftSide>
      <MenuWrapper.CentralSide>
        {links.map((links) => {
          return (
            <li>
              <a href={links.url}>{links.text}</a>
            </li>
          );
        })}
      </MenuWrapper.CentralSide>
      <MenuWrapper.RightSide>
        <button>Entrar</button>
        <button>Sair</button>
      </MenuWrapper.RightSide>
    </MenuWrapper>
  );
}
