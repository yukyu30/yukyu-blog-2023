const ProfileCard = () => {
  return (
    <div className="flex flex-row space-x-8">
      <img
        className="w-24 rounded-full"
        src="https://s.gravatar.com/avatar/ecb04fa16f05ea11109632c00405fdbb?s=500"
      />

      <div>
        <h2 className="text-2xl">I am Yukyu</h2>
        <p className="text-slate-500">Web Application Developer from Japan🇯🇵</p>
      </div>
    </div>
  );
};
export default ProfileCard;
