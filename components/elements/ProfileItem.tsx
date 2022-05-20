import { ProfileItemProps } from '@/types';

const ProfileItem = ({ item }: { item: ProfileItemProps }) => {
  return (
    <div className="flex flex-col gap-y-2">
      <p className="whitespace-pre-wrap font-bold text-sm mb-2">{item.name}</p>
      <p className="whitespace-pre-wrap text-xs">{item.biography}</p>
    </div>
  );
};

export default ProfileItem;
