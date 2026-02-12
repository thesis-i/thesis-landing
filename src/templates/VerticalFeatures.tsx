import { Background } from '../background/Background';
import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Background color="bg-gray-100 dark:bg-gray-800">
    <Section
      id="cases"
      title="Selected Work"
      description="A glimpse into the projects we have delivered across industries. All details are shared within NDA boundaries."
    >
      <VerticalFeatureRow
        title="Sports Streaming Platform"
        description="Developed key mobile features for one of the world's largest sports video streaming services with 50M+ users across mobile and TV. Optimized app loading times by over 30% and improved internationalization services by 60%, delivering a smoother experience for a global audience."
        image="/assets/images/feature.svg"
        imageAlt="Sports streaming platform illustration"
      />
      <VerticalFeatureRow
        title="Semiconductor Management Platform"
        description="Built a comprehensive IoT platform for managing semiconductor etching operations across industrial devices. Implemented a Digital Twin for real-time simulation and anomaly detection using ETL pipelines, enabling intelligent decision-making based on live sensor data and historical analytics."
        image="/assets/images/feature2.svg"
        imageAlt="IoT platform illustration"
        reverse
      />
      <VerticalFeatureRow
        title="Energy Sector Automation"
        description="Engineered an enterprise-grade platform for the energy sector, centralizing complex operational workflows including energy distribution, resource planning, and real-time monitoring with advanced data analytics across distributed networks."
        image="/assets/images/feature3.svg"
        imageAlt="Energy automation illustration"
      />
      <VerticalFeatureRow
        title="Navigation & Route Optimization"
        description="Built a mobile navigation platform integrating real-time air quality monitoring with route optimization. Implemented advanced mapping solutions with Google Maps and HERE SDK, custom tiles, and ground overlays for professional drivers across multilingual markets."
        image="/assets/images/feature.svg"
        imageAlt="Navigation platform illustration"
        reverse
      />
      <VerticalFeatureRow
        title="Fintech Cashback Platform"
        description="Developed a fintech platform for calculating and distributing cashback to users. Implemented transaction processing, rule validation for categories and promo campaigns, and payment provider integrations — with idempotency, auditability, and reliable event-driven architecture."
        image="/assets/images/feature2.svg"
        imageAlt="Fintech platform illustration"
      />
    </Section>
  </Background>
);

export { VerticalFeatures };
