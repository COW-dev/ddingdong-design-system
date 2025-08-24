type Props = {
  name: string;
};

export function OptionGroupName({ name }: Props) {
  return (
    <div className="border-b-2 border-gray-100 px-5 py-2 text-base text-gray-300 md:text-lg">
      {name}
    </div>
  );
}
