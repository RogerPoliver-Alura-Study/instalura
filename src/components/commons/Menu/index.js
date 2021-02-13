import { Logo } from '../../../theme/Logo';
import { MenuWrapper } from './styles/MenuWrapper';
import { Button } from '../Button';
import Text from '../../../theme/foundation/Text';

export default function Menu() {
  const links = [
    {
      text: 'Home',
      url: '/',
    },
    {
      text: 'FAQ',
      url: '/faq',
    },
    {
      text: 'About',
      url: '/about',
    },
  ];

  return (
    <MenuWrapper>
      <MenuWrapper.LeftSide>
        <Logo />
      </MenuWrapper.LeftSide>
      <MenuWrapper.CentralSide>
        {links.map(links => {
          return (
            <li key={links.url}>
              <Text variant="smallestException" tag="a" href={links.url}>
                {links.text}
              </Text>
            </li>
          );
        })}
      </MenuWrapper.CentralSide>
      <MenuWrapper.RightSide>
        <Button type="button" ghost variant="secondary.main">
          Entrar
        </Button>
        <Button type="button" variant="primary.main">
          Cadastrar
        </Button>
      </MenuWrapper.RightSide>
    </MenuWrapper>
  );
}
