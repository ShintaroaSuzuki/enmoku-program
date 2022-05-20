import { ProgramItemProps } from '@/types';

const ProgramItem = ({ item }: { item: ProgramItemProps }) => {
  const ItemComponent = () => {
    switch (item.type) {
      case 'message':
        return (
          <p className="text-center text-sm font-normal leading-loose mt-4 mb-2 py-1 rounded-sm bg-slate-100">
            {item.name}
          </p>
        );
      case 'pause':
        return (
          <p className="text-center text-xs text-slate-400 font-normal leading-loose py-1 my-4 border border-slate-300 rounded-sm">
            {item.name}
          </p>
        );
      case 'piece':
        return (
          <div className="my-0.5">
            <p className="text-xs">{item.composer}</p>
            <p className="text-sm font-semibold">{item.name}</p>
          </div>
        );
      default:
        return (
          <div className="my-0.5">
            <p className="text-xs">{item.composer}</p>
            <p className="text-sm font-semibold">{item.name}</p>
          </div>
        );
    }
  };

  return <div>{ItemComponent()}</div>;
};

export default ProgramItem;
