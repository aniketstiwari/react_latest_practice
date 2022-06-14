//import './App.css';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';
import * as faker from '@faker-js/faker';

function App() {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <div>
          <h4>Warning!</h4>
          Are you sure you want to do this?
        </div>
      </ApprovalCard>
      {/* Below CommentDetail we are passing as prop to ApprovalCard Component */}
      <ApprovalCard>
        <CommentDetail 
          image={faker.image.image()} 
          author="Aniket" 
          timeAgo="Today at 4:45PM"
          comment="Nice blog post" 
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail 
          image={faker.image.image()} 
          author="Shivam" 
          timeAgo="Today at 4:45PM"
          comment="Nice blog post" 
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail 
          image={faker.image.image()} 
          author="Tiwari" 
          timeAgo="Today at 4:45PM"
          comment="Nice blog post" 
        />
      </ApprovalCard>
    </div>
  );
}

export default App;
