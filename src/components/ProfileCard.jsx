import placeholder from "../assets/team/placeholder.png";

const ProfileCard = ({ name, role, img }) => {
  return (
    <div
      className="w-[245px] h-[368px] rounded-2xl flex flex-col items-center justify-center gap-6 pt-6 px-4 text-center"
      style={{
        background: "linear-gradient(to bottom, #2A7CBF 0%, #56ACC6 8%, #9BCDDF 20%, #E0EFF9 60%, #F1F7FF)",
      }}
    >
      <img src={img || placeholder} alt={name} className="w-[150px] h-[150px] rounded-full object-cover" />
      <p className="font-bold text-lg text-black">{name}</p>
      <p className="text-sm text-black">{role}</p>
    </div>
  );
};

export default ProfileCard;
