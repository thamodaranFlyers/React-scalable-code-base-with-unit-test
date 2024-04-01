import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function ProjectList({ items }) {
  console.log("in ProjectList component ...", items);

  const renderedItems = items?.map((item) => {
    return (
      <div key={item.id}>
        <Link to={`/project/${item.id}`} state={item}>
          {item.name}
        </Link>
      </div>
    );
  });

  return (
    <div>
      <h1>this is ProjectList component</h1>
      <div>{renderedItems}</div>
      <a href="/support">Static Support Page</a>
    </div>
  );
}

export default ProjectList;

ProjectList.propTypes = {
  items: PropTypes.array,
};
