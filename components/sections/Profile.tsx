import SectionTitle from '@/components/elements/SectionTitle';
import ProfileItem from '@/components/elements/ProfileItem';
import { ProfileItemProps } from '@/types';

const Profile = ({ items }: { items: ProfileItemProps[] }) => {
  return (
    <div
      className="w-full my-16 pt-10 pb-16 flex flex-col items-center drop-shadow bg-white rounded-md"
      data-aos="fade-up"
    >
      <SectionTitle text={'出演者'} id={'profile'} />
      <div className="flex flex-col gap-y-10 w-5/6">
        {items.map((item, key) => (
          <ProfileItem key={`profileItem_${key}`} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Profile;
