import GitHubCalendar from 'react-github-calendar';
const Contributions = ({}) => {
    var values = {
        '2021-06-23': 1,
        '2021-06-26': 2,
        '2021-06-27': 2,
        '2021-06-28': 4,
        '2021-06-29': 4
      }
      var until = '2021-06-30';



      const selectLastHalfYear = contributions => {
        const currentYear = new Date().getFullYear();
        const currentMonth = new Date().getMonth();
        const shownMonths = 6;
      
        return contributions.filter(day => {
          const date = new Date(day.date);
          const monthOfDay = date.getMonth();
      
          return (
            date.getFullYear() === currentYear &&
            monthOfDay > currentMonth - shownMonths &&
            monthOfDay <= currentMonth
          );
        });
      };

    return (
        <>  
        <div className="contributions">
            <GitHubCalendar username="james-hinton" year={new Date().getFullYear()}/>
        </div>

        </>
    )
}

export default Contributions