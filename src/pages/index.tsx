import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const Index = () => {
  return (
    <Main
      meta={
        <Meta
          title="Sabian Finogwar"
          description="This is my NextJS website, based on a NextJS starter boilerplate template"
        />
      }
    >
      <h1>Hello</h1>
    </Main>
  );
};

export default Index;
