import { useLocation } from "react-router-dom";
function ProjectDetail() {
  const location = useLocation();
  console.log("in ProjectDetail component", location.state);
  const item = location.state;
  return (
    <div>
      <h1>this is Project Detail component</h1>
      <div key={item.id}>
        <div>
          <table>
            <tbody>
              <tr>
                <td>{item.name}</td>
              </tr>
              <tr>
                <td>{item.description}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetail;
