import { Section } from '../layout/Section';

const Team = () => (
  <Section
    id="team"
    title="Meet the Team"
    description="Deep expertise and one shared mission: building software that makes a difference."
  >
    <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
      <div className="text-center">
        <div className="mx-auto mb-6 flex size-24 items-center justify-center rounded-full bg-primary-500 text-3xl font-bold text-white">
          MI
        </div>
        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Mykhailo Ilnytskyi
        </h3>
        <p className="mt-1 text-lg font-medium text-primary-500">
          Head of Mobile
        </p>
        <p className="mt-4 text-lg leading-8 text-gray-600 dark:text-gray-300">
          5+ years building production mobile applications with Kotlin, Jetpack
          Compose, and Kotlin Multiplatform. Led mobile development across 5+
          major apps — including a religious content app with 1M+ downloads and
          a navigation platform for professional drivers. Expert in MVI/MVVM
          architecture, mapping integrations, and CI/CD pipelines.
        </p>
        <div className="mt-4 flex flex-wrap justify-center gap-2">
          {[
            'Kotlin',
            'Jetpack Compose',
            'KMP',
            'Compose Multiplatform',
            'Firebase',
          ].map((skill) => (
            <span
              key={skill}
              className="rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-700 dark:bg-gray-700 dark:text-gray-300"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div className="text-center">
        <div className="mx-auto mb-6 flex size-24 items-center justify-center rounded-full bg-primary-700 text-3xl font-bold text-white">
          VB
        </div>
        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Vitalii Bretsko
        </h3>
        <p className="mt-1 text-lg font-medium text-primary-500">
          Head of Backend
        </p>
        <p className="mt-4 text-lg leading-8 text-gray-600 dark:text-gray-300">
          5+ years in backend engineering specializing in scalable
          microservices. Led development teams at GlobalLogic and CodeLions,
          driving architectural decisions from service boundaries to API
          contracts. Deep expertise across fintech, energy, semiconductor, and
          transportation domains with both greenfield and legacy modernization
          projects.
        </p>
        <div className="mt-4 flex flex-wrap justify-center gap-2">
          {['Java', 'Spring Boot', 'Microservices', 'Kubernetes', 'AWS'].map(
            (skill) => (
              <span
                key={skill}
                className="rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-700 dark:bg-gray-700 dark:text-gray-300"
              >
                {skill}
              </span>
            ),
          )}
        </div>
      </div>
    </div>
  </Section>
);

export { Team };
