import Link from 'next/link';

import { Button } from '../button/Button';
import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';

const Banner = () => (
  <Section id="contact">
    <CTABanner
      title="Ready to build something great?"
      subtitle="Let's talk about your project."
      button={
        <Link href="mailto:vbretsko@thesis-i.com">
          <Button>Contact Us</Button>
        </Link>
      }
    />
  </Section>
);

export { Banner };
