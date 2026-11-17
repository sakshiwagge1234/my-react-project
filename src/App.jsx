import { useState } from "react";
import "./App.css";

function App() {
  const [activeTab, setActiveTab] = useState("Home");

  const [profile, setProfile] = useState(() => {
    return JSON.parse(localStorage.getItem("cofounderProfile")) || {
      name: "",
      email: "",
      role: "Student",
      skills: "",
      interests: "",
      experience: "Beginner",
      project: "",
      preferredSkills: ""
    };
  });

  const [saved, setSaved] = useState(false);

  const menu = [
    "Home",
    "Explore Teammates",
    "AI Matching",
    "Dashboard",
    "My Profile"
  ];

  function handleChange(e) {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value
    });
    setSaved(false);
  }

  function handleSubmit(e) {
    e.preventDefault();

    localStorage.setItem(
      "cofounderProfile",
      JSON.stringify(profile)
    );

    setSaved(true);
    alert("Your profile has been saved successfully!");
  }

  return (
    <div className="app">

      <nav className="navbar">
        <h2>🚀 CO-Founder</h2>

        <div className="nav-links">
          {menu.map((item) => (
            <button
              key={item}
              className={activeTab === item ? "active" : ""}
              onClick={() => setActiveTab(item)}
            >
              {item}
            </button>
          ))}
        </div>
      </nav>

      {activeTab === "Home" && (
        <section className="hero">
          <span className="badge">
            AI-POWERED TEAMMATE MATCHING
          </span>

          <h1>
            Find Your Perfect <span>Co-Founder.</span>
            <br />
            Build Something Amazing.
          </h1>

          <p>
            Connect with talented innovators, developers
            and entrepreneurs. Find teammates who share
            your vision and complement your skills.
          </p>

          <button onClick={() => setActiveTab("My Profile")}>
            Create Your Profile →
          </button>
        </section>
      )}

      {activeTab === "My Profile" && (
        <section className="content">
          <h1>Create Your Profile</h1>
          <p>Tell us about yourself and find your perfect teammate.</p>

          <form className="profile-form" onSubmit={handleSubmit}>

            <label>Full Name</label>
            <input
              name="name"
              value={profile.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              required
            />

            <label>Email Address</label>
            <input
              type="email"
              name="email"
              value={profile.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />

            <label>Your Role</label>
            <select name="role" value={profile.role} onChange={handleChange}>
              <option>Student</option>
              <option>Founder</option>
              <option>Developer</option>
              <option>Designer</option>
              <option>Entrepreneur</option>
            </select>

            <label>Technical Skills</label>
            <input
              name="skills"
              value={profile.skills}
              onChange={handleChange}
              placeholder="React, Python, Java, HTML..."
              required
            />

            <label>Interests</label>
            <input
              name="interests"
              value={profile.interests}
              onChange={handleChange}
              placeholder="AI, Web Development, Startups..."
              required
            />

            <label>Experience Level</label>
            <select
              name="experience"
              value={profile.experience}
              onChange={handleChange}
            >
              <option>Beginner</option>
              <option>Intermediate</option>
              <option>Advanced</option>
            </select>

            <label>Project Idea</label>
            <textarea
              name="project"
              value={profile.project}
              onChange={handleChange}
              placeholder="Describe your startup or project idea..."
              required
            />

            <label>Preferred Teammate Skills</label>
            <input
              name="preferredSkills"
              value={profile.preferredSkills}
              onChange={handleChange}
              placeholder="Design, Backend, Marketing..."
              required
            />

            <button type="submit">
              Save My Profile
            </button>

            {saved && (
              <p className="success">
                Profile saved successfully!
              </p>
            )}

          </form>
        </section>
      )}

      {activeTab === "Explore Teammates" && (
        <section className="content">
          <h1>Explore Teammates</h1>
          <p>Discover talented people for your next big idea.</p>
          <div className="card">
            <h2>Complete your profile first!</h2>
            <button onClick={() => setActiveTab("My Profile")}>
              Create Profile
            </button>
          </div>
        </section>
      )}

      {activeTab === "AI Matching" && (
        <section className="content">
          <h1>AI Teammate Matching</h1>
          <p>Find people with complementary skills and shared interests.</p>
          <div className="card">
            <h2>Smart Matching Engine</h2>
            <p>Our matching algorithm is coming next!</p>
          </div>
        </section>
      )}

      {activeTab === "Dashboard" && (
        <section className="content">
          <h1>My Dashboard</h1>
          <div className="card">
            <h2>{profile.name || "Welcome!"}</h2>
            <p>{profile.email || "Create your profile to get started."}</p>
            <p>Role: {profile.role}</p>
            <p>Skills: {profile.skills || "Not added yet"}</p>
            <button onClick={() => setActiveTab("My Profile")}>
              Edit Profile
            </button>
          </div>
        </section>
      )}

      <footer>
        © 2026 CO-Founder | AI-Powered Teammate Matching
      </footer>

    </div>
  );
}

export default App;