import { ObjectParams } from '@/canvas/object/object-params/object-params';
import { PersonalPageWrapper } from '@/components/shared';
import { Container } from '@/components/ui';

export default function PersonalPage() {
  return (
    <Container>
      <PersonalPageWrapper />
      <ObjectParams />
    </Container>
  );
}
