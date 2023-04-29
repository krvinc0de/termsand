import { Viewer } from '@react-pdf-viewer/core';
import { Worker } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css'
import './styles.css'

function App() {
  return (
      <div style={{
          height: '100%'
      }}>
          <Worker workerUrl="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.4.120/pdf.worker.min.js"></Worker>
          <Viewer fileUrl="/docs/temsandconditions.pdf" />
      </div>
  );
}

export default App;
