import React, { useState } from 'react';

interface Member {
  name: string;
}

const TeamCreationPopup: React.FC = () => {
  const [leader, setLeader] = useState('');
  const [coLeader, setCoLeader] = useState('');
  const [teamName, setTeamName] = useState('');
  const [members, setMembers] = useState<Member[]>([{ name: '' }]);

  const handleMemberChange = (index: number, value: string) => {
    const newMembers = members.map((member, i) => {
      if (i === index) {
        return { ...member, name: value };
      }
      return member;
    });
    setMembers(newMembers);
  };

  const addMember = () => {
    if (members.length < 7) {
      setMembers([...members, { name: '' }]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ leader, coLeader, teamName, members });
    
  };

  return (
    <div>
      <h2>Create Your Team</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Team Leader" value={leader} onChange={(e) => setLeader(e.target.value)} />
        <input type="text" placeholder="Co-Leader" value={coLeader} onChange={(e) => setCoLeader(e.target.value)} />
        <input type="text" placeholder="Team Name" value={teamName} onChange={(e) => setTeamName(e.target.value)} />
        {members.map((member, index) => (
          <input
            key={index}
            type="text"
            placeholder={`Member ${index + 1}`}
            value={member.name}
            onChange={(e) => handleMemberChange(index, e.target.value)}
          />
        ))}
        <button type="button" onClick={addMember}>Add Member</button>
        <button type="submit">Create Team</button>
      </form>
    </div>
  );
};

export default TeamCreationPopup;
