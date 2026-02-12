import { Background } from '../background/Background';
import { Section } from '../layout/Section';

const techCategories = [
  {
    name: 'Mobile',
    techs: [
      'Kotlin',
      'Java',
      'Jetpack Compose',
      'Android SDK',
      'KMP',
      'Compose Multiplatform',
    ],
  },
  {
    name: 'Backend',
    techs: [
      'Java 8-24',
      'Spring Boot',
      'Spring Cloud',
      'Quarkus',
      'Hibernate',
      'gRPC',
    ],
  },
  {
    name: 'Databases',
    techs: [
      'PostgreSQL',
      'MySQL',
      'Redis',
      'Elasticsearch',
      'DynamoDB',
      'MongoDB',
    ],
  },
  {
    name: 'Cloud & DevOps',
    techs: ['AWS', 'Azure', 'Docker', 'Kubernetes', 'Helm', 'Jenkins'],
  },
  {
    name: 'Messaging & APIs',
    techs: ['REST', 'gRPC', 'Kafka', 'RabbitMQ', 'WebSockets'],
  },
  {
    name: 'Quality & Tools',
    techs: [
      'JUnit',
      'Mockito',
      'Testcontainers',
      'SonarQube',
      'Firebase',
      'Git',
    ],
  },
];

const TechStack = () => (
  <Background color="bg-gray-100 dark:bg-gray-800">
    <Section
      title="Technology Stack"
      description="Battle-tested technologies we use to deliver robust solutions."
    >
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {techCategories.map((category) => (
          <div
            key={category.name}
            className="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-600 dark:bg-gray-700"
          >
            <h3 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
              {category.name}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.techs.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-primary-100 px-3 py-1 text-sm font-medium text-primary-700 dark:bg-primary-900 dark:text-primary-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  </Background>
);

export { TechStack };
