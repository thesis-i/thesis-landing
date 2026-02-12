import { Section } from '../layout/Section';

const Sponsors = () => (
  <Section
    id="services"
    title="What We Do"
    description="From mobile apps to enterprise backends, we deliver scalable software solutions."
  >
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
      <div className="rounded-xl border border-gray-200 bg-white p-8 dark:border-gray-700 dark:bg-gray-800">
        <div className="mb-4 inline-flex rounded-lg bg-primary-100 p-3 dark:bg-primary-900">
          <svg
            className="size-8 text-primary-500"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="7" y="2" width="10" height="20" rx="2" />
            <path d="M12 18h.01" />
          </svg>
        </div>
        <h3 className="mb-3 text-2xl font-semibold text-gray-900 dark:text-white">
          Mobile Development
        </h3>
        <p className="text-lg leading-8 text-gray-600 dark:text-gray-300">
          Mobile applications built with Kotlin, Jetpack Compose, and Kotlin
          Multiplatform. From native Android to cross-platform solutions, we
          deliver performant, polished experiences.
        </p>
      </div>

      <div className="rounded-xl border border-gray-200 bg-white p-8 dark:border-gray-700 dark:bg-gray-800">
        <div className="mb-4 inline-flex rounded-lg bg-primary-100 p-3 dark:bg-primary-900">
          <svg
            className="size-8 text-primary-500"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="2" y="3" width="20" height="7" rx="1" />
            <rect x="2" y="14" width="20" height="7" rx="1" />
            <circle cx="6" cy="6.5" r="1" fill="currentColor" />
            <circle cx="6" cy="17.5" r="1" fill="currentColor" />
          </svg>
        </div>
        <h3 className="mb-3 text-2xl font-semibold text-gray-900 dark:text-white">
          Backend & API Development
        </h3>
        <p className="text-lg leading-8 text-gray-600 dark:text-gray-300">
          Robust Java and Spring Boot microservices. RESTful APIs, gRPC,
          event-driven systems, and complex business logic — built to handle
          millions of requests at scale.
        </p>
      </div>

      <div className="rounded-xl border border-gray-200 bg-white p-8 dark:border-gray-700 dark:bg-gray-800">
        <div className="mb-4 inline-flex rounded-lg bg-primary-100 p-3 dark:bg-primary-900">
          <svg
            className="size-8 text-primary-500"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M6.5 19a4.5 4.5 0 01-.42-8.98 7 7 0 0113.84 0A4.5 4.5 0 0117.5 19H6.5z" />
          </svg>
        </div>
        <h3 className="mb-3 text-2xl font-semibold text-gray-900 dark:text-white">
          Cloud & DevOps
        </h3>
        <p className="text-lg leading-8 text-gray-600 dark:text-gray-300">
          AWS, Azure, Docker, and Kubernetes. We architect cloud-native
          infrastructure with full CI/CD pipelines, monitoring, and automated
          deployments for reliable operations.
        </p>
      </div>

      <div className="rounded-xl border border-gray-200 bg-white p-8 dark:border-gray-700 dark:bg-gray-800">
        <div className="mb-4 inline-flex rounded-lg bg-primary-100 p-3 dark:bg-primary-900">
          <svg
            className="size-8 text-primary-500"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M16.24 7.76l-2.12 6.36-6.36 2.12 2.12-6.36z" />
          </svg>
        </div>
        <h3 className="mb-3 text-2xl font-semibold text-gray-900 dark:text-white">
          Architecture & Consulting
        </h3>
        <p className="text-lg leading-8 text-gray-600 dark:text-gray-300">
          Technical leadership and architectural guidance. From designing
          service boundaries and API contracts to selecting the right
          technologies and patterns for your product.
        </p>
      </div>
    </div>
  </Section>
);

export { Sponsors };
