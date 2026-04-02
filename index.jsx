import React from 'react';
import ReactDOM from 'react-dom/client';
import TestimonialWithPic from './components/TestimonialWithPic/TestimonialWithPic';
import TestimonialNoPic from './components/TestimonialNoPic/TestimonialNoPic';


function App() {
  return (
    <>  
      <TestimonialNoPic name="John Doe" title="Software Engineer">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis.
      </TestimonialNoPic>
    </>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
