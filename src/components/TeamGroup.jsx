import { ProfileCard } from "./Card";

const TeamGroup = ({ title, members, bgColor }) => (
  <div className="w-full rounded-xl" style={{ backgroundColor: bgColor }}>
    <div className="py-12 px-6 mx-auto">
      <h2 className="text-2xl font-semibold text-center mb-6">{title}</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {members.map((m, idx) => (
          <ProfileCard key={idx} name={m.name} role={m.role} img={m.img} />
        ))}
      </div>
    </div>
  </div>
);

export default TeamGroup;
