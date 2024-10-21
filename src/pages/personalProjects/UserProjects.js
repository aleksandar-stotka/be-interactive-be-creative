import { useCollection } from "../../hooks/useCollection";
import { useAuthContext } from "../../hooks/useAuthContext";
import Avatar from "../../components/avatar/Avatar";
import "./UserProjects.scss";
import { Link } from "react-router-dom";

const UserProjects = () => {
  const { documents } = useCollection("projects");
  const { user } = useAuthContext();

  // Ensuring userMapDocuments is always an array
  const userMapDocuments = documents
    ? documents.filter((doc) => doc.createdBy.id === user.uid)
    : [];

  if (userMapDocuments.length === 0) {
    return (
      <div className="flex justify-center items-center h-screen bg-blue-500">
        <p className="text-white text-4xl">No projects</p>
      </div>
    );
  }

  return (
    <div className="p-5 bg-blue-500 min-h-screen">
      <div className="flex  justify-center p-3">
        {userMapDocuments.map((project) => (
          <Link
            className="max-w-lg w-full md:w-1/2 lg:w-1/3 bg-white rounded overflow-hidden shadow-lg m-3 p-5"
            to={`/projects/${project.id}`}
            key={project.id}
          >
            <h2 className="text-blue-500 text-2xl font-bold mb-2">
              {project.name}
            </h2>
            <p className="text-blue-500 font-semibold">
              By: {project.createdBy.displayName}
            </p>
            <p className="text-blue-500">{project.details}</p>
            <p className="font-bold text-blue-500">
              Due by: {project.dueDate.toDate().toDateString()}
            </p>
            <div>
              <h2 className="text-dark-500 font-bold">Assigned Users List:</h2>
              <ul className="flex flex-row space-x-4	">
                {project.assingnedUsersList.map((user) => {
                  return (
                    <div key={user.id}>
                      <p>{user.displayName}</p>

                      <Avatar className="p-3" src={user.photoURL} />
                    </div>
                  );
                })}
              </ul>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default UserProjects;
