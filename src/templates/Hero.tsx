import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { ThemeToggle } from '../navigation/ThemeToggle';
import { Logo } from './Logo';

const Hero = () => (
  <Background color="bg-gray-100 dark:bg-gray-800">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />} themeToggle={<ThemeToggle />}>
        <li>
          <Link href="#services">Services</Link>
        </li>
        <li>
          <Link href="#cases">Cases</Link>
        </li>
        <li>
          <Link href="#team">Team</Link>
        </li>
        <li>
          <Link href="/contact/">Contact</Link>
        </li>
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        title={
          <>
            {'Engineering Excellence,\n'}
            <span className="text-primary-500">Delivered.</span>
          </>
        }
        description="A Lviv-based software studio with 5+ years of experience each, building scalable mobile and backend solutions for clients worldwide."
        button={
          <Link href="/contact/">
            <Button xl>Get in Touch</Button>
          </Link>
        }
      />
    </Section>
  </Background>
);

export { Hero };
