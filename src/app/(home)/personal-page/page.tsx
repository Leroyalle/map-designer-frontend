import { PersonalPageWrapper } from '@/components/shared';
import { ObjectParams } from '@/components/shared/canvas/object';
import { Container } from '@/components/ui';

export default function PersonalPage() {
  return (
    <Container>
      <PersonalPageWrapper />
      <ObjectParams />
    </Container>
  );
}
