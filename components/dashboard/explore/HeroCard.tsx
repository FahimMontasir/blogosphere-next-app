interface Props {
  icon: JSX.Element;
  amount: number;
  title: string;
  lastUpdate: string;
}

export default function HeroCard({ amount, title, icon, lastUpdate }: Props) {
  return (
    <div className="flex flex-col items-center sm:flex-row sm:items-start rounded-xl bg-white p-4 shadow-lg">
      <div className="flex h-12 w-12 items-center justify-center rounded-full border border-blue-100 bg-blue-50">
        {icon}
      </div>

      <div className="sm:ml-4 text-center sm:text-left">
        <h2 className="font-semibold">{`${amount} ${title}`}</h2>
        <p className="sm:mt-2 text-sm text-gray-500">
          Last update: {lastUpdate}
        </p>
      </div>
    </div>
  );
}
