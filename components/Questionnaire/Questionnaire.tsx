import styles from './Questionnaire.module.scss';
import { RecoilRoot } from 'recoil';
import { Slide } from './Slide';

const Component = ({ lineHref }: { lineHref: string }) => {
  return (
    <RecoilRoot>
      <div data-aos="fade-up" className={styles.container}>
        <Slide lineHref={lineHref} />
      </div>
    </RecoilRoot>
  );
};

export default Component;
