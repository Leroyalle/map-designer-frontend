import { CanvasWrapper } from '@/components/shared';
import { Container } from '@/components/ui';
import { projectService } from '@/services';
import { AuthTokensEnum } from '@/types';
import { cookies } from 'next/headers';
import { notFound } from 'next/navigation';

export default async function Project({ params }: { params: Promise<{ id: string }> }) {
  const id = (await params).id;
  const token = (await cookies()).get(AuthTokensEnum.JWT)?.value;
  const headers = token ? { Authorization: `Bearer ${token}` } : undefined;

  try {
    const data = await projectService.getOne(id, headers);

    if (!data) {
      return notFound();
    }

    return (
      <Container>
        <CanvasWrapper data={data.data} isOwner={data.isOwner} />
      </Container>
    );
  } catch (error) {
    console.error(error);
  }
}
