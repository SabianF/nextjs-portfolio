import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const About = () => (
  <Main
    meta={
      <Meta
        title="Who is Sabian?"
        description="Who Sabian is, what he does, and what you might want to know about him."
      />
    }
  >
    <p>
      I grew up with a hard-working mom who did a lot for my sake. This made me
      very complacent in the past, but gave me a lot of freedom to learn and do
      what I wanted, from gaming, to tech, cyber, sciences, psychology, and more
    </p>
    <p>
      I also grew up feeling very alone. My introversion made it hard to
      approach new people, and my lack of self-awareness and social skills
      pushed away the people I DID know, but I overcame this, and learned ways
      to communicate what I want to say comfortably and effectively, and have
      people understand me better. I also had a revelation: I wasn&#39;t the
      only one who went through this
    </p>
    <p>
      More and more people are encountering similar (or worse) isolation,
      loneliness, and conflict. But, as I&#39;ve been watching the trends, I
      determined the source of *all* issues is how people are communicating; the
      solution is in mastering it, because once they do, people will be able to
      resolve conflicts quickly and easily, which leads to them growing
      connection and happy relationships, working together effectively, and
      bringing the world together
    </p>
    <p>
      I have 3 passions:
      <ul>
        <li>Understanding how things work</li>
        <li>Making things better</li>
        <li>Uplifting people</li>
      </ul>
    </p>
    <p>And I make damned sure everything I do brings these to life</p>
  </Main>
);

export default About;
