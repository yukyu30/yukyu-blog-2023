const ProfileCard = () => {
  return (
    <div className="flex justify-start">
      <img
        className="w-[98px] rounded-full mr-4 mb-4"
        src="https://s.gravatar.com/avatar/ecb04fa16f05ea11109632c00405fdbb?s=500"
      />

      <div className="">
        <h2 className="font-bold text-[24px]">I am Yukyu</h2>
        <p className="text-slate-500">Web Application Developer from Japan🇯🇵</p>
      </div>
    </div>
  );
};
export default ProfileCard;
