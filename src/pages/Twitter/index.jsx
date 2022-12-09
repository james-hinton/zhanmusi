// Components
import TwitterNavbar from "./components/TwitterNavbar";

// Styles
import "./style.scss";

const Twitter = () => {
  // Change the <meta width> to not be 1000px TODO: Remove and add to a global stylesheet
  const meta = document.querySelector('meta[name="viewport"]');
  meta.setAttribute("content", "width=device-width, initial-scale=1");

  return (
    <div id="twitter">
      <div className="twitter-container">
        {/* On the left is the navbar */}
          <TwitterNavbar />
        {/* In the middle is the main content */}
        <div className="twitter-content">Content</div>
        {/* On the right is the sidebar */}
        <div className="twitter-sidebar">Sidebar</div>
      </div>
    </div>
  );
};

export default Twitter;
