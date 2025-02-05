import { PersonalTabs } from '@/components/shared';
import { CreateMapPopup } from '@/components/shared/create-map-popup';

export default function PersonalPage() {
  return (
    <div className=" bg-[#FaFaFa] ">
      <PersonalTabs />
      <CreateMapPopup />
    </div>
  );
}
