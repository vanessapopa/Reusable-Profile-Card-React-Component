export function Card({ name, title, bio }) {
  return (
    <div className="card">
      <h2>{name}</h2>
      <p className="card-title">{title}</p>
      <p>{bio}</p>
    </div>
  )
}

export function App() {
  const profiles = [
    {
      id: 1,
      name: "Vanessa Popa",
      title: "Full Stack Software Engineer",
      bio: "I like to work with React, Node and JavaScript."
    },
    {
      id: 2,
      name: "Tiffany Smith",
      title: "Engineering manager",
      bio: "I have worked in tech for 15 years and love to help people grow in this industry."

    },
    {
      id: 3,
      name: "Doug Thompson",
      title: "Back-End developer",
      bio: "I have been a software developer for over 20 years and I love working with Go and Rust."
    },
    {
      id: 4,
      name: "Alice Johnson",
      title: "Front-End developer",
      bio: "I like to work with React and JavaScript."
    },
        {
      id: 5,
      name: "Timothy Wilson",
      title: "Back-End Engineer",
      bio: "I have been a software developer for over 20 years and I love working with Go and Rust."
    },
  ];
  return (
    <div className="flex-container">
      {profiles.map((profile) => (
        <Card
          key={profile.id}
          name={profile.name}
          title={profile.title}
          bio={profile.bio}
        />
      ))}
    </div>
  );
}