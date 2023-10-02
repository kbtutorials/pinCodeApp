import "./DisplayInTabularFormat.css";

function DisplayInTabularFormat(props) {
  const response = props.response;
  const postOfficeRes = response[0].PostOffice;
  return (
    <table>
      <thead>
        <tr>
          <td>Name</td>
          <td>Circle</td>
          <td>District</td>
          <td>Division</td>
          <td>State</td>
          <td>Country</td>
        </tr>
      </thead>
      <tbody>
        {postOfficeRes.map((pin) => (
          <tr>
            <td>{pin.Name}</td>
            <td>{pin.Circle}</td>
            <td>{pin.District}</td>
            <td>{pin.Division}</td>
            <td>{pin.State}</td>
            <td>{pin.Country}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default DisplayInTabularFormat;
