"use client";

import { User } from "@prisma/client";

interface Props {
  currentUser?: User | null;
}

const Test: React.FC<Props> = ({ currentUser }) => {
  console.log(currentUser?.name);
  console.log(currentUser);
  return (
    <div className="h-[200px]">
      <p className="text-white">HIIIII</p>
      <p className="text-white">{currentUser?.name}</p>
    </div>
  );
};
export default Test;
