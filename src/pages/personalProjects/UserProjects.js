import { useCollection } from '../../hooks/useCollection';
import { useAuthContext } from '../../hooks/useAuthContext';
import Avatar from '../../components/avatar/Avatar';
import "./UserProjects.scss";
import { Link } from 'react-router-dom';

const UserProjects = () => {
  const { documents } = useCollection("projects");
  const { user } = useAuthContext();

  // Ensuring userMapDocuments is always an array
  const userMapDocuments = documents ? documents.filter((doc) => doc.createdBy.id === user.uid) : [];

  if (userMapDocuments.length === 0) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-white text-4xl">No projects</p>
      </div>
    );
  }

  return (
    <div className="p-5 bg-blue-500 h-screen ">
      <div className="flex justify-center p-3">
        
        {userMapDocuments.map(project => (  // Safely mapping with an initialized array
          <Link className="max-w-lg rounded overflow-hidden shadow-lg p-5 " to={`/projects/${project.id}`} key={project.id}>
            <h2 className='text-white text-2xl font-bold mb-2'>{project.name}</h2>
            <p className='text-blue-100 font-semibold'>By: {project.createdBy.displayName}</p>
            <p className='text-blue-200'>{project.details}</p>
            <p className='font-bold text-blue-200'>Due by: {project.dueDate.toDate().toDateString()}</p>
            <div>
              <ul>
                <h2 className='text-cyan-500 font-bold'>Assigned Users List:</h2>
                {project.assingnedUsersList?.map((user) => (  // Optional chaining for safe access
                  <li className="flex justify-center" key={user.photoURL}>
                    <h4 className='text-blue-200'><br></br> {user.displayName}</h4>  
                    <Avatar src={user.photoURL} />
                  </li>
                ))}
              </ul>
            </div>  
        </Link>
        ))}
      </div>
    </div>
  );
}

export default UserProjects;
