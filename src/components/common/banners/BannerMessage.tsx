interface Props {
  message: string;
}

export const BannerMessage = ({ message }: Props) => {
  return (
    <div className="h-[75px] bg-black my-5 text-amber-50 flex justify-center text-md lg:text-2xl items-center">
      {message}
    </div>
  );
};
