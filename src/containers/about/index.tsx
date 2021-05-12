import { FunctionComponent } from 'react';
import { GNBLayout } from 'components/layouts';
import { Section } from 'components/contents';
import styles from './index.module.scss';

const Index: FunctionComponent = () => {
  return <div>페이지 준비 중</div>;

  // const frontendSkills = [
  //   'React',
  //   'Typescript',
  //   'Next.js',
  //   'Sass/scss',
  //   'Javascript(ES6+)',
  //   'HTML/CSS',
  //   'Redux',
  //   'Redux-Saga',
  // ];
  // const backendSkills = ['Java', 'Spring Boot 2', 'Oracle', 'MySQL'];
  // const elseSkills = [
  //   'Git',
  //   'Google Analytics',
  //   'Atlassian Jira',
  //   'Bitbucket',
  //   'Microsoft Teams',
  //   'Slack',
  // ];

  // return (
  //   <GNBLayout title="About">
  //     <Section title="Hello">
  //       <article className={styles.about}>
  //         <div className={styles['about-inner']}>
  //           <p>Hyglife is a portfolio of travel concepts for studying web programming.</p>
  //           <p>
  //             I&apos;m a frontend developer who constantly thinks about clean code and performance
  //             in development.
  //           </p>
  //           <p>
  //             The project starts with a collection of travel destinations from Korea to all over the
  //             world.
  //           </p>
  //         </div>
  //       </article>
  //       <article className={styles.stack}>
  //         <p>Specialties :</p>
  //         <ul>
  //           <p>Frontend</p>
  //           {frontendSkills.map((skill) => (
  //             <li key={skill}>{skill}</li>
  //           ))}
  //         </ul>
  //         <ul>
  //           <p>Backend</p>
  //           {backendSkills.map((skill) => (
  //             <li key={skill}>{skill}</li>
  //           ))}
  //         </ul>
  //         <ul>
  //           <p>Else</p>
  //           {elseSkills.map((skill) => (
  //             <li key={skill}>{skill}</li>
  //           ))}
  //         </ul>
  //       </article>
  //       {/* </section> */}
  //     </Section>
  //   </GNBLayout>
  // );
};

export default Index;
