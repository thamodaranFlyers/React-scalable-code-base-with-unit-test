import { useNavigate } from "react-router-dom";

function LoginPage() {
  const navigate = useNavigate();

  const handleClick = (e) => {
    console.log("Clicked!" + e.target.id);

    if (e.target.id === "user1") {
      sessionStorage.setItem("user-id", "1");
      const perms = {
        org_perms: ["view-projects", "support-plan"],
        project_perms: {
          1: ["view-tasks"],
        },
      };
      sessionStorage.setItem("perms", JSON.stringify(perms));
      //how to redirect to App.js ?
      navigate("/dashboard");
    } else if (e.target.id === "user2") {
      sessionStorage.setItem("user-id", "2");
      const perms = {
        org_perms: ["view-projects", "manage-users", "support-plan"],
        project_perms: {
          1: ["view-tasks"],
          2: ["view-tasks", "create-tasks"],
        },
      };
      sessionStorage.setItem("perms", JSON.stringify(perms));
      //how to redirect to App.js ?
      navigate("/projects");
    } else {
      alert("incorrect user");
      navigate("/login");
    }
  };

  return (
    <div className="container md grid grid-cols-2">
      <div>Login as User1:</div>
      <div>
        <button
          id="user1"
          className="inline-block text-md border border-black rounded shadow-sm"
          onClick={(e) => handleClick(e)}
        >
          User 1
        </button>
      </div>
      <div>Login as User2</div>
      <div>
        <button
          id="user2"
          className="inline-block text-md border border-black rounded shadow-sm"
          onClick={(e) => handleClick(e)}
        >
          User 2
        </button>
      </div>
    </div>
  );
}

export default LoginPage;
